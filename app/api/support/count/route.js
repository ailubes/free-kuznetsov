import { NextResponse } from 'next/server';
import { getSupportersCount } from '@/lib/support-store';

export const runtime = 'nodejs';

export async function GET() {
  const count = await getSupportersCount();
  return NextResponse.json({ count });
}
