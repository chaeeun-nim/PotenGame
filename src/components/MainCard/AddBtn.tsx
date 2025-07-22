'use client';

import { addCart } from '@/data/actions/addCart';
import useHasHydrated from '@/Hooks/useHasHydrated ';

import { useActionState } from 'react';

export default function AddBtn({ ItemId }: { ItemId: number }) {
  const [state, formAction, isLoading] = useActionState(addCart, null);

  const hasHydrated = useHasHydrated();

  if (!hasHydrated) {
    return <div>로딩 중...</div>;
  }
  console.log(isLoading, state);

  return (
    <>
      <form action={formAction}>
        <input type="number" name="product_id" hidden defaultValue={ItemId} />
        <input type="numver" name="quantity" hidden defaultValue={1} />
        <button type="submit">담기</button>
      </form>
    </>
  );
}
