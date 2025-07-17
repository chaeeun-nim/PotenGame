'use client';

import { useEffect, useState } from 'react';
import MainBestBtnActive from './MainBestBtn';
import SwitchBest from './SwitchBest';
import PsBest from './PsBest';

export default function BestSellerTabs() {
  const [active, setActive] = useState(true);
  const [opacity, setOpacity] = useState('opacity-0');

  // active가 참일때는 닌텐도 스위치/ 거짓일때는 플레이 스테이션 보여주기
  const tabToggle = () => {
    setActive(!active);
    setOpacity('opacity-0');
  };

  useEffect(() => {
    setTimeout(() => {
      setOpacity('opacity-100');
    }, 500);
  }, [active]);

  return (
    <>
      <div className="grid grid-cols-2 mt-[16px]">
        <MainBestBtnActive active={active} onClick={tabToggle}>
          Nintendo Switch
        </MainBestBtnActive>
        <MainBestBtnActive active={!active} onClick={tabToggle}>
          Play Station
        </MainBestBtnActive>
      </div>
      <div className="bg-poten-snowgray1 p-[16px] border-b-1 border-poten-gray-1 ">
        {active ? <SwitchBest opacity={opacity} /> : <PsBest opacity={opacity} />}
      </div>
    </>
  );
}
