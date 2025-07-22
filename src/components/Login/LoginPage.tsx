"use client";

import LoginInput from "@/components/Login/LoginInput";
import LoginButton from "@/components/Login/LoginButton";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import logo1 from "@/../public/logo/logo1.svg";
import checked from "@/assets/icons/checked.svg";
import unchecked from "@/assets/icons/unchecked.svg";

export default function LoginPage(){
  const [ isSubmit, setIsSubmit ] = useState(false);

  const [ isLoginChecked, setIsLoginChecked ] = useState(false);



  return (

    // 배경
    <div className="bg-poten-snowgray1 flex flex-col items-center"> 

    {/* 로고 */}
    <Image className="hidden xl:inline-block w-50 h-20 mt-20 mb-10" src={logo1} alt="메인 로고"/> 

    {/* 흰색 박스 */}
    <div className="bg-white p-10 flex flex-col items-center w-150 mb-30">

      <h1 className="font-bold mt-10 text-2xl"> 로그인 </h1>
      <p className="mb-10">포텐게임에 오신것을 환영합니다.</p>

      <form action="/" className="w-full flex flex-col">

        <LoginInput isSubmit={isSubmit} type={'email'} value={'이메일 계정'} />
        <LoginInput isSubmit={isSubmit} type={'password'} value={'비밀번호'} />
        

          <div className="flex justify-between mt-3 mb-10">
            <div>
              <Link href='/find/findId' className="mr-5">아이디 찾기</Link>
              <Link href='/find/findPw'>비밀번호 찾기</Link>
            </div>
      
            <div>
              <input id="login-maintain" type="checkbox" className="hidden" checked={isLoginChecked} onChange={() => {setIsLoginChecked(prev => !prev)}}/>
              <label htmlFor="login-maintain" 
                    className="inline-block w-4 h-4 cursor-pointer mx-1">
                <Image src={ isLoginChecked? checked : unchecked} alt="로그인 상태 유지" />
              </label>
              <span>로그인 유지하기</span>
            </div>
          </div>

        <LoginButton setIsSubmit={setIsSubmit} type={'submit'} value={'로그인'} color={'red'} />
        <LoginButton link={'/login/signUp'} type={'button'} value={'회원가입'} color={'gray3'} />
      </form>


      <div className="w-full">
        <h2 className="font-bold text-center my-10 text-2xl">소셜 로그인</h2>
        <LoginButton type={'button'} value={'카카오 로그인'} color={'kakao'}/>
        <LoginButton type={'button'} value={'네이버 로그인'} color={'naver'}/>
      </div>
    </div>
    </div>
  );
}