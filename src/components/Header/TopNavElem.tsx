'use client';

import '@/app/globals.css';

import Image from 'next/image';
import Link from 'next/link';
import type { StaticImageData } from 'next/image';
import useListStore from '@/zustand/listStore';

interface TopNavElemType {
  title: string;
  link: string;
  img: StaticImageData;
  categoryCode: string;
}

export function TopNavElem({ title, link, img, categoryCode }: TopNavElemType) {
  const { setFilters, resetFilters } = useListStore();

  // 카테고리 클릭 핸들러
  const handleCategoryClick = () => {
    // 카테고리 플랫폼 필터 설정
    const platformValue = getCategoryValue(categoryCode);
    resetFilters(); // 기존 필터 초기화
    setFilters({ platform: platformValue }); // 해당 카테고리 필터 설정
  };

  // 서브 카테고리 클릭 핸들러
  const handleSubCategoryClick = (
    condition: 'used' | 'new',
    category: 'GAME' | 'HARDWARE',
  ) => {
    const platformValue = getCategoryValue(categoryCode);
    resetFilters(); // 기존 필터 초기화

    // 플랫폼, 컨디션, 카테고리 필터 동시 설정
    setFilters({
      platform: platformValue,
      condition: condition === 'used' ? 'used' : 'new',
      category: category,
    });
  };

  // 카테고리 코드 따라 플랫폼 값 반환
  const getCategoryValue = (categoryCode: string): string => {
    const categoryMap: { [key: string]: string } = {
      NINTENDONDS: '닌텐도 NDS',
      NINTENDO01: '닌텐도 스위치 1',
      NINTENDO02: '닌텐도 스위치 2',
      PLAYSTATION04: '플레이스테이션 4',
      PLAYSTATION05: '플레이스테이션 5',
    };

    return categoryMap[categoryCode] || categoryCode;
  };

  return (
    <li className="group relative py-5">
      <Link href={link} onClick={handleCategoryClick}>
        <span className="group-hover:font-bold group-hover:text-poten-red">{title}</span>
      </Link>
      <div className="hidden w-150 bg-white border-1 border-poten-gray-1 xl:group-hover:flex hover:flex absolute top-16 z-1">
        <ul className="flex flex-col gap-3 p-6 border-r-1 border-poten-gray-1">
          <li>
            <Link href={link} onClick={() => handleSubCategoryClick('used', 'HARDWARE')}>
              중고 게임기
            </Link>
          </li>
          <li>
            <Link href={link} onClick={() => handleSubCategoryClick('used', 'GAME')}>
              중고 게임
            </Link>
          </li>
          <li>
            <Link href={link} onClick={() => handleSubCategoryClick('new', 'HARDWARE')}>
              새제품 게임기
            </Link>
          </li>
          <li>
            <Link href={link} onClick={() => handleSubCategoryClick('new', 'GAME')}>
              새제품 게임
            </Link>
          </li>
        </ul>
        <Image className="w-100" src={img} alt={title} />
      </div>
    </li>
  );
}
