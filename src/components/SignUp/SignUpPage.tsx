import Image from "next/image";
import Link from "next/link";

import logo1 from "@/../public/logo/logo1.svg";

import { Suspense } from "react";

import SignUpForm from "@/components/SignUp/SignUpForm";

export default function SignUpPage() {

 
  return (
    // 배경
    <div className="flex flex-col items-center">
     
    {/* 로고 */}
    <Image className="w-50 h-20 mt-20 mb-10" src={logo1} alt="메인 로고"/>

    <span>이미 회원이신가요?</span>
    <Link href='/login' className="text-poten-red font-bold">로그인 하기</Link>
    
    <Suspense fallback={<div>로딩 중...</div>}>
      <SignUpForm />
    </Suspense>
    </div>
  );
}