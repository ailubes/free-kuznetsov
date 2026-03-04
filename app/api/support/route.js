import { NextResponse } from 'next/server';
import { addSupporter } from '@/lib/support-store';

export const runtime = 'nodejs';

export async function POST(request) {
  try {
    const body = await request.json();
    const name = body?.name?.trim() || '';
    const email = body?.email?.trim() || '';
    const support = Boolean(body?.support);

    if (!name || !email || !support) {
      return NextResponse.json(
        { ok: false, message: 'Заповніть імʼя, email і підтвердьте підтримку.' },
        { status: 400 }
      );
    }

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValid) {
      return NextResponse.json({ ok: false, message: 'Вкажіть коректний email.' }, { status: 400 });
    }

    await addSupporter({ name, email, support: true });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, message: 'Помилка збереження даних.' }, { status: 500 });
  }
}
