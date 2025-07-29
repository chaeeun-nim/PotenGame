import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST() {
  const cookieStore = await cookies();
  cookieStore.set('can_payment', 'true', {
    httpOnly: true,
    path: '/payment',
    maxAge: 60,
  });

  return NextResponse.json({ ok: true });
}
