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
          <div className="w-[4px] h-[20px] bg-[var(--color-poten-red)] mr-2 rounded-sm" />
          <h2 className="text-lg font-bold text-[var(--color-poten-red)]">기본정보 변경</h2>

          <ProfileInput name={"name"} title={"별명"} type={"text"} placeholder={"별명을 입력해주세요"}/>
          <ProfileInput name={"email"} title={"이메일"} type={"email"} placeholder={"이메일을 입력해주세요"}/>
          <ProfileInput name={"phone"} title={"휴대폰 번호"} type={"phone"} placeholder={"전화번호를 입력해주세요"}/>
        </div>

        {/* 별명 */}
        <div className="mb-4">
          <label className="text-sm font-semibold mb-1 block">
            별명<span className="text-red-500">*</span>
          </label>
          <div className="flex gap-4">
            <input
              type="text"
              value="물범비린내"
              className="flex-1 h-[50px] bg-[#f1f4f6] px-4 rounded text-sm text-black"
              readOnly
            />
            <button className="w-[180px] h-[50px] bg-[var(--color-poten-gray3)] text-white rounded">
              별명 변경
            </button>
          </div>
        </div>

        {/* 이메일 */}
        <div className="mb-4">
          <label className="text-sm font-semibold mb-1 block">
            이메일<span className="text-red-500">*</span>
          </label>
          <div className="flex gap-4">
            <input
              type="email"
              value="sealsmell@naver.com"
              className="flex-1 h-[50px] bg-[#f1f4f6] px-4 rounded text-sm text-black"
              readOnly
            />
            <button className="w-[180px] h-[50px] bg-[var(--color-poten-gray3)] text-white rounded">
              이메일 변경
            </button>
          </div>
        </div>

        {/* 인증 완료 */}
        <div className="flex items-center gap-2 mb-4 ml-1">
          <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-[10px] text-white">
            ✔
          </div>
          <span className="text-sm text-green-600 font-medium">인증완료</span>
        </div>

        {/* 휴대폰 번호 */}
        <div className="mb-2">
          <label className="text-sm font-semibold mb-1 block">
            휴대폰 번호<span className="text-red-500">*</span>
          </label>
          <div className="flex gap-4">
            <input
              type="tel"
              placeholder="휴대폰 번호를 입력해 주세요."
              className="flex-1 h-[50px] bg-[#f1f4f6] px-4 rounded text-sm placeholder-[var(--color-poten-gray-2)]"
            />
            <button className="w-[180px] h-[50px] bg-[var(--color-poten-gray3)] text-white rounded">
              휴대폰 인증
            </button>
          </div>
        </div>

        {/* 인증대기 표시 */}
        <div className="flex items-center gap-2 mt-2 ml-1">
          <div className="w-4 h-4 rounded-full bg-orange-400 flex items-center justify-center text-white text-[10px] font-bold">
            !
          </div>
          <span className="text-sm text-orange-500 font-medium">인증대기</span>
        </div>

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
