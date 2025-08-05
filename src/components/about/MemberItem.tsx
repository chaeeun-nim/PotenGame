'use client';

import { teamPerson } from '@/app/about/teamData';
import Image from 'next/image';
import Link from 'next/link';
import githubIcon from '@/assets/icons/github.svg';
import { theJamsil } from '@/app/about/font';
import { useState } from 'react';
import arrowUp from '@/assets/icons/arrow-up.svg';
import arrowDown from '@/assets/icons/arrow-down.svg';

/* <h1 className={`${theJamsil.className}`}>어바웃페이지</h1> */

export default function MemberItem({ item }: { item: teamPerson }) {
  const [active, setActive] = useState(false);

  return (
    <>
      <article
        className="hidden p-[36px] bg-white rounded-[8px]
      w-full mx-auto shadow-[0_0_10px_0_rgba(0,0,0,0.10)] xl:grid grid-cols-12 gap-6">
        <div className="col-span-3 flex flex-col gap-5">
          <h3
            className={`${theJamsil.className} bg-poten-red text-white py-1 text-[22px] rounded-[50px] w-[180px]`}>
            <Link
              href={item.githubLink}
              className="flex justify-center items-center  gap-2">
              <Image src={githubIcon} width={30} height={30} alt="깃헙 저장소" />
              {item.name}
            </Link>
          </h3>
          <h4
            className={`${theJamsil.className} text-[24px] leading-[32px] whitespace-pre-line`}>
            {item.title}
          </h4>
          <p className="text-poten-gray-2 font-medium text-[16px] whitespace-pre-line">
            {item.subtitle}
          </p>
        </div>
        <Image
          className="col-span-3 w-full"
          src={item.img}
          alt={`${item.name} 캐릭터 이미지`}
          width={240}
          height={197}
        />
        <div className="col-span-4">
          <h4
            className={`${theJamsil.className} text-[20px] whitespace-pre-line mb-[20px]`}>
            {item.reviewtitle}
          </h4>
          <p className="text-[16px] text-poten-black font-medium">{item.review}</p>
        </div>
        <div className="col-span-2">
          <h4 className="{`${theJamsil.className} text-center font-extrabold mb-[20px] bg-poten-gray3 text-white py-1 text-[22px] rounded-[50px] w-[180px]`}">
            {item.position}
          </h4>
          <p
            className={` whitespace-pre-line ${theJamsil.className} text-center text-[16px]`}>
            {item.work}
          </p>
        </div>
      </article>
      <article
        className="xl:hidden bg-white rounded-t-[8px] 
      w-full mx-auto shadow-[0_0_10px_0_rgba(0,0,0,0.10)] ">
        <div className="px-[24px] py-[32px] flex flex-row justify-start items-start">
          <Image
            src={item.img}
            alt={`${item.name} 캐릭터 이미지`}
            width={240}
            height={197}
          />
          <div>
            <div className="flex gap-4">
              <h3
                className={`${theJamsil.className} bg-poten-red text-white
                py-1  text-[22px] rounded-[50px] w-[180px]`}>
                <Link
                  href={item.githubLink}
                  className="flex justify-center items-center  gap-x-2">
                  <Image src={githubIcon} width={30} height={30} alt="깃헙 저장소" />
                  {item.name}
                </Link>
              </h3>
              <h3
                className={`${theJamsil.className} block text-center font-extrabold  bg-poten-gray3
              text-white py-1 text-[22px] rounded-[50px] w-[180px]`}>
                {item.position}
              </h3>
            </div>
            <h4>{item.title}</h4>
            <p>{item.subtitle}</p>
          </div>
        </div>
        {/* 상세 리뷰 */}
        <div
          className={`origin-top transform transition-all duration-500 ease-in-out
            overflow-hidden ${active ? ' max-h-[800px]' : 'max-h-[0px]'}
             
          `}>
          <div className="px-[24px] py-[32px] border-t-1 border-poten-gray-1">
            <h3>{item.reviewtitle}</h3>
            <h3>{item.review}</h3>
          </div>
        </div>
        <button
          onClick={() => {
            setActive(!active);
          }}
          className={`${theJamsil.className} bg-poten-red text-center w-full
          rounded-b-[8px] py-2 text-white text-[20px] flex justify-center items-center gap-2`}>
          {active ? '접기' : '펼치기'}
          <Image src={active ? arrowUp : arrowDown} alt="아이콘" width={16} height={16} />
        </button>
      </article>
    </>
  );
}
