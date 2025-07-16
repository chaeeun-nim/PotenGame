
'use client';

import { useState } from "react";
import PageBottomNav from '@/components/PageBottomNav';

export default function Page() {
  const [openedId, setOpenedId] = useState<number | null>(null);





  // {공지사항}
    const noticeList = [
    {
      id: 1,
      title: '[공지] 포텐게임 런칭 안내',
      date: '2025-07-09',
      views: 123,
      content: '포텐게임이 정식으로 런칭되었습니다! 많은 이용 부탁드립니다.',
    },
    {
      id: 2,
      title: '[점검] 시스템 점검 안내',
      date: '2025-07-08',
      views: 88,
      content: '2025년 7월 10일 02:00 ~ 04:00 사이 점검이 예정되어 있습니다.',
    },
    {
      id: 3,
      title: '[업데이트] 신규 캐릭터 출시',
      date: '2025-07-07',
      views: 75,
      content: '신규 캐릭터 "빛의 기사"가 출시되었습니다.',
    },
    {
      id: 4,
      title: '[안내] 운영정책 변경 공지',
      date: '2025-07-06',
      views: 61,
      content: '불건전 행위에 대한 제재 정책이 강화됩니다.',
    },
    {
      id: 5,
      title: '[이벤트] 여름 출석 이벤트 안내',
      date: '2025-07-05',
      views: 90,
      content: '7월 한 달간 매일 출석하면 다양한 보상을 드립니다!',
    },
    {
      id: 6,
      title: '[점검] 긴급 패치 안내',
      date: '2025-07-04',
      views: 52,
      content: '버그 수정 및 안정성 향상을 위한 긴급 패치가 적용됩니다.',
    },
    {
      id: 7,
      title: '[공지] FAQ 업데이트 안내',
      date: '2025-07-03',
      views: 45,
      content: '자주 묻는 질문에 대한 최신 정보가 반영되었습니다.',
    },
    {
      id: 8,
      title: '[업데이트] 신규 맵 "사막의 전장"',
      date: '2025-07-02',
      views: 101,
      content: '전략성이 강화된 새로운 전장 맵이 추가되었습니다.',
    },
    {
      id: 9,
      title: '[안내] 로그인 오류 해결 방법',
      date: '2025-07-01',
      views: 38,
      content: '로그인 오류 발생 시 캐시 삭제 후 재시도 해주세요.',
    },
    {
      id: 10,
      title: '[공지] 고객센터 운영시간 변경',
      date: '2025-06-30',
      views: 58,
      content: '고객센터 운영시간이 10:00~18:00으로 변경됩니다.',
    },
  ];

  // 로그인된 사용자 정보 (임시 예시)
  const currentUser = {
    id: 'user123',
    role: 'admin', // 'admin'일 때만 글쓰기 가능
  };

  /*
  // {질문과 답변}
  const qnaList = [
    {
      id: 1,
      question: '[질문] 캐릭터 저장이 안돼요',
      date: '2025-07-09',
      views: 30,
      answer: '브라우저 캐시를 삭제하고 다시 로그인 해보세요.',
      isPrivate: true,
    },
  ];

  // {자유게시판}
  const freeList = [
    { id: 1, title: '이 게임 진짜 재밌다!', date: '2025-07-08', views: 52 },
    { id: 2, title: '옛날 오락실 느낌 제대로', date: '2025-07-07', views: 47 },
  ];
  */

  return (
    <div className="max-w-screen-xl mx-auto px-10 py-12 space-y-12">

      {/* 공지사항 */}
      <section className="relative">
        <h2 className="text-lg font-bold mb-4" style={{ color: 'var(--color-poten-black)' }}>
          공지사항
        </h2>
        <div className="border-t border-b border-gray-200">
          <div className="grid grid-cols-12 py-3 text-sm font-bold bg-gray-100 text-[var(--color-poten-black)]">
            <div className="col-span-8 pl-4">제목</div>
            <div className="col-span-2 text-center">등록일</div>
            <div className="col-span-2 text-center">조회수</div>
          </div>
          {noticeList.map((item) => (
      <div key={item.id}>
        <div
          className="grid grid-cols-12 py-3 border-t text-sm hover:bg-gray-50 cursor-pointer"
          onClick={() => setOpenedId(openedId === item.id ? null : item.id)}
        >
          <div className="col-span-8 pl-4">{item.title}</div>
          <div className="col-span-2 text-center">{item.date}</div>
          <div className="col-span-2 text-center">{item.views}</div>
        </div>

        {openedId === item.id && (
          <div className="col-span-12 px-4 py-4 text-sm bg-gray-50 border-t">
            {item.content}
          </div>
            )}
          </div>
        ))}
      </div>


        {/* 관리자만 글쓰기 버튼 보기 */}
        {currentUser.role === 'admin' && (
          <button
            className="absolute right-0 -bottom-16 bg-[#E6001F] text-white text-sm rounded-md font-semibold shadow"
            style={{ width: '160px', height: '45px' }}
          >
            글쓰기
          </button>
        )}
      </section>

      {/* 질문과 답변 / 자유게시판 주석 처리 */}
      {/*
      <section className="relative"> ... </section>

      <section> ... </section>
      */}

      <div className="flex justify-center pt-4">
        <PageBottomNav />
      </div>

    </div>
  );
}

