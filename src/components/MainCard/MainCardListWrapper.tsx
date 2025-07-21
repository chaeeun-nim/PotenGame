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
  children: string;
  dataType: sortNews | sortPrice;
  gameType: GameUsedType;
  btnId: string;
}) {
  const data = await mainCardListData(dataType, gameType);

  return (
    <>
      <div className="bg-poten-snowgray1 xl:max-w-[1200px] mx-auto  mb-[32px]">
        <h3 className="font-extrabold mb-[20px] text-[20px] md:text-[22px] mb- xl:text-[24px] px-[16px] md:px-[24px] xl:px[0px]">
          {children}
        </h3>
        {data.ok ? (
          <CardSliderView ProductItems={data.item} btnId={btnId} />
        ) : (
          <p>데이터로딩실패 </p>
        )}
      </div>
    </>
  );
}
