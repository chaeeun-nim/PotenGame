'use client';

import { useState } from "react";

interface LoginInputType{
  type: 'email' | 'password';
  value: string;
  isSubmit: boolean;
}

export default function LoginInput({type, value, isSubmit}: LoginInputType){

  const [ email, setEmail ] = useState("u1@market.com");
  const [ password, setPassword ] = useState('11111111');

  const emailRegex = /[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i;

  return(
    <>
    { type === 'email' &&
      <>
        <div className="relative w-full h-15 group flex items-center border-b-2 border-poten-gray-2 mb-3 ">
          <span className={`absolute left-2 text-poten-gray-2 ${ email? 'top-0' : 'group-focus-within:top-[-2]'} group-focus-within:top-[-2]`} >{value}</span>
          <input name='email' value={email} onChange={ e => setEmail(e.target.value) } type='email' className=" w-full h-full pl-2 focus:bg-poten-inputgray focus:outline-none" required/>
        </div>
        { isSubmit && type === 'email' && !emailRegex.test(email)&& <span className="text-poten-red">아이디를 올바르게 입력해주세요</span>}
      </>
    }

    { type === 'password' &&
      <>
        <div className="relative w-full h-15 group flex items-center border-b-2 border-poten-gray-2 mb-3 ">
          <span className={`absolute left-2 text-poten-gray-2 ${ password? 'top-0' : 'group-focus-within:top-[-2]'} group-focus-within:top-[-2]`} >{value}</span>
          <input name='password' value={password} onChange={ e => setPassword(e.target.value) } type='password' className=" w-full h-full pl-2 focus:bg-poten-inputgray focus:outline-none" required/>
        </div>
        { type === 'password' && password.length > 0 && password.length < 4 && <span className="text-poten-red">비밀번호 4자리 이상을 입력해주세요</span>}
      </>
    }
    </>
  );
}