'use client'

import Image from "next/image";

import kakao from '@/assets/icons/kakao.svg';
import naver from '@/assets/icons/naver.svg';

interface ButtonType{
  value: string;
  color: 'red' | 'gray3' | 'kakao' | 'naver';
  type: 'submit' | 'button';
  link?: string;
  setIsSubmit?: (arg: boolean) => void;
}

export default function LoginButton({value, color, type, link, setIsSubmit }: ButtonType){

  const bgColor = {
    kakao: 'bg-poten-kakao text-poten-black',
    naver: 'bg-poten-naver text-white',
    gray3: 'bg-poten-gray3 text-white',
    red: 'bg-poten-red text-white',
  }[color];

  const clickHandler = (url: string) => {
    switch (type) {
      case 'button':
        if (!url) return;
        location.href = url;
        break;
      case 'submit':
        if(setIsSubmit)
        setIsSubmit(true);
    }
  }


  return(
    <>
      <button onClick={ () => clickHandler(link as string) } type={type}
        className={`${bgColor} flex items-center justify-center w-full my-2 py-3 rounded-md font-bold cursor-pointer`}>
        {color === 'kakao'  ? <Image src={kakao} alt={color} width='24' height='24'/> : null }
        {color === 'naver' ? <Image src={naver} alt={color} width='24' height='24'/> : null }
        { value }
      </button>
    </>
  );
}