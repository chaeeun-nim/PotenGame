// src/app/api/myorder/route.ts

import { NextResponse } from 'next/server';

export async function GET() {
  const summary = [
    { state: 'OS010', count: 2 },
    { state: 'OS020', count: 1 },
    { state: 'OS030', count: 0 },
    { state: 'OS040', count: 3 },
  ];

  return NextResponse.json({ ok: true, item: summary });
}
