import Image from 'next/image';
import logo from '../../../public/logo/logo2.svg';
import { MdItems } from './MdPickItemData';
import MainMdPickCard from './MainMdPickCard';

export default function MainMdPick() {
  const ItemList = MdItems.map((item) => (
    <MainMdPickCard cardItem={item} key={item._id} />
  ));
  return (
    <>
      <section className="w-full xl:max-w-[1200px] mx-auto px-[16px] md:px-[24px] my-[50px]">
        <Image
          className="w-[160px] md:w-[170px]"
          src={logo}
          width={500}
          height={64}
          alt="포텐게임"
        />
        <h2 className="text-poten-black font-extrabold text-[26px] md:text-[36px] mt-[4px] mb-[30px]">
          MD’s PICK 베스트 게임
        </h2>
        <div className="grid gap-y-5 md:grid-cols-2 md:gap-4 xl:gap-6  auto-rows-auto">
          {ItemList}
        </div>
      </section>
    </>
  );
}
