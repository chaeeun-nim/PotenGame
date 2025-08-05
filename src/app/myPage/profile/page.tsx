'use client';

import ProfileInput from '@/components/MyPage/Profile/ProfileInput';
import React from 'react';

export default function ProfilePage() {
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

        {/* 하단 버튼 */}
        <div className="flex justify-end gap-3 mt-8">
          <button className="w-[100px] h-[45px] border border-gray-300 rounded text-sm font-medium">
            취소
          </button>
          <button className="w-[100px] h-[45px] bg-[var(--color-poten-red)] text-white rounded text-sm font-medium">
            저장
          </button>
        </div>
      </section>

      
    </div>
  );
}
