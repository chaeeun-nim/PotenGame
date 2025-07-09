import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo/logo-vertical.png";
import banner from "@/assets/img/top-banner.png";
import loginLogo from "../assets/icons/login.png";
import mypageLogo from "../assets/icons/mypage.png";
import signinLogo from "../assets/icons/signin.png";
import '@/app/globals.css';

export function Header() {
  return(
    <>
    <Image src={banner} alt="컨디션 최상의 중고칩 국내 최다보유 포텐 게임에서 인생게임을 찾아보세요" width ={1920} height={60}/>
    <div className="flex items-center justify-center py-6 gap-x-6">
      <Link href='/'>
          <Image src={logo} alt="메인 로고" width={177} height={70}/>
      </Link>
      <input className="w-[689] h-[50]" type="text" placeholder="어떤 상품을 찾으시나요? 중고 게임칩, 신상 게임칩, 게임기 모두 검색"/>
      <ul className="flex gap-x-2.5">
        <li>
          <Link href='/login' className="flex gap-x-2">
            <Image src={loginLogo} alt="로그인"/>
            <span>로그인</span>
          </Link>
          </li>
        <li>
          <Link href='/myPage/' className="flex gap-x-2">
            <Image src={mypageLogo} alt="마이페이지"/>
            <span>마이페이지</span>
          </Link>
        </li>
        <li>
          <Link href='/login/signUp/' className="flex gap-x-2">
            <Image src={signinLogo} alt="회원가입"/>
            <span>회원가입</span>
          </Link>
        </li>
      </ul>
    </div>
    </>
  )
}