'use client';

import MyPageSide from '@/components/MyPage/MyPageSide';
import React from 'react';

// 샘플 데이터
const qnaPosts = [
  { id: 1, title: '[질문] 배송이 너무 느려요', date: '2025.07.20', replied: true },
  { id: 2, title: '[질문] A/S 문의합니다', date: '2025.07.18', replied: true },
  { id: 3, title: '[질문] 침 구매했는데 작동이 안되요, 사기인가요?', date: '2025.07.18', replied: false },
  { id: 4, title: '[질문] 포장지 뜯었는데 반품 되나요?', date: '2025.07.16', replied: true },
];

const freePosts = [
  { id: 1, title: '이번 제품 너무 좋아요!', date: '2025.07.21', commentCount: 150 },
  { id: 2, title: '포켓몬 게임은 4세대부터 망했다!', date: '2025.07.20', commentCount: 3 },
  { id: 3, title: 'T1 경기 페이커는 여전히 전설이다!', date: '2025.07.18', commentCount: 5 },
];

export default function MyPostPage() {
  return (
    <>
      <MyPageSide variant="mobileOnly" />

      {/* PC 전용 */}
      <section className="hidden xl:block bg-white rounded-lg -mt-2 mb-8 px-4">
        <PostSection title="질의응답 게시판 / 작성한 글" posts={qnaPosts} size="lg" />
        <PostSection title="자유 게시판 / 작성한 글" posts={freePosts} size="lg" />
      </section>

      {/* 태블릿 전용 */}
      <section className="hidden md:block xl:hidden bg-white rounded-lg px-4 py-6">
        <PostSection title="질의응답 게시판 / 작성한 글" posts={qnaPosts} size="md" />
        <PostSection title="자유 게시판 / 작성한 글" posts={freePosts} size="md" />
      </section>

      {/* 모바일 전용 */}
      <section className="block md:hidden bg-white rounded-lg px-4 py-6">
        <PostSection title="질의응답 게시판 / 작성한 글" posts={qnaPosts} size="sm" />
        <PostSection title="자유 게시판 / 작성한 글" posts={freePosts} size="sm" />
      </section>
    </>
  );
}

function PostSection({
  title,
  posts,
  size = 'lg',
}: {
  title: string;
  posts: { id: number; title: string; date: string; replied?: boolean; commentCount?: number }[];
  size: 'lg' | 'md' | 'sm';
}) {
  const isQnA = title.includes('질의응답');
  const textSize = {
    lg: '18px',
    md: '16px',
    sm: '14px',
  }[size];

  return (
    <div className="mb-10">
      {/* 제목 라벨 */}
      <div className="flex items-end gap-2 mb-4">
        <div className="w-[4px] bg-[var(--color-poten-red)] rounded-sm" style={{ height: '22px' }} />
        <h2 className="font-semibold text-black" style={{ fontSize: textSize }}>
          {title}
        </h2>
      </div>
      <div className="w-full border-t border-[var(--color-poten-gray-2)] mb-2" />

      {/* PC (테이블형) */}
      {size === 'lg' && (
        <>
          {/* 테이블 헤더 */}
          <div className="w-full border-t border-b border-gray-200 bg-[var(--color-poten-snowgray1)]">
            <div className="grid grid-cols-12 py-2 px-3 text-[13px] text-black font-semibold">
              <div className="col-span-8">제목</div>
              <div className="col-span-2 text-center">등록일</div>
              <div className="col-span-2 text-center">{isQnA ? '답변' : '댓글'}</div>
            </div>
          </div>

          {/* 게시글 목록 */}
          {posts.map((post) => (
            <div
              key={post.id}
              className="grid grid-cols-12 items-center py-2 px-3 text-[13px] text-black border-b border-[var(--color-poten-gray-1)]"
            >
              <div className="col-span-8 truncate pr-2">{post.title}</div>
              <div className="col-span-2 text-center text-[var(--color-poten-gray-2)]">{post.date}</div>
              <div className="col-span-2 text-center">
                {isQnA
                  ? post.replied
                    ? <span className="text-[var(--color-poten-red)]">완료</span>
                    : '미완료'
                  : `${post.commentCount ?? 0}개`}
              </div>
            </div>
          ))}
        </>
      )}

      {/* 태블릿/모바일 (카드형) */}
        {(size === 'md' || size === 'sm') && (
  <div className="flex flex-col divide-y divide-[var(--color-poten-gray-1)]">
    {posts.map((post) => (
      <div key={post.id} className="flex justify-between items-center py-3 px-1 sm:px-2 text-[13px]">
        {/* 왼쪽: 제목 + 등록일 */}
        <div className="flex flex-col w-[calc(100%-55px)] truncate">
          <div className="truncate flex items-center gap-1">
            <span className="truncate">
              {isQnA ? (
                <>
                  {post.title} <span className="ml-[2px] text-[12px]">🔒</span>
                </>
              ) : (
                <>[자유] {post.title}</>
              )}
            </span>
          </div>
          <div className="text-[12px] text-[var(--color-poten-gray-2)] mt-1">{post.date}</div>
        </div>

        {/* 오른쪽: 통계 박스 */}
        <div className="w-[47px] h-[47px] min-w-[47px] flex items-center justify-center rounded-sm border border-[#e4e4e4] bg-[#fbfbfb] text-[13px] font-semibold">
          {isQnA
            ? post.replied
              ? '완료'
              : '미완료'
            : post.commentCount ?? 0}
        </div>
      </div>
    ))}
  </div>
)}


    </div>
  );
}
