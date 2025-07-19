'use client';

import { addCart } from '@/data/actions/addCart';

export default function CartBtn({ ItemId }: { ItemId: number }) {
  const handleAddCart = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    addCart(formData);
  };

  return (
    <>
      <form onSubmit={handleAddCart}>
        <input type="number" name="quantity" defaultValue={1} />
        <input type="number" name="product_id" defaultValue={ItemId} />
        <button type="submit" className="border-2 border-poten-gray-1">
          담기
        </button>
      </form>
    </>
  );
}
