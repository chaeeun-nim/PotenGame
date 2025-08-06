import mdbest1 from '@/assets/img/mdbest1.webp';
import mdbest2 from '@/assets/img/mdbest2.webp';
import { StaticImageData } from 'next/image';

export interface MdItem {
  _id: number;
  src: StaticImageData;
  title: string;
  contents: string;
  platform: string;
  price: number;
  originalPrice: number;
  releaseDate: string;
  category: string[];
}

export const MdItems: MdItem[] = [
  {
    _id: 47,
    title: '슈퍼 마리오 파티 잼버리/잼버리 TV',
    src: mdbest1,
    contents:
      '대가족도 모두가 즐거운 슈퍼마리오 파티 새로운 게임! 잼버리 TV 확장팩까지 한꺼번에 즐기는 두배의 즐거움!',
    platform: 'Nintendo Switch 2',
    price: 74800,
    originalPrice: 84800,
    releaseDate: '2025-07-24',
    category: ['GAME', 'NINTENDO02', 'NEW'],
  },
  {
    _id: 49,
    title: '다마고치 원더 샵',
    src: mdbest2,
    contents:
      '다마고치의 세계에서 꿈을 키우는 가게 놀이 게임! 개성 넘치는 12종류의 가게의 일을 도울 수 있어요! 가족이나 친구와 즐겁게 가게 일을 도와 봐요♪',
    platform: 'Nintendo Switch 2',
    price: 49800,
    originalPrice: 59800,
    releaseDate: '2025-06-26',
    category: ['GAME', 'NINTENDO02', 'NEW'],
  },
];
