import { Metadata } from "next";
import SignUpPage from "@/components/SignUp/SignUpPage";

export const metadata: Metadata = {
  title: '회원가입',
  description: '회원가입 페이지입니다.'
}

export default function signUp() {

  return (
    <>
      <SignUpPage />
    </>
  );
  
}