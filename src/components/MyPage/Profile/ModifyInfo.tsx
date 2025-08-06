'use client';

import ProfileInput from '@/components/MyPage/Profile/ProfileInput';
import { modifyUser } from '@/data/functions/modifyUser';
import React, { useEffect, useState } from 'react';

export default function ModifyInfo() {

  const [ userId, setUserId ] = useState<number | null>(null);

  useEffect(()=>{
    const userData = sessionStorage.getItem('user');

    if (userData) {
      const parsed = JSON.parse(userData);
      const Id = parsed.state.user._id;

      setUserId(Id);
    }
  },[])

  const inputs = [
    { id: 0, name: "nickname", type: "text", title: "별명", placeholder: "사용하실 별명을 입력해 주세요"},
    { id: 1, name: "email", type: "email", title: "이메일", placeholder: "이메일을 입력해 주세요"},
    { id: 2, name: "phone", type: "tel", title: "휴대폰 번호", placeholder: "휴대폰 번호를 입력해 주세요"},
  ];

  return (
    <div className="w-full xl:pl-[20px] -mt-4">


      {/* 기본정보 변경 */}
      <section className="hidden xl:block bg-white mb-10">
        {/* 제목 */}
        <div className="flex items-center border-b border-gray-200 pb-2 mb-6">
          <div className="w-[4px] h-[20px] bg-poten-red mr-2 rounded-sm" />
          <h2 className="text-lg font-bold text-poten-red">기본정보 변경</h2>
        </div>

        {/* 별명 */}
        <ProfileInput name={"nickname"} title={"별명"} type={"text"}/>

        {/* 이메일 */}
        <ProfileInput name={"email"} title={"이메일"} type={"email"}/>

        {/* 휴대폰 번호 */}
        <ProfileInput name={"phone"} title={"휴대폰 번호"} type={"phone"}/>

        {/* 인풋창 목록 */}
        { inputs.map(input => (
          <ProfileInput 
            key={input.id}
            type={input.type}
            title={input.title}
            name={input.name} 
          />
        ))}

        {/* 하단 버튼 */}
        <div className="flex justify-end gap-3 mt-8">
          <button className="w-[100px] h-[45px] border border-gray-300 rounded text-sm font-medium">
            취소
          </button>
          <button 
            className="w-[100px] h-[45px] bg-[var(--color-poten-red)] text-white rounded text-sm font-medium"
            disabled={userId === null}
            onClick={async () => {
              if (userId){
              const res = await modifyUser(userId);
              console.log('받은 사용자:', res);
              }
            }}
          >
            저장
          </button>
        </div>
      </section>

      
    </div>
  );
}
