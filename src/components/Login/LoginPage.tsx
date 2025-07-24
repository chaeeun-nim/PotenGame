""

import Image from "next/image";
import LoginForm from "@/components/Login/LoginForm";
import LoginButton from "@/components/Login/LoginButton";

import logo1 from "@/../public/logo/logo1.svg";

export default function LoginPage(){
  
  return (

    // 배경
    <div className="bg-poten-snowgray1 flex flex-col items-center"> 

    {/* 로고 */}
    <Image className="hidden xl:inline-block w-50 h-20 mt-20 mb-10" src={logo1} alt="메인 로고"/> 

    {/* 흰색 박스 */}
    <div className="bg-white p-10 flex flex-col items-center w-150 mb-30">

      <h1 className="font-bold mt-10 text-2xl"> 로그인 </h1>
      <p className="mb-10">포텐게임에 오신것을 환영합니다.</p>

      <LoginForm />

      <div className="w-full">
        <h2 className="font-bold text-center my-10 text-2xl">소셜 로그인</h2>
        <LoginButton type={'button'} value={'카카오 로그인'} color={'kakao'}/>
        <LoginButton type={'button'} value={'네이버 로그인'} color={'naver'}/>
      </div>
    </div>
    </div>
  );
}