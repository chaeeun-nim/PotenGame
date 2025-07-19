'use client';

import { Iproduct } from '@/types/products';
import { useMediaQuery } from 'react-responsive';
import TabletCardList from './TabletCardList';
import MobileCardList from './MobileCardList';
import PcCardList from './PcCardList';
import { useEffect, useState } from 'react';

export default function CardSliderView({
  ProductItems,
  btnId,
}: {
  ProductItems: Iproduct[];
  btnId: string;
}) {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDeskTop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });

  if (!mount) return null;
  return (
    <>
      {isDeskTop && <PcCardList ProductItems={ProductItems} btnId={btnId} />}
      {isTablet && <TabletCardList ProductItems={ProductItems} btnId={btnId} />}
      {isMobile && <MobileCardList ProductItems={ProductItems} btnId={btnId} />}
    </>
  );
}
