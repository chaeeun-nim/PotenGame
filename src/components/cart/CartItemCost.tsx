'use client';

import useCartStore from '@/zustand/cartStore';

export default function CartItemCost({ cartId }: { cartId: number }) {
  const { cart } = useCartStore();

  const thisCart = cart.find((item) => item._id === cartId);

  return (
    <>
      <div className="flex justify-between items-start leading-[26px] xl:pb-[0px] pb-[16px] md:justify-end">
        <p className="md:mr-[16px]"> 결제금액 </p>
        {thisCart ? (
          <p className="font-extrabold text-poten-red text-[26px]">
            {(thisCart?.quantity * thisCart?.product.price).toLocaleString()} 원
          </p>
        ) : null}
      </div>
    </>
  );
}
