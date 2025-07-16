import MainBest from '@/components/MainBest/MainBest';
import MainGameLink from '@/components/MainGameLink/MainGameLink';
import MainMdPick from '@/components/MainMdPick/MainMdPick';
import MainPromotion from '@/components/MainPromotion';
import MainSlider from '@/components/MainSlider/MainSlide';

export default function Home() {
  return (
    <>
      <MainSlider />
      <MainGameLink />
      <MainMdPick />
      <MainPromotion />
      <MainBest />
    </>
  );
}
