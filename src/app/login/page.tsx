import { Metadata } from "next";

export const metadata: Metadata = {
  title: '회원가입',
  description: '회원가입 페이지입니다.'
}

export default function Login() {
  return (
    <>
    <h1> 로그인 </h1>
    <form action="/">
      <input type="email" placeholder="이메일을 입력하세요"/>
      <input type="text" placeholder="비밀번호를 입력하세요"/>

      <button type="submit">로그인</button>
    </form>
    </>
  );
}