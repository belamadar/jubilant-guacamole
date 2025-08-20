export const MIGRATIONS = [
/* 001_init */
`PRAGMA foreign_keys=ON;

CREATE TABLE IF NOT EXISTS meta (
  key TEXT PRIMARY KEY,
  value TEXT
);

CREATE TABLE IF NOT EXISTS activity (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  source TEXT NOT NULL CHECK (source IN ('app','user')),
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  deleted_at TEXT
);

CREATE TABLE IF NOT EXISTS transport_mode (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  source TEXT NOT NULL CHECK (source IN ('app','user')),
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  deleted_at TEXT
);

CREATE TABLE IF NOT EXISTS item (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  default_unit TEXT,
  source TEXT NOT NULL CHECK (source IN ('app','user')),
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  deleted_at TEXT
);

CREATE TABLE IF NOT EXISTS rule (
  id TEXT PRIMARY KEY,
  activity_id TEXT,
  transport_id TEXT,
  item_id TEXT NOT NULL,
  formula TEXT NOT NULL,
  note TEXT,
  source TEXT NOT NULL CHECK (source IN ('app','user')),
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  deleted_at TEXT,
  FOREIGN KEY (activity_id) REFERENCES activity(id),
  FOREIGN KEY (transport_id) REFERENCES transport_mode(id),
  FOREIGN KEY (item_id) REFERENCES item(id)
);

CREATE TABLE IF NOT EXISTS trip (
  destination TEXT PRIMARY KEY NOT NULL,
  start_date TEXT NOT NULL,
  end_date TEXT NOT NULL,
  notes TEXT,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  deleted_at TEXT
);

CREATE TABLE IF NOT EXISTS trip_activity (
  destination TEXT NOT NULL,
  activity_id TEXT NOT NULL,
  PRIMARY KEY (destination, activity_id),
  FOREIGN KEY (destination) REFERENCES trip(destination) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (activity_id) REFERENCES activity(id)
);

CREATE TABLE IF NOT EXISTS trip_transport (
  destination TEXT NOT NULL,
  transport_id TEXT NOT NULL,
  PRIMARY KEY (destination, transport_id),
  FOREIGN KEY (destination) REFERENCES trip(destination) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (transport_id) REFERENCES transport_mode(id)
);

CREATE TABLE IF NOT EXISTS trip_item (
  destination TEXT NOT NULL,
  item_id TEXT NOT NULL,
  quantity REAL NOT NULL,
  unit TEXT,
  checked INTEGER NOT NULL DEFAULT 0,
  overridden INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (destination , item_id),
  FOREIGN KEY (destination) REFERENCES trip(destination) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (item_id) REFERENCES item(id)
);

INSERT OR IGNORE INTO meta(key, value) VALUES ('schema_version', '1');
INSERT OR IGNORE INTO meta(key, value) VALUES ('data_version', '0');
`
];