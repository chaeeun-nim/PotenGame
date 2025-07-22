
import { Metadata } from "next";
import LoginPage from "@/components/Login/LoginPage";

export const metadata: Metadata = {
  title: '로그인',
  description: '로그인 페이지입니다.'
}

export default function Login() {
  return(
    <LoginPage />
  );
  
}