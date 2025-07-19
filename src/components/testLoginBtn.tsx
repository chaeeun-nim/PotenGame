'use client';

import testLogin from '@/data/functions/testLogin';

export default function TestLoginBtn() {
  return (
    <>
      <button onClick={testLogin}>로그인</button>
    </>
  );
}
