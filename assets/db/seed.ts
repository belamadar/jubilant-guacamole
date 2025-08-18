import shippedData from './data.json';

export function shippedSeedStatements() {
  const stmts: string[] = [];

  for (const a of shippedData.activities) {
    stmts.push(
      `INSERT OR IGNORE INTO activity (id,name,source) VALUES ('${a.id}','${a.name}','app');`
    );
  }
  for (const t of shippedData.transport_modes) {
    stmts.push(
      `INSERT OR IGNORE INTO transport_mode (id,name,source) VALUES ('${t.id}','${t.name}','app');`
    );
  }
  for (const i of shippedData.items) {
    stmts.push(
      `INSERT OR IGNORE INTO item (id,name,category,default_unit,source) VALUES
        ('${i.id}','${i.name}','${i.category}','${i.default_unit}','app');`
    );
  }
  for (const r of shippedData.rules) {
    stmts.push(
      `INSERT OR IGNORE INTO rule (id,activity_id,transport_id,item_id,formula,note,source) VALUES
        ('${r.id}',${r.activity_id ? `'${r.activity_id}'` : 'NULL'},${r.transport_id ? `'${r.transport_id}'` : 'NULL'},
         '${r.item_id}','${r.formula}','${r.note}','app');`
    );
  }

  return stmts;
}