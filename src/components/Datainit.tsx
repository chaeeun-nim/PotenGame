'use client';

import { getCart } from '@/data/functions/getCart';
import useCartStore from '@/zustand/cartStore';
import { useEffect, useState } from 'react';

export default function Datainit() {
  const [Login] = useState(true);
  console.log(Login);
  const { setCart, setCost } = useCartStore();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCart();
      if (res.ok) {
        setCart(res.item);
        setCost(res.cost);
      }
    };

    fetchData();
  }, [setCart, setCost]);

  return null;
}
