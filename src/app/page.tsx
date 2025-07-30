import Datainit from '@/components/Datainit';
import MainBest from '@/components/MainBest/MainBest';
import MainCardListWrapper from '@/components/MainCard/MainCardListWrapper';
import MainGameLink from '@/components/MainGameLink/MainGameLink';
import MainLoginModal from '@/components/MainLoginModal';
import MainMdPick from '@/components/MainMdPick/MainMdPick';
import MainModal from '@/components/MainModal';
import MainPromotion from '@/components/MainPromotion';
import MainSlider from '@/components/MainSlider/MainSlide';

export default async function Home() {
  return (
    <>
      <MainLoginModal />
      <Datainit /> {/* 태초에 데이터를 받아오기 위한 목적의 컴포넌트입니다.*/}
      <MainModal /> {/* 모달창 컴포넌트입니다. */}
      <MainSlider /> {/* 메인 비쥬얼 슬라이드 컴포넌트입니다. */}
      <MainGameLink />
      <section className="bg-poten-snowgray1 w-full py-[32px] mt-[50px]">
        <h2 className="sr-only">신상게임 및 최저가 게임 목록</h2>
        {/* 제품 카드슬라이드 부분입니다. dataType과 gameType으로 costum/sort 를 지정할 수 있습니다. */}
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
      <MainMdPick /> {/* MD추천 컴포넌트 입니다. */}
      <MainPromotion /> {/* 프로모션 배너 컴포넌트 입니다. */}
      <MainBest /> {/* 베스트 제품 모음 컴포넌트 입니다. */}
    </>
  );
}
