export default function TestCart() {
  return (
    <>
      <div className="w-full bg-purple-100 grid grid-cols-12 gap-2 grid-rows-6 p-5">
        <div className="bg-red-400  xl:row-span-6 xl:col-sapn-2">이미지</div>
        <div className="bg-red-400 xl:col-span-2 xl:col-start-3 ">배송날짜</div>
        <div className="bg-red-400 xl:col-span-2 xl:col-start-3 xl:row-start-2">
          플랫폼
        </div>
        <div className="bg-red-400 xl:col-span-2 xl:col-start-5 xl:row-start-2">뱃지</div>
        <div className="bg-red-400 xl:col-span-2 xl:col-start-3 xl:row-start-3">
          타이틀
        </div>
        <div className="bg-red-400 xl:col-span-2 xl:col-start-3 xl:row-start-4">
          제품가격
        </div>
        <div className="bg-red-400 xl:col-span-2 xl:col-start-3 xl:row-start-5">수량</div>
        <div className="bg-red-400 xl:col-span-3 xl:col-end-13 xl:row-end-7">
          최종가격
        </div>
        <div className="bg-red-400 xl:col-span-1 xl:row-span-1 xl:col-end-13 xl:row-end-0">
          닫기버튼
        </div>
      </div>
      <div className="w-full bg-orange-500 grid grid-cols-12 grid-rows-6 p-6">
        <div className="bg-amber-200 aspect-square col-start-1 row-span-6 col-span-3">
          이미지
        </div>
        <div className="bg-amber-200 col-span-2 col-start-2 row-start-1">배송날짜</div>
        <div className="bg-amber-200 col-span-2 col-start-2 row-start-2">플랫폼</div>
        <div className="bg-amber-200 col-span-2 col-start-4 row-start-2">뱃지</div>
      </div>
    </>
  );
}
