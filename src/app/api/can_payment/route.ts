import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST() {
  const cookieStore = await cookies();
  cookieStore.set('can_payment', 'true', {
    httpOnly: true,
    path: '/',
    maxAge: 1,
  });

  return NextResponse.json({ ok: true });
}
