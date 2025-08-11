import { initDb } from './client';

type Ctx = { days: number; temp?: number | null; rain?: number | null; };
const db = initDb();

function evalFormula(formula: string, { days, temp=null, rain=null }: Ctx) {
  // eslint-disable-next-line no-new-func
  const fn = new Function('days','temp','rain', `return (${formula});`);
  return Number(fn(days, temp, rain));
}

export const repo = {
  createTrip({ id, destination, start_date, end_date, notes }: any) {
    db.runSync(
      `INSERT INTO trip (id,destination,start_date,end_date,notes) VALUES (?,?,?,?,?);`,
      [id, destination, start_date, end_date, notes ?? null]
    );
  },

  setTripActivities(tripId: string, activityIds: string[]) {
    db.withTransactionSync(() => {
      db.runSync(`DELETE FROM trip_activity WHERE trip_id=?;`, [tripId]);
      for (const aid of activityIds) {
        db.runSync(`INSERT INTO trip_activity (trip_id,activity_id) VALUES (?,?);`, [tripId, aid]);
      }
    });
  },

  setTripTransports(tripId: string, transportIds: string[]) {
    db.withTransactionSync(() => {
      db.runSync(`DELETE FROM trip_transport WHERE trip_id=?;`, [tripId]);
      for (const tid of transportIds) {
        db.runSync(`INSERT INTO trip_transport (trip_id,transport_id) VALUES (?,?);`, [tripId, tid]);
      }
    });
  },

  generatePackingList({ tripId, days, temp=null, rain=null }: Ctx & { tripId: string }) {
    const acts = db.getAllSync<{ id:string }>(
      `SELECT activity_id AS id FROM trip_activity WHERE trip_id=?;`, [tripId]
    ).map(r => r.id);
    const trns = db.getAllSync<{ id:string }>(
      `SELECT transport_id AS id FROM trip_transport WHERE trip_id=?;`, [tripId]
    ).map(r => r.id);

    const rules = db.getAllSync<{
      item_id:string; formula:string; default_unit:string|null;
    }>(
      `
      SELECT r.item_id, r.formula, i.default_unit
      FROM rule r
      JOIN item i ON i.id = r.item_id
      WHERE (r.activity_id IS NULL OR r.activity_id IN (${acts.map(()=>'?').join(',') || 'NULL'}))
        AND (r.transport_id IS NULL OR r.transport_id IN (${trns.map(()=>'?').join(',') || 'NULL'}))
        AND r.deleted_at IS NULL
      `,
      [...acts, ...trns]
    );

    db.withTransactionSync(() => {
      for (const r of rules) {
        const qty = Math.max(0, evalFormula(r.formula, { days, temp, rain }));
        const existed = db.getFirstSync<{ overridden:number }>(
          `SELECT overridden FROM trip_item WHERE trip_id=? AND item_id=?;`,
          [tripId, r.item_id]
        );
        if (!existed) {
          db.runSync(
            `INSERT INTO trip_item (trip_id,item_id,quantity,unit,checked,overridden) VALUES (?,?,?,?,0,0);`,
            [tripId, r.item_id, qty, r.default_unit]
          );
        } else if (existed.overridden === 0) {
          db.runSync(
            `UPDATE trip_item SET quantity=?, unit=? WHERE trip_id=? AND item_id=?;`,
            [qty, r.default_unit, tripId, r.item_id]
          );
        }
      }
    });
  },

  toggleItemChecked(tripId: string, itemId: string) {
    db.runSync(
      `UPDATE trip_item SET checked = CASE checked WHEN 1 THEN 0 ELSE 1 END WHERE trip_id=? AND item_id=?;`,
      [tripId, itemId]
    );
  },

  overrideQuantity(tripId: string, itemId: string, quantity: number) {
    db.runSync(
      `UPDATE trip_item SET quantity=?, overridden=1 WHERE trip_id=? AND item_id=?;`,
      [quantity, tripId, itemId]
    );
  },

  getTripItems(tripId: string, opts: { onlySelected?: boolean; onlyChecked?: boolean|null } = {}) {
    const { onlySelected=false, onlyChecked=null } = opts;
    let q = `
      SELECT ti.item_id, i.name, i.category, ti.quantity, ti.unit, ti.checked, ti.overridden
      FROM trip_item ti JOIN item i ON i.id = ti.item_id
      WHERE ti.trip_id = ?`;
    const params: any[] = [tripId];
    if (onlySelected) q += ` AND (ti.quantity > 0 OR ti.checked=1)`;
    if (onlyChecked === true)  q += ` AND ti.checked=1`;
    if (onlyChecked === false) q += ` AND ti.checked=0`;
    q += ` ORDER BY i.category, i.name;`;
    return db.getAllSync(q, params);
  }
};
