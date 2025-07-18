import {
  GameUsedType,
  mainCardListData,
  sortNews,
  sortPrice,
} from '@/data/functions/mainCardListData';
import CardSlier from './CardSlider';

export default async function MainCardList({
  children,
  dataType,
  gameType,
}: {
  children: string;
  dataType: sortNews | sortPrice;
  gameType: GameUsedType;
}) {
  const data = await mainCardListData(dataType, gameType);

  return (
    <>
      <div className="bg-poten-snowgray1 xl:max-w-[1200px] mx-auto">
        <h3 className="font-extrabold text-[20px] md:text-[22px] xl:text-[24px] px-[16px] md:px-[24px] xl:px[0px]">
          {children}
        </h3>
        {data.ok ? <CardSlier ProductItems={data.item} /> : <p>데이터로딩실패 </p>}
      </div>
    </>
  );
}
