import fs from 'node:fs/promises';
import path from 'node:path';
import { getStore } from '@netlify/blobs';

const DATA_DIR = path.join(process.cwd(), 'data');
const LOCAL_FILE = path.join(DATA_DIR, 'supporters.json');
const IS_NETLIFY = Boolean(process.env.NETLIFY);

async function ensureLocalFile() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(LOCAL_FILE);
  } catch {
    await fs.writeFile(LOCAL_FILE, JSON.stringify({ supporters: [] }, null, 2), 'utf8');
  }
}

async function readLocal() {
  await ensureLocalFile();
  const raw = await fs.readFile(LOCAL_FILE, 'utf8');
  const parsed = JSON.parse(raw || '{}');
  return Array.isArray(parsed.supporters) ? parsed.supporters : [];
}

async function writeLocal(supporters) {
  await ensureLocalFile();
  await fs.writeFile(LOCAL_FILE, JSON.stringify({ supporters }, null, 2), 'utf8');
}

async function getBlobSupporters() {
  const store = getStore('supporters');
  const existing = await store.get('entries', { type: 'json' });
  return Array.isArray(existing) ? existing : [];
}

async function setBlobSupporters(supporters) {
  const store = getStore('supporters');
  await store.setJSON('entries', supporters);
}

export async function addSupporter({ name, email, support }) {
  const entry = {
    id: crypto.randomUUID(),
    name: name.trim(),
    email: email.trim().toLowerCase(),
    support: Boolean(support),
    created_at: new Date().toISOString()
  };

  if (IS_NETLIFY) {
    const supporters = await getBlobSupporters();
    supporters.push(entry);
    await setBlobSupporters(supporters);
    return entry.id;
  }

  const supporters = await readLocal();
  supporters.push(entry);
  await writeLocal(supporters);
  return entry.id;
}

export async function getSupportersCount() {
  const supporters = IS_NETLIFY ? await getBlobSupporters() : await readLocal();
  return supporters.filter((entry) => entry.support === true).length;
}
