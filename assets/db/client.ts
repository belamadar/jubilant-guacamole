import * as SQLite from 'expo-sqlite';
import { MIGRATIONS } from './migrations';
import { shippedSeedStatements } from './seed';

const DB_NAME = 'jubilant.db';

function openDb() {
  return SQLite.openDatabaseSync(DB_NAME);
}

function getMeta(db: SQLite.SQLiteDatabase, key: string) {
  const row = db.getFirstSync<{ value: string }>('SELECT value FROM meta WHERE key=?;', [key]);
  return row?.value ?? null;
}
function setMeta(db: SQLite.SQLiteDatabase, key: string, value: string) {
  db.runSync(
    'INSERT INTO meta(key,value) VALUES(?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value;',
    [key, value]
  );
}

export function initDb() {
  const db = openDb();

  db.withTransactionSync(() => {
    db.runSync(`CREATE TABLE IF NOT EXISTS meta (key TEXT PRIMARY KEY, value TEXT);`);

    let current = parseInt(getMeta(db, 'schema_version') || '0', 10);
    for (let i = current; i < MIGRATIONS.length; i++) {
      db.execSync(MIGRATIONS[i]);
      setMeta(db, 'schema_version', String(i + 1));
    }

    const dataVersion = parseInt(getMeta(db, 'data_version') || '0', 10);
    if (dataVersion < 1) {
      for (const stmt of shippedSeedStatements()) db.execSync(stmt);
      setMeta(db, 'data_version', '1');
    }
  });

  return db;
}