import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import logo1 from "@/../public/logo/logo1.svg";
import SignUpInput from "@/components/SignUp/SignUpInput";

export const metadata: Metadata = {
  title: '회원가입',
  description: '회원가입 페이지입니다.'
}

export default function signUp() {
  return (
    <div className="flex flex-col items-center">
     
    {/* 로고 */}
    <Image className="w-50 h-20 mt-20 mb-10" src={logo1} alt="메인 로고"/>

    <span>이미 회원이신가요?</span>
    <Link href='/login' className="text-poten-red font-bold">로그인 하기</Link>
 
    <h1> 회원가입 </h1>
    <form action="/" className="flex flex-col items-center">
      <SignUpInput type={'email'} title={"이메일"} placeholder={"이메일을 입력해 주세요"}/>
      <SignUpInput type={"password"} title={"비밀번호"} placeholder={"비밀번호를 입력해 주세요"}/>
      <SignUpInput type={"password"} title={"비밀번호"} placeholder={"한번 더 입력해 주세요"}/>
      <SignUpInput type={"tel"} title={"휴대폰 번호"} placeholder={"휴대폰 번호를 입력해 주세요"}/>
      <SignUpInput type={"text"} title={"별명"} placeholder={"사용하실 별명을 입력해 주세요"}/>

      <input type="checkbox" id="scales" name="scales" />
        <label htmlFor="scales">[필수] 만 14세 이상입니다.</label>
      <input type="checkbox" id="scales" name="scales" />
        <label htmlFor="scales">[필수] 이용약관 동의</label>
      <input type="checkbox" id="scales" name="scales" />
        <label htmlFor="scales">[필수] 개인 정보 수집 및 이용 동의</label>
      <input type="checkbox" id="scales" name="scales" />
        <label htmlFor="scales">[선택] 광고성 정보 수신 모두 동의</label>

      <button type="submit">가입하기</button>
    </form>
    </div>
  );
}