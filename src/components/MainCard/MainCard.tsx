'use client';

import { Iproduct } from '@/types/products';
import Image from 'next/image';
import NintendoSwitchIcon from '../../assets/icons/nintendoIcon.svg';
import PsIcon from '../../assets/icons/psicon.svg';
import NintendoDsIcon from '../../assets/icons/nintendods.svg';
import Link from 'next/link';
import MainCardInfo from './MainCardInfo';

export default function MainCard({ item }: { item: Iproduct }) {
  let PlatformIcons;
  let PlatformColor;

  // 플렛폼에 따른 상단 아이콘 변경을 위한 조건문
  switch (item.extra.platform) {
    case 'Nintendo Switch': {
      PlatformIcons = (
        <Image
          src={NintendoSwitchIcon}
          alt={item.extra.platform}
          className="w-5 h-auto "
          width={36}
          height={36}
        />
      );
      break;
    }
    case 'Nintendo NDS': {
      PlatformIcons = (
        <Image
          src={NintendoDsIcon}
          alt={item.extra.platform}
          className="w-8 h-auto "
          width={36}
          height={36}
        />
      );
      break;
    }
    case 'PlayStation': {
      PlatformIcons = (
        <Image
          src={PsIcon}
          alt={item.extra.platform}
          className="w-5 h-auto "
          width={36}
          height={36}
        />
      );
      break;
    }
  }

  // 플렛폼에 따른 상단 띠 배경색상 변경을 위한 조건문
  switch (item.extra.platform) {
    case 'Nintendo Switch': {
      PlatformColor = 'bg-poten-nintendo';
      break;
    }
    case 'Nintendo NDS': {
      PlatformColor = 'bg-[#000]';
      break;
    }
    case 'PlayStation': {
      PlatformColor = 'bg-poten-psblue';
      break;
    }
  }

  return (
    <>
      <div>
        <Link
          href={`/list/${item.extra.category[1]}/${item._id}`}
          className="rounded-[4px] md:rounded-[8px] bg-white block overflow-hidden shadow">
          <div
            className={`${PlatformColor} flex gap-1 justify-center items-center py-1 h-[30px]`}>
            {PlatformIcons}
            <p className="font-extrabold text-[20px] text-white leading-[100%]">
              {/* 닌텐도 DS 시리즈는 따로 플랫폼 버전 숫자가 없으므로, NDS에서 분기하여 처리 */}
              {item.extra.platform !== 'Nintendo NDS' ? item.extra.platformVersion : null}
            </p>
          </div>
          <Image
            className="mx-auto p-2 md:p-4 w-[100px] md:w-[150px]"
            src={item.mainImages[0].path}
            alt={item.name}
            width={100}
            height={100}></Image>
        </Link>
        <MainCardInfo item={item} /> {/* 카드 내용 컴포넌트 */}
      </div>
    </>
  );
}
