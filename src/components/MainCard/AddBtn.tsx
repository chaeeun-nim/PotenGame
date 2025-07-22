'use client';

import { addCart } from '@/data/actions/addCart';

import { useActionState } from 'react';

export default function AddBtn({ ItemId }: { ItemId: number }) {
  const [state, formAction] = useActionState(addCart, null);
  console.log(state);

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
