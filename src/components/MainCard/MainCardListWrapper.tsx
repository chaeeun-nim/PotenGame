import {
  GameUsedType,
  mainCardListData,
  sortNews,
  sortPrice,
} from '@/data/functions/mainCardListData';
import CardSliderView from './CardSliderView';

export default async function MainCardListWrapper({
  children,
  dataType,
  gameType,
  btnId,
}: {
  children: string; // 섹션의 제목
  dataType: sortNews | sortPrice; //받을 데이터의 정렬
  gameType: GameUsedType; //받을 데이터의 타입(중고 or 새제품)
  btnId: string; // 카드 슬라이드(PC,태블릿)의 버튼 ID (각기 유니크한 버튼 id를 사용하지 않으면, 한개의 버튼으로 연동이됨.)
}) {
  // 카드 데이터 받아오기
  const data = await mainCardListData(dataType, gameType);

  return (
    <>
      <div className="bg-poten-snowgray1 xl:max-w-[1200px] mx-auto  mb-[32px]">
        <h3 className="font-extrabold mb-[20px] text-[20px] md:text-[22px] mb- xl:text-[24px]  xl:p-[0px]  px-[16px] md:px-[24px] xl:px[0px]">
          {children}
        </h3>
        {data.ok ? (
          // 슬라이드 영역
          <CardSliderView ProductItems={data.item} btnId={btnId} />
        ) : (
          <p>데이터로딩실패 </p>
        )}
      </div>
    </>
  );
}
