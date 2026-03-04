import fs from 'node:fs';
import path from 'node:path';
import Database from 'better-sqlite3';

const dbDir = path.join(process.cwd(), 'data');
const dbPath = path.join(dbDir, 'supporters.db');

if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS supporters (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    support INTEGER NOT NULL DEFAULT 1,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
`);

export function addSupporter({ name, email, support }) {
  const stmt = db.prepare(
    'INSERT INTO supporters (name, email, support) VALUES (?, ?, ?)'
  );
  const result = stmt.run(name.trim(), email.trim().toLowerCase(), support ? 1 : 0);
  return result.lastInsertRowid;
}

export function getSupportersCount() {
  const row = db.prepare('SELECT COUNT(*) AS count FROM supporters WHERE support = 1').get();
  return row?.count ?? 0;
}
