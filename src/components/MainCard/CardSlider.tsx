'use client';

import { Iproduct } from '@/types/products';
import { useMediaQuery } from 'react-responsive';
import TabletCardSlider from './TabletCardSlider';
import DefualtCardSlider from './DefualtCardSlider';
import PcCardSlider from './PcCardSlider copy';

export default function CardSlier({ ProductItems }: { ProductItems: Iproduct[] }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDeskTop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  return (
    <>
      {isDeskTop && <PcCardSlider ProductItems={ProductItems} />}
      {isTablet && <TabletCardSlider ProductItems={ProductItems} />}
      {isMobile && <DefualtCardSlider ProductItems={ProductItems} />}
    </>
  );
}
