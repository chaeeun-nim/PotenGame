
'use client';

import MyPageTop from '@/components/MyPage/MyPageTop';
import MyPageSide from '@/components/MyPage/MyPageSide';


export default function MyPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      {/* 공통 상단 영역 */}
      <MyPageTop />

      {/* 본문 영역 (사이드 + 콘텐츠) */}
      <section className="w-full">
        {/* PC */}
        <div className="hidden xl:block max-w-[1280px] mx-auto px-10 py-12">
          <div className="grid grid-cols-[280px_1fr] gap-4">
            <MyPageSide />
            <div className="bg-white rounded-lg p-6">{children}</div>
          </div>
        </div>

        {/* 태블릿 */}
        <div className="hidden md:block xl:hidden max-w-[1024px] mx-auto px-6">
          <div className="grid grid-cols-[200px_1fr] gap-4 items-start">
            <MyPageSide />
            <div className="bg-white rounded-lg p-6">{children}</div>
          </div>
        </div>

        {/* 모바일 */}
        <div className="block md:hidden w-full bg-white px-4 pt-6 pb-8">
          <MyPageSide />
          <div className="mt-4">{children}</div>
        </div>
      </section>
    </div>
  );
}

