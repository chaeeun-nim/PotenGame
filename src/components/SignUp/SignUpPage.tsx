"use client";

import Image from "next/image";
import Link from "next/link";

import logo1 from "@/../public/logo/logo1.svg";
import SignUpInput from "@/components/SignUp/SignUpInput";

import checked from '@/assets/icons/checked.svg';
import unchecked from '@/assets/icons/unchecked.svg';
import SignUpCheckbox from "@/components/SignUp/SignUpCheckbox";
import { useState } from "react";

export default function SignUpPage() {

  const [ isAllChecked, setIsAllChecked ] = useState(false);

  return (
    // 배경
    <div className="flex flex-col items-center">
     
    {/* 로고 */}
    <Image className="w-50 h-20 mt-20 mb-10" src={logo1} alt="메인 로고"/>

    <span>이미 회원이신가요?</span>
    <Link href='/login' className="text-poten-red font-bold">로그인 하기</Link>
 
    <form action="/" className="mx-3 md:w-150">
      <h1 className="mb-4 font-bold text-lg"> 회원가입 </h1>
      <SignUpInput type={'email'} title={"이메일"} placeholder={"이메일을 입력해 주세요"}/>
      <SignUpInput type={"password"} title={"비밀번호"} placeholder={"비밀번호를 입력해 주세요"}/>
      <SignUpInput type={"password"} title={"비밀번호"} placeholder={"한번 더 입력해 주세요"}/>
      <SignUpInput type={"tel"} title={"휴대폰 번호"} placeholder={"휴대폰 번호를 입력해 주세요"}/>
      <SignUpInput type={"text"} title={"별명"} placeholder={"사용하실 별명을 입력해 주세요"}/>

      <div>
        <input type="checkbox" id="allCheck" name="scales" checked={isAllChecked} onChange={()=>{setIsAllChecked(prev => !prev)}} className="hidden"/>
        <label
          htmlFor="allCheck"
          className="inline-block w-4 h-4 cursor-pointer mx-1">
          <Image src={isAllChecked ? checked : unchecked} alt="전체 동의" />
        </label>
        <span >전체동의</span>
        <br />
        <SignUpCheckbox isAllChecked={isAllChecked}/>
        <SignUpCheckbox isAllChecked={isAllChecked}/>
        <SignUpCheckbox isAllChecked={isAllChecked}/>
        {/* <input type="checkbox" id="scales" name="scales" />
        <label htmlFor="scales">[필수] 만 14세 이상입니다.</label>
        <br />
        <input type="checkbox" id="scales" name="scales" />
        <label htmlFor="scales">[필수] 이용약관 동의</label>
        <label htmlFor="scales">[필수] 만 14세 이상입니다.</label>
        <br />
        <input type="checkbox" id="scales" name="scales" />
        <label htmlFor="scales">[필수] 개인 정보 수집 및 이용 동의</label>
        <label htmlFor="scales">[필수] 만 14세 이상입니다.</label>
        <br />
        <input type="checkbox" id="scales" name="scales" />
        <label htmlFor="scales">[선택] 광고성 정보 수신 모두 동의</label> */}
      </div>

      <button type="submit">가입하기</button>
    </form>
    </div>
  );
}