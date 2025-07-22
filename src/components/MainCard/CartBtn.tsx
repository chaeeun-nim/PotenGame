'use client';

import { useEffect, useState } from 'react';
import useCartStore from '@/zustand/cartStore';
import AddBtn from './AddBtn';

export default function CartBtn({ ItemId }: { ItemId: number }) {
  const { cart } = useCartStore();
  const [isInCart, setIsIncart] = useState(
    cart.some((item) => item.product._id === ItemId),
  );

  useEffect(() => {
    setIsIncart(cart.some((item) => item.product._id === ItemId));
  }, [cart]);

  return <>{!isInCart ? <AddBtn ItemId={ItemId} /> : <p>이미담김</p>}</>;
}
