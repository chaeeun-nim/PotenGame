import Image from 'next/image';
import logo from '../../../public/logo/logo-horizon-white.svg';

export default function BestLoading() {
  const dummyItem = [1, 2, 3, 4];
  return (
    <>
      <div className="grid grid-cols-12 gap-4 md:p-[8px]">
        <div
          className={`col-span-12 md:col-span-6 border-4 border-poten-nintendo bg-white rounded-lg pb-[36px] px-[36px]`}>
          <div
            className={`bg-poten-nintendo px-[16px] py-[8px] md:px-[28px]  inline-block rounded-b-xl mb-[18px] md:mb-[28px]`}>
            <Image
              className={`w-[150px] h-auto transition-all ease-in-out duration-500`}
              src={logo}
              width={122}
              height={17}
              alt="포텐게임"
            />
            <p className="font-extrabold text-white text-[28px]">Best Seller</p>
          </div>
          <div className="w-[300px] mx-auto md:w-[400px] xl:w-[450px] aspect-square bg-poten-snowgray1"></div>
        </div>
        <div className="col-span-12 md:col-span-6 grid grid-cols-2 gap-4 content-start">
          {dummyItem.map((item, i) => {
            return (
              <div
                key={i}
                className="border-1 rounded-md border-poten-gray-1 p-[16px] bg-white">
                <p className="font-extrabold mb-[16px] text-poten-gray3 leading-tight lg:text-[22px]">
                  <span className="text-[24px] lg:text-[32px]">0{i + 2}</span>위
                </p>
                <div
                  className="w-[180px] mx-auto xl:w-[220px] aspect-square bg-poten-snowgray1"
                  aspect-square></div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
