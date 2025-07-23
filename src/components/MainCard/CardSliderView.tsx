'use client';

import { Iproduct } from '@/types/products';
import { useMediaQuery } from 'react-responsive';
import TabletCardList from './TabletCardList';
import MobileCardList from './MobileCardList';
import PcCardList from './PcCardList';
import { useEffect, useState } from 'react';

/*
  해당 반응형 구현이 달라지는 이유.
  1. 태블릿 / PC / 모바일의 기능이 각기 다름. (PC/태블릿 -> 슬라이드 구현 /  모바일 -> 더보기 버튼)
  2. PC와 태블릿의 보여지는 슬라이드 갯수가 다름
*/

export default function CardSliderView({
  ProductItems,
  btnId,
}: {
  ProductItems: Iproduct[];
  btnId: string;
}) {
  const [mount, setMount] = useState(false); // [1] 반응형에 따른 컴포넌트 렌더링으로 인해, 마운트 상태 체크

  useEffect(() => {
    setMount(true);
  }, []); // [2] 완전히 마운트가 된 이후에

  // react-responsive를 활용한 반응형구현
  const isMobile = useMediaQuery({ maxWidth: 767 }); // 모바일
  const isDeskTop = useMediaQuery({ minWidth: 1280 }); // 태블릿
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 }); //PC

  if (!mount) return null; // [3] 마운트가 되지않으면 아무것도 리턴하지 않고,

  // [3] 마운트가 되었을때, 반응형 감지후 화면 사이즈에 따른 컴포넌트 렌더링 진행
  return (
    <>
      {isDeskTop && <PcCardList ProductItems={ProductItems} btnId={btnId} />}
      {isTablet && <TabletCardList ProductItems={ProductItems} btnId={btnId} />}
      {isMobile && <MobileCardList ProductItems={ProductItems} btnId={btnId} />}
    </>
  );
}
