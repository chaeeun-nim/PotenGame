'use client';

import useCartStore from '@/zustand/cartStore';
import CartItem from './CartItem';
import Nocart from './Nocart';

export default function CartList() {
  const cart = useCartStore((state) => state.cart);
  const cartList = cart.map((item) => <CartItem item={item} key={item._id} />);

  return (
    <>
      <div className="xl:max-w-[1200px]  mx-auto">
        {cart.length === 0 ? <Nocart /> : cartList}
      </div>
    </>
  );
}
