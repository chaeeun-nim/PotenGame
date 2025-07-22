'use client';

import { useEffect, useState } from "react";

interface LoginInputType{
  type: 'email' | 'password';
  value: string;
  isSubmit: boolean;
}

export default function LoginInput({type, value, isSubmit}: LoginInputType){

  const [ text, setText ] = useState('');

  const emailRegex = /[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i;
  
  const passwordRegex = /[A-Za-z0-9]+!/i;

  useEffect(()=>{
  },[])

  return(
    <>
    <div className="relative w-full h-15 group flex items-center border-b-2 border-poten-gray-2 mb-3 ">
      <span className={`absolute left-2 text-poten-gray-2 ${ text? 'top-0' : 'group-focus-within:top-[-2]'} group-focus-within:top-[-2]`}>{value}</span>
      <input value={text} onChange={ e => setText(e.target.value) } type={type} className=" w-full h-full pl-2 focus:bg-poten-inputgray focus:outline-none" required/>
    </div>
    { isSubmit && type === 'email' && !emailRegex.test(text)? <span className="text-poten-red">아이디를 올바르게 입력해주세요</span> : null}

    { isSubmit && type === 'password' && !passwordRegex.test(text)? <span className="text-poten-red">비밀번호를 올바르게 입력해주세요</span> : null}
    { type === 'password' && text.length > 0 && text.length < 10? <span className="text-poten-red">비밀번호 10자리 이상을 입력해주세요</span> : null}
    </>
  );
}