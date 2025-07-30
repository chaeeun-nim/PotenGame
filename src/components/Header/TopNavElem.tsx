"use client";

import '@/app/globals.css';

import Image from 'next/image';
import Link from 'next/link';
import type { StaticImageData } from 'next/image';


interface TopNavElemType{
  title: string;
  link: string;
  img: StaticImageData;
}

export function TopNavElem({title, link, img}: TopNavElemType) {

  return(
    <li className='group relative py-5'>
      <Link href={link}>
        <span className='group-hover:font-bold group-hover:text-poten-red'>{title}</span>
      </Link>
      <div className='hidden w-150 bg-white border-1 border-poten-gray-1 xl:group-hover:flex hover:flex absolute top-16 z-1'>
        <ul className='flex flex-col gap-3 p-6 border-r-1 border-poten-gray-1'>
          <li><Link href={'/'}>중고 게임기</Link></li>    
          <li><Link href={'/'}>중고 게임</Link></li>
          <li><Link href={'/'}>새제품 게임기</Link></li>
          <li><Link href={'/'}>새제품 게임</Link></li>
        </ul>
        <Image className='w-100' src={img} alt={title} />
      </div>
    </li>
  );
}