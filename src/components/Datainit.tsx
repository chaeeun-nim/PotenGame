'use client';

import { getCart } from '@/data/functions/getCart';
import useCartStore from '@/zustand/cartStore';
import { useEffect, useState } from 'react';

export default function Datainit() {
  const [Login] = useState(true);
  console.log(Login);
  const { cart, cost, setCart, setCost, resetStore } = useCartStore();

  useEffect(() => {
    resetStore();
    useCartStore.persist.clearStorage();
    const fetchData = async () => {
      const res = await getCart();
      if (res.ok) {
        setCart(res.item);
        setCost(res.cost);
      }
    };

    fetchData();
    console.log('fetchData랑 같은 이펙트');
    console.log(cart);
    console.log(cost);
  }, []); //오지랖 경고문(그냥 무시하기)

  useEffect(() => {
    console.log('다른 유즈이펙트');
    console.log(cart);
    console.log(cost);
  }, [cart, cost]);

  return null;
}
