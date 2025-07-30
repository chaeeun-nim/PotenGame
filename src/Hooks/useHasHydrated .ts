'use client';

import useCartStore from '@/zustand/cartStore';
import { useEffect, useState } from 'react';

const useHasHydrated = () => {
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    console.log(useCartStore.persist);
    const unsubscribe = useCartStore.persist.onFinishHydration(() => {
      setHasHydrated(true);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return hasHydrated;
};

export default useHasHydrated;
