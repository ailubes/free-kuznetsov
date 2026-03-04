import { NextResponse } from 'next/server';
import { getSupportersCount } from '@/lib/support-db';

export const runtime = 'nodejs';

export async function GET() {
  const count = getSupportersCount();
  return NextResponse.json({ count });
}
