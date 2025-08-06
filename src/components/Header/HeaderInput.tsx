'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import game from '@/assets/icons/game.svg';
import search from '@/assets/icons/search.svg';
import close from '@/assets/icons/close.svg';
import { useRouter } from 'next/navigation';

export default function HeaderInput() {
  const [title, setTitle] = useState('');
  const [searched, setSearched] = useState<string[]>([]);
  // 모바일 상태에서 검색버튼 눌렀을때 상태관리
  const [isSearchClick, setIsSearchClick] = useState<HTMLButtonElement | false | true>(
    true,
  );
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem('최근 검색어');
      if (stored) {
        setSearched(JSON.parse(stored));
      }
    }
  }, []);

  const updateStorage = (newArr: string[]) => {
    setSearched(newArr);
    window.localStorage.setItem('최근 검색어', JSON.stringify(newArr));
  };

  const deleteStorage = (i: number) => {
    const newArr = [...searched];
    newArr.splice(i, 1);
    updateStorage(newArr);
  };

  const deleteAll = () => {
    updateStorage([]);
  };

  const addStorage = () => {
    if (!title.trim()) return;
    const newSearch = [...new Set([title.trim(), ...searched])];
    updateStorage(newSearch);
    setTitle('');
    setIsSearchClick(true);
    router.push(`search?keyword=${encodeURIComponent(title.trim())}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addStorage();
    }
  };

  const handleSearchClick = () => {
    setIsSearchClick((prev) => !prev);
  };

  return (
    <>
      <div className=" w-full flex-1 md:row-start-2 md:col-span-12">
        <div
          className="hidden md:flex relative items-center w-full shrink-0 px-4 py-2 gap-4 bg-poten-inputgray  rounded-[8px]
        focus-within:ring-2 focus-within:ring-poten-black">
          <div className="shrink-0">
            <Image src={game} alt="검색창" width={24} height={24} />
          </div>
          <input
            type="text"
            className="w-full p-1 text-[16px] focus:outline-0 "
            placeholder="어떤 상품을 찾으시나요? 중고 게임칩, 신상 게임칩, 게임기 모두 검색"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            onKeyDown={handleKeyDown}
          />
          <button type="button" value={title} onClick={addStorage}>
            <Image src={search} alt="검색" width={24} height={24} />
          </button>
        </div>
      </div>

      {/* 모바일창 검색버튼 */}
      <button className=" md:hidden" onClick={handleSearchClick}>
        {isSearchClick ? (
          <Image src={search} alt="검색" />
        ) : (
          <Image src={close} alt="닫기" />
        )}
      </button>
      {/* 모바일 검색창 */}
      {isSearchClick ? (
        <div className="hidden">검색기록</div>
      ) : (
        <>
          <div className=" md:hidden bg-poten-black-2 opacity-50 h-full absolute left-0 top-28 z-3 w-full ">
            {/* 배경 투명하게 */}
          </div>
          <div className=" md:hidden bg-white z-4 h-90 p-3 absolute left-0 top-28 w-full">
            <div className="flex relative items-center">
              <input
                className="bg-poten-inputgray rounded-xl h-10 w-full my-3 p-2"
                type="text"
                placeholder="어떤 상품을 찾으시나요?"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                onKeyDown={handleKeyDown}
              />
              <button className="absolute right-3" value={title} onClick={addStorage}>
                <Image src={search} alt="검색"></Image>
              </button>
            </div>

            <div>
              <p className="flex items-center justify-between border-b-2 border-poten-gray-1  p-2 my-2">
                <span className="font-bold">최근 검색어</span>
                <button
                  onClick={deleteAll}
                  className="rounded-4xl border-1 border-poten-gray-1 p-2 text-xs">
                  모두 지우기
                </button>
              </p>
              <div className="py-2">
                {searched.map((item, i) => (
                  <span
                    key={i}
                    className="inline-block justify-between m-1 p-2  border-2 border-poten-gray-1 rounded-4xl whitespace-nowrap">
                    <span>{item}</span>
                    <button className="mx-2" onClick={() => deleteStorage(i)}>
                      {' '}
                      x{' '}
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
