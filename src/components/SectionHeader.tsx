import { ReactNode } from 'react';

export default function SectionHeader({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="  w-full gap-4 xl:max-w-[1200px] px-[16px] md:px-[24px] xl:px-[0px] xl:mx-auto  my-[18px] md:my-[32px]">
        <div className="flex gap-4 border-b-2 border-poten-gray-1 pb-[14px] md:pb-[20px] justify-start items-center">
          <span className="block w-[5px] h-[20px] md:h-[24px] rounded-[2px] bg-poten-red"></span>
          <h1 className="font-bold text-[18px] xl:text-[22px]">{children}</h1>
        </div>
      </header>
    </>
  );
}
