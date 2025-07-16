import SliderLink from './SliderLink';

export default function MainGameLink() {
  return (
    <>
      <section className="lg:max-w-[1200px] lg:mx-auto w-full lg:mt-[80px] md:mt-[50px] mt-[30px]">
        <h2 className="font-extrabold  lg:text-2xl md:text-[22px] text-[20px] md:ml-[24px] ml-[16px] lg:ml-[0px]">
          게임기기
        </h2>
        <SliderLink />
      </section>
    </>
  );
}
