'use client';

import useCartStore from '@/zustand/cartStore';
import { useEffect, useState } from 'react';

const useHasHydrated = () => {
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    console.log('리하이드레이션 이전');
    console.log(useCartStore.persist);
    const unsubscribe = useCartStore.persist.onFinishHydration(() => {
      console.log('리하이드레이션 하는중');
      setHasHydrated(true);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return hasHydrated;
};

export default useHasHydrated;
