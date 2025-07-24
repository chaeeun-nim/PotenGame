'use client';

import useCartStore from '@/zustand/cartStore';

export default function CartItemCost({ cartId }: { cartId: number }) {
  const { cart } = useCartStore();
  const thisCart = cart.find((item) => item._id === cartId);
  return (
    <>
      <div>
        <p>결제금액</p>
        {thisCart ? <p>{thisCart?.quantity * thisCart?.product.price}</p> : null}
      </div>
    </>
  );
}
