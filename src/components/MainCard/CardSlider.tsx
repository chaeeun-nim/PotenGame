'use client';

import { Iproduct } from '@/types/products';
import { useMediaQuery } from 'react-responsive';
import TabletCardSlider from './TabletCardSlider';
import DefualtCardSlider from './DefualtCardSlider';
import PcCardSlider from './PcCardSlider copy';

export default function CardSlier({
  ProductItems,
  btnId,
}: {
  ProductItems: Iproduct[];
  btnId: string;
}) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDeskTop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  return (
    <>
      {isDeskTop && <PcCardSlider ProductItems={ProductItems} btnId={btnId} />}
      {isTablet && <TabletCardSlider ProductItems={ProductItems} btnId={btnId} />}
      {isMobile && <DefualtCardSlider ProductItems={ProductItems} btnId={btnId} />}
    </>
  );
}
