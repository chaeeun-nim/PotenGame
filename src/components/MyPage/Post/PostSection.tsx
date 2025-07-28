'use client';

import React from 'react';

type Post = {
  id: number;
  title: string;
  date: string;
  replied?: boolean;
  commentCount?: number;
};

export default function PostSection({
  title,
  posts,
  size = 'lg',
}: {
  title: string;
  posts: Post[];
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

      {/* PC: 테이블 형식 */}
      {size === 'lg' && (
        <>
          <div className="w-full border-t border-b border-gray-200 bg-[var(--color-poten-snowgray1)]">
            <div className="grid grid-cols-12 py-2 px-3 text-[13px] text-black font-semibold">
              <div className="col-span-8">제목</div>
              <div className="col-span-2 text-center">등록일</div>
              <div className="col-span-2 text-center">{isQnA ? '답변' : '댓글'}</div>
            </div>
          </div>

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

      {/* 태블릿/모바일: 카드 형식 */}
      {(size === 'md' || size === 'sm') && (
        <div className="flex flex-col divide-y divide-[var(--color-poten-gray-1)]">
          {posts.map((post) => (
            <div key={post.id} className="flex justify-between items-center py-3 px-1 sm:px-2 text-[13px]">
              {/* 왼쪽: 제목 및 날짜 */}
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

              {/* 오른쪽: 상태/댓글 */}
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
