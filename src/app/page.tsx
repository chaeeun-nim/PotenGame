import Datainit from '@/components/Datainit';
import MainBest from '@/components/MainBest/MainBest';
import MainCardListWrapper from '@/components/MainCard/MainCardListWrapper';
import MainGameLink from '@/components/MainGameLink/MainGameLink';
import MainMdPick from '@/components/MainMdPick/MainMdPick';
import MainModal from '@/components/MainModal';
import MainPromotion from '@/components/MainPromotion';
import MainSlider from '@/components/MainSlider/MainSlide';

export default async function Home() {
  return (
    <>
      <Datainit />
      <MainModal />
      <MainSlider />
      <MainGameLink />
      <section className="bg-poten-snowgray1 w-full py-[32px] mt-[50px]">
        <h2 className="sr-only">신상게임 및 최저가 게임 목록</h2>
        <MainCardListWrapper
          dataType={{ 'extra.releaseDate': -1 }}
          gameType={['GAME', 'NEW']}
          btnId="NewGame">
          따끈따끈 신상게임
        </MainCardListWrapper>
        <MainCardListWrapper
          dataType={{ price: 1 }}
          gameType={['GAME']}
          btnId="CheapGame">
          역대 최저가 게임
        </MainCardListWrapper>
      </section>

      <MainMdPick />
      <MainPromotion />
      <MainBest />
    </>
  );
}
