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

  const [checkboxes, setCheckboxes] = useState([
    { id: 0, label: "만 14세 이상입니다.", checked: false, required: true },
    { id: 1, label: "포텐게임 이용약관에 동의", checked: false, required: true },
    { id: 2, label: "개인정보 수집 및 이용에 동의.", checked: false, required: true },
    { id: 3, label: "마케팅 정보 수신 및 선택적 개인정보 제공", checked: false, required: true },
  ]);

  const inputs = [
    { id: 0, type: "email", title: "이메일", placeholder: "이메일을 입력해 주세요", button: true},
    { id: 1, type: "password", title: "비밀번호", placeholder: "비밀번호를 입력해 주세요", button: false},
    { id: 2, type: "password-check", title: "비밀번호 확인", placeholder: "한 번 더 입력해 주세요", button: false},
    { id: 3, type: "tel", title: "휴대폰 번호", placeholder: "휴대폰 번호를 입력해 주세요", button: true},
    { id: 4, type: "text", title: "별명", placeholder: "사용하실 별명을 입력해 주세요", button: true},
  ];

  const isAllChecked = checkboxes.every((item) => item.checked);
  
  // 전체동의 클릭
  const handleAllCheck = () => {
    setCheckboxes(checkboxes.map(boxes => ({ ...boxes, checked: !isAllChecked })));
  };

  // 개별 체크박스 클릭
  const handleSingleCheck = (id:number) => {
    setCheckboxes(checkboxes.map(boxes => boxes.id === id? { ...boxes, checked: !boxes.checked } : boxes));
  }

  return (
    // 배경
    <div className="flex flex-col items-center">
     
    {/* 로고 */}
    <Image className="w-50 h-20 mt-20 mb-10" src={logo1} alt="메인 로고"/>

    <span>이미 회원이신가요?</span>
    <Link href='/login' className="text-poten-red font-bold">로그인 하기</Link>
 
    <form action="/" className="mb-18 px-3 w-full md:w-150 ">
      <h1 className="mb-4 font-bold text-lg"> 회원가입 </h1>
      { inputs.map(input => (
        <SignUpInput 
          key={input.id}
          type={input.type}
          title={input.title}
          placeholder={input.placeholder}
          button={input.button}
        />
      ))}

      <div>
        <div>
          <input type="checkbox" id="allCheck" name="scales" checked={isAllChecked} onChange={handleAllCheck} className="hidden"/>
          <label
            htmlFor="allCheck"
            className="inline-block w-4 h-4 cursor-pointer mx-1">
            <Image src={isAllChecked ? checked : unchecked} alt="전체 동의" />
          </label>
          <span >전체동의</span>
        </div>
        <br />
        { checkboxes.map(boxes => (
          <SignUpCheckbox 
            key={boxes.id}
            id={boxes.id}
            title={boxes.label}
            isChecked={boxes.checked}
            onToggle={() => handleSingleCheck(boxes.id)}
          />
        ))}
      </div>

      <button type="submit" className="mx-0 w-full block md:w-fit md:mx-auto bg-poten-red font-bold text-white px-15 py-3 mt-12 ">가입하기</button>
      
    </form>
    </div>
  );
}