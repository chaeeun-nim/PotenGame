import { Metadata } from 'next';
import { theJamsil } from './font';
import Image from 'next/image';
import LogoWhite from '../../../public/logo/logo-horizon-white.svg';
import bg1 from '@/assets/img/about/maplestorybg.webp';
import bg2 from '@/assets/img/about/bg2.webp';
import character from '@/assets/img/about/character.webp';
import Link from 'next/link';
import githubIcon from '@/assets/icons/github.svg';
import homeIcon from '@/assets/icons/home-white.svg';
import { teamData } from './teamData';
import MemberItem from '@/components/about/MemberItem';
import gameImg from '@/assets/img/about/game3dicon.webp';
import usedImg from '@/assets/img/about/used3dicon.webp';
import redCheckIcon from '@/assets/icons/red-checkicon.svg';
import otherPage1 from '@/assets/img/about/sujunggame.webp';
import otherPage2 from '@/assets/img/about/psforyou.webp';
import roundx from '@/assets/icons/gray-roundx.svg';
import roundcheck from '@/assets/icons/white-roundcheck.svg';
import roundCheckBlue from '@/assets/icons/round-checkblue.svg';
import roundCheckRed from '@/assets/icons/round-checkred.svg';
import tripleArrow from '@/assets/icons/triple-arrow.svg';
import logo from '../../../public/logo/logo-white.svg';
import linkBtn from '@/assets/icons/linkbtn.svg';
import tawoo2 from '@/assets/img/about/taewoo2.webp';
import thankyou from '@/assets/img/about/thankyou.png';

export const metadata: Metadata = {
  title: '포텐게임 회사소개',
  description: '포텐게임 회사소개 페이지',
  openGraph: {
    title: '포텐게임 회사소개',
    description: '포텐게임 회사소개 페이지',
  },
};

export default function About() {
  const MemberList = teamData.map((item) => <MemberItem item={item} key={item.id} />);
  return (
    <>
      {/* <h1 className={`${theJamsil.className}`}>어바웃페이지</h1> */}
      <header
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)), url(${bg1.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className="py-[50px]">
        {/* PC/태블릿 상단 비주얼 영역 */}
        <div className="max-w-[1200px] mx-auto hidden md:flex md:flex-col md:gap-16 xl:flex-row justify-between items-center ">
          <div className="flex gap-[24px] px-6 flex-col  md:w-full">
            <Image src={LogoWhite} width={384} height={50} alt="포텐게임" />
            <h2 className={`${theJamsil.className} text-white font-medium text-[22px]`}>
              전직 코 앞에서 만나 시작된 팀,
              <span className="text-poten-red">z1존포텐1004</span>의 프로젝트
            </h2>
            <p className={`${theJamsil.className} text-white font-light text-[18px]`}>
              완벽하게 어설픈 팀 z1존포텐1004와 그들의 개발 연대기,
              <br />
              프로젝트 “포텐게임”을 소개합니다.
            </p>
            <div className="flex flex-row gap-[16px]">
              <Link
                className={`${theJamsil.className} flex text-white bg-poten-red justify-center items-center gap-[10px] px-[20px] py-[10px] text-[18px]`}
                href="https://github.com/FRONTENDBOOTCAMP-13th/Final-14-z1zone1004">
                <Image src={githubIcon} width={30} height={30} alt="깃헙아이콘" />
                저장소 바로가기
              </Link>
              <Link
                className={`${theJamsil.className} flex text-white border-2 border-white justify-center items-center gap-[10px] px-[20px] py-[10px] text-[18px]`}
                href="/">
                <Image src={homeIcon} width={30} height={30} alt="홈 아이콘" />
                프로젝트 메인
              </Link>
            </div>
          </div>
          <Image
            className="xl:w-[620px] xl:block md:hidden"
            src={character}
            width={1080}
            height={781}
            alt="메이플스토리 캐릭터 모음"
          />
        </div>
        {/* 모바일 상단 비주얼 영역 */}
        <div className="flex flex-col justify-center items-center md:hidden gap-6 leading-tight px-4">
          <Image
            className="max-w-[250px]"
            src={LogoWhite}
            width={384}
            height={50}
            alt="포텐게임"
          />
          <h2
            className={`${theJamsil.className} text-white font-medium text-center text-[24px]`}>
            전직 코 앞에서 만나 시작된 팀,
            <br />
            <span className="text-poten-red">z1존포텐1004</span>의 프로젝트
          </h2>
          <Image
            className="px-6"
            src={character}
            width={1080}
            height={781}
            alt="메이플스토리 캐릭터 모음"
          />
          <p
            className={`${theJamsil.className} text-center text-white font-light text-[18px]`}>
            완벽하게 어설픈 팀 z1존포텐1004와
            <br /> 그들의 개발 연대기,
            <br />
            프로젝트 “포텐게임”을 소개합니다.
          </p>
          <div className="flex flex-row gap-[16px] w-full">
            <Link
              className={`${theJamsil.className} flex text-white bg-poten-red justify-center items-center gap-[10px]  py-[8px] text-[16px] w-full`}
              href="https://github.com/FRONTENDBOOTCAMP-13th/Final-14-z1zone1004">
              <Image src={githubIcon} width={24} height={24} alt="깃헙아이콘" />
              저장소
            </Link>
            <Link
              className={`${theJamsil.className} flex text-white border-2 border-white justify-center items-center gap-[10px]  py-[8px] text-[16px] w-full`}
              href="/">
              <Image src={homeIcon} width={24} height={24} alt="홈 아이콘" />
              메인화면
            </Link>
          </div>
        </div>
      </header>
      <main className="font-medium text-poten-black">
        <section
          className="bg-poten-snowgray1 py-[50px] md:py-[75px] xl:py-[100px]
      px-0 md:px-6 xl:px-0 flex flex-col gap-6 md:gap-[36px] xl:gap-[50px] justify-center items-center">
          <h2
            className={`${theJamsil.className} text-poten-black text-center font-medium text-[20px]
          md:text-[24px] xl:text-[36px]`}>
            z1존포텐1004 팀을 소개합니다
          </h2>
          {/* 모바일 팀소개 요약 */}
          <div
            className="text-center font-medium text-[14px]
        flex md:hidden flex-col md:flex-row gap-6 md:text-left">
            <p className=" text-poten-gray-2 ">
              옛날 메이플스토리와 코딩은 비슷합니다.
              <br />
              매우 약한캐릭터로 많은 타격을 가해야 겨우 몬스터를
              <br />
              잡을 수 있었고, 전직후에 더욱 강해지며 더 강한
              <br />
              몬스터를 잡을 수 있게 됩니다.
            </p>
            <p className=" text-poten-black ">
              멋쟁이사자처럼 프론트엔드 부트캠프의 수료라는
              <br />
              전직에 앞서 저희는 파이널프로젝트라는 사냥터에서
              <br />
              <span className="font-bold text-poten-red">깊은 인내</span>와
              <span className="font-bold text-poten-red">끈기</span>를 갖고 전직을위해
              서로 묻고 답하며
              <br />
              최선을 다해 “포텐게임” 프로젝트를 완수 하였습니다.
            </p>
          </div>
          {/* PC/태블릿 팀소개 요약 */}
          <div
            className="text-center font-medium w-full  
         justify-center items-center xl:text-[18px] md:text-[18px] 
         md:text-center hidden md:flex xl:flex-row md:flex-col gap-8 xl:text-left">
            <p className=" text-poten-gray-2 ">
              옛날 메이플스토리와 코딩은 비슷합니다.
              <br />
              매우 약한캐릭터로 많은 타격을 가해야 겨우 몬스터를 잡을 수 있었고,
              <br />
              전직후에 더욱 강해지며 더 강한 몬스터를 잡을 수 있게 됩니다.
            </p>
            <p className=" text-poten-black ">
              멋쟁이사자처럼 프론트엔드 부트캠프의 수료라는 전직에 앞서
              <br />
              저희는 파이널프로젝트라는 사냥터에서
              <span className="font-bold text-poten-red">깊은 인내</span>와
              <span className="font-bold text-poten-red">끈기</span>를 갖고 전직을위해
              <br />
              서로 묻고 답하며 최선을 다해 “포텐게임” 프로젝트를 완수 하였습니다.
            </p>
          </div>
          <div className="flex flex-col max-w-[1200px] w-full mx-auto xl:gap-y-[36px] gap-y-[24px]">
            {MemberList}
          </div>
        </section>
        <section
          className="bg-white py-[50px] md:py-[75px] xl:py-[100px]
      px-0 md:px-6 xl:px-0 flex flex-col gap-6 md:gap-[36px]  justify-center items-center">
          <h2
            className={`${theJamsil.className} text-poten-black text-center font-medium text-[20px]
          md:text-[24px] xl:text-[36px]`}>
            포텐게임 서비스 소개
          </h2>

          <p className=" text-poten-black xl:text-[20px] font-medium text-center hidden md:inline-block">
            닌텐도부터 플레이스테이션 까지. 과거의 명작 게임들도 모두 만나 볼 수 있는
            <br />
            B2C 게임 판매 사이트 입니다.
          </p>
          <p className=" text-poten-black xl:text-[18px] font-medium text-center inline-block  md:hidden">
            닌텐도부터 플레이스테이션 까지. 과거의 명작 게임들도
            <br />
            모두 만나 볼 수 있는 B2C 게임 판매 사이트 입니다.
          </p>
          <ul className="grid grid-cols-12 xl:max-w-[1200px] md:max-w-[600px] mx-auto gap-6">
            <li className="col-span-12 gap-4 xl:col-span-6 border-y-1 md:border-1 md:rounded-[4px] border-poten-gray-1 rounded-[4px] bg-poten-snowgray1 flex justify-between items-center p-4 md:p-6">
              <div className="flex flex-col gap-2">
                <p
                  className={`${theJamsil.className} text-[18px] flex justify-start items-center text-poten-red gap-2`}>
                  <Image src={redCheckIcon} width={16} height={16} alt="체크아이콘" />
                  Point.1
                </p>
                <h4 className={`${theJamsil.className} text-[18px] md:text-[22px]`}>
                  게임기, 게임칩 판매 사이트
                </h4>
                <p>
                  플레이스테이션, 닌텐도 스위치 등 다양한 게임의 게임칩과 게임기를 구매할
                  수 있는 B2C 전자상거래 서비스 입니다.
                </p>
              </div>
              <Image
                className="w-[90px] md:w-[120px]"
                src={gameImg}
                width={120}
                height={120}
                alt="게임기 이미지"
              />
            </li>
            <li className="col-span-12 gap-4 xl:col-span-6 border-y-1 md:border-1 md:rounded-[4px] border-poten-gray-1 rounded-[4px] bg-poten-snowgray1 flex justify-between items-center p-4 md:p-6">
              <div className="flex flex-col gap-2">
                <p
                  className={`${theJamsil.className} text-[18px] flex justify-start items-center text-poten-red gap-2`}>
                  <Image src={redCheckIcon} width={16} height={16} alt="체크아이콘" />
                  Point.2
                </p>
                <h4 className={`${theJamsil.className} text-[18px] md:text-[22px]`}>
                  희귀한 게임과 게임기 까지
                </h4>
                <p>
                  현재 시중에서 구하기 힘든 중고 게임까지 당사에서 제품 검수 및 보증을
                  통해 판매합니다.
                </p>
              </div>
              <Image
                className="w-[90px] md:w-[120px]"
                src={usedImg}
                width={120}
                height={120}
                alt="절약 이미지"
              />
            </li>
          </ul>
        </section>
        <section
          className="bg-poten-snowgray1 py-[50px] md:py-[75px] xl:py-[100px]
      px-4 md:px-6 xl:px-0 flex flex-col gap-6 md:gap-[36px]  justify-center items-center">
          <h2
            className={`${theJamsil.className} text-poten-black text-center font-medium text-[20px]
          md:text-[24px] xl:text-[36px]`}>
            포텐게임만의 강점
          </h2>
          <p className=" text-poten-black xl:text-[20px] font-medium text-center hidden md:inline-block">
            동종업계 같은 서비스 홈페이지 분석 결과 다수의 홈페이지가 노후된 홈페이지가
            많았습니다.
            <br /> 중고거래품목을 판매하는 서비스 특성상,
            <br />
            노후화된 홈페이지는 제품의 신뢰도를 떨어뜨리고 지속적인 관리가 어렵습니다.
          </p>
          <p className=" text-poten-black xl:text-[18px] font-medium text-center inline-block  md:hidden">
            동종업계 같은 서비스 홈페이지 분석 결과
            <br /> 다수의 홈페이지가 노후된 홈페이지가 많았습니다.
            <br /> 중고거래품목을 판매하는 서비스 특성상,
            <br />
            노후화된 홈페이지는 제품의 신뢰도를 떨어뜨리고 <br />
            지속적인 관리가 어렵습니다.
          </p>
          <div className="max-w-[1200px]">
            <h2
              className={`${theJamsil.className} text-poten-black text-center font-medium text-[20px]
          md:text-[24px] xl:text-[36px] xl:mb-[30px] md:mb-[24px] mb-[16px]`}>
              경쟁업체 홈페이지 분석
            </h2>
            <div className="max-w-[1200px] grid grid-cols-12 mx-auto gap-4">
              <Image
                src={otherPage1}
                className="w-full col-span-12 md:col-span-6"
                width={588}
                height={423}
                alt="경쟁업체 1"
              />
              <Image
                src={otherPage2}
                className="w-full col-span-12 md:col-span-6"
                width={588}
                height={423}
                alt="경쟁업체 2"
              />
            </div>
            <ul className="xl:w-[1200px] grid grid-cols-12 gap-4">
              <li
                className="p-3 md:p-4 border-2 border-poten-gray-2 bg-white gap-2 rounded-[4px]
            flex justify-start items-start md:items-center col-span-12 md:col-span-10 md:col-start-2 
            xl:col-span-6 text-[16px] md:text-[20px] ">
                <Image
                  className="w-[20px] pt-0.5 md:pt-0  md:w-[24px]"
                  src={roundx}
                  width={24}
                  height={24}
                  alt="x 아이콘"
                />
                <p>
                  노후화로 인한 어려운 유지보수 및<br className="md:hidden" />
                  복잡한 UI
                </p>
              </li>
              <li
                className="p-3 md:p-4 border-2 border-poten-gray-2 bg-white gap-2 rounded-[4px]
            flex justify-start items-start md:items-center col-span-12 md:col-span-10 md:col-start-2 
            xl:col-span-6 text-[16px] md:text-[20px] ">
                <Image
                  className="w-[20px] pt-0.5 md:pt-0  md:w-[24px]"
                  src={roundx}
                  width={24}
                  height={24}
                  alt="x 아이콘"
                />
                <p>
                  다양한 크기의 디바이스 대비가 불가능한
                  <br className="md:hidden" />
                  적응형 홈페이지
                </p>
              </li>
              <li
                className="p-3 md:p-4 border-2 border-poten-gray-2 bg-white gap-2 rounded-[4px]
            flex justify-start items-start md:items-center col-span-12 md:col-span-10 md:col-start-2 
            xl:col-span-6 text-[16px] md:text-[20px] ">
                <Image
                  className="w-[20px] pt-0.5 md:pt-0  md:w-[24px]"
                  src={roundx}
                  width={24}
                  height={24}
                  alt="x 아이콘"
                />
                <p>
                  지나치게 비공식적으로 보여지는
                  <br className="md:hidden" />
                  촌스러운 디자인
                </p>
              </li>
              <li
                className="p-3 md:p-4 border-2 border-poten-gray-2 bg-white gap-2 rounded-[4px]
            flex justify-start items-start md:items-center col-span-12 md:col-span-10 md:col-start-2 
            xl:col-span-6 text-[16px] md:text-[20px] ">
                <Image
                  className="w-[20px] pt-0.5 md:pt-0  md:w-[24px]"
                  src={roundx}
                  width={24}
                  height={24}
                  alt="x 아이콘"
                />
                <p>
                  사용자를 불편하고 헷갈리게 만드는
                  <br className="md:hidden" />
                  마케팅 요소들
                </p>
              </li>
            </ul>
          </div>
          <div className="max-w-[1200px] w-full">
            <h2
              className={`${theJamsil.className} text-poten-black text-center font-medium text-[20px]
          md:text-[24px] xl:text-[36px] xl:mb-[30px] md:mb-[24px] mb-[16px]`}>
              포텐게임 개선 POINT
            </h2>
            <ul className="xl:w-[1200px] w-full grid grid-cols-12 gap-4">
              <li
                className="p-3 md:p-4 text-white bg-poten-safegreen gap-2 rounded-[4px]
            flex justify-start items-start md:items-center col-span-12 md:col-span-10 md:col-start-2 
            xl:col-span-6 text-[16px] md:text-[20px] ">
                <Image
                  className="w-[20px] pt-0.5 md:pt-0  md:w-[24px]"
                  src={roundcheck}
                  width={24}
                  height={24}
                  alt="체크 아이콘"
                />
                <p>
                  필요 정보를 한번에 알 수 있도록 직관적이고,
                  <br className="md:hidden" />
                  편리한 UI
                </p>
              </li>
              <li
                className="p-3 md:p-4 text-white bg-poten-safegreen gap-2 rounded-[4px]
            flex justify-start items-start md:items-center col-span-12 md:col-span-10 md:col-start-2 
            xl:col-span-6 text-[16px] md:text-[20px] ">
                <Image
                  className="w-[20px] pt-0.5 md:pt-0  md:w-[24px]"
                  src={roundcheck}
                  width={24}
                  height={24}
                  alt="체크 아이콘"
                />
                <p>
                  다양한 사이즈에 대응 가능한 디스플레이
                  <br className="md:hidden" />
                  반응형 홈페이지
                </p>
              </li>
              <li
                className="p-3 md:p-4 text-white bg-poten-safegreen gap-2 rounded-[4px]
            flex justify-start items-start md:items-center col-span-12 md:col-span-10 md:col-start-2 
            xl:col-span-6 text-[16px] md:text-[20px] ">
                <Image
                  className="w-[20px] pt-0.5 md:pt-0  md:w-[24px]"
                  src={roundcheck}
                  width={24}
                  height={24}
                  alt="체크 아이콘"
                />
                <p>불필요하게 많은 마케팅적 요소 삭제</p>
              </li>
              <li
                className="p-3 md:p-4 text-white bg-poten-safegreen gap-2 rounded-[4px]
            flex justify-start items-start md:items-center col-span-12 md:col-span-10 md:col-start-2 
            xl:col-span-6 text-[16px] md:text-[20px] ">
                <Image
                  className="w-[20px] pt-0.5 md:pt-0  md:w-[24px]"
                  src={roundcheck}
                  width={24}
                  height={24}
                  alt="체크 아이콘"
                />
                <p>SNS로그인과 같은 편의성 기능 추가</p>
              </li>
            </ul>
          </div>
        </section>
        <section
          className="bg-[#0D0E11] py-[50px] md:py-[75px] xl:py-[100px]
      px-4 md:px-6 xl:px-0 flex flex-col gap-6 md:gap-[36px]  justify-center items-center">
          <h2
            className={`${theJamsil.className} text-white text-center font-medium text-[20px]
          md:text-[24px] xl:text-[36px]`}>
            포텐게임의 앞으로의 변화
          </h2>
          <p className=" text-white xl:text-[20px] font-medium text-center hidden md:inline-block">
            한달이라는 짧은 프로젝트 기간을 염두해 두고, 빠른 제작 및 결과물 도출을 위해
            <br />
            저희는 포텐게임의 기본기능만 작동되는 프로토타입을 목표로 제작하였습니다.
            <br />
            앞으로 어떻게 더 보강해 나갈 수 있을까요?
          </p>
          <p className=" text-white xl:text-[18px] font-medium text-center inline-block  md:hidden">
            한달이라는 짧은 프로젝트 기간을 염두해 두고,
            <br />
            빠른 제작 및 결과물 도출을 위해
            <br />
            저희는 포텐게임의 기본기능만 작동되는
            <br />
            프로토타입을 목표로 제작하였습니다.
            <br />
            앞으로 어떻게 더 보강해 나갈 수 있을까요?
          </p>
          <div
            className="xl:w-[1200px] w-full mx-auto grid grid-cols-12 gap-4 xl:gap-8 text-white
        ">
            <div className="bg-[#17191F] col-span-12 xl:col-span-6 md:col-span-10 md:col-start-2 rounded-[8px] pb-[32px] md:pb-[50px] overflow-hidden">
              <h5
                className={`${theJamsil.className} bg-poten-psblue py-2 text-white text-center font-medium text-[20px]`}>
                제작완료
              </h5>
              <ul className="md:px-[50px] p-[16px] md:py-[28px] flex flex-col gap-4">
                <li className="flex items-start  gap-2 text-[18px] md:text-[22px]  font-medium  align-text-top">
                  <Image
                    className="pt-0.5 w-[24px] md:w-[28px]"
                    src={roundCheckBlue}
                    width={28}
                    height={28}
                    alt="체크 아이콘"
                  />
                  홈페이지 시안 제작 및 기획 완료
                </li>
                <li className="flex items-start  gap-2 text-[18px] md:text-[22px] font-medium  align-text-top">
                  <Image
                    className="pt-0.5 w-[24px] md:w-[28px]"
                    src={roundCheckBlue}
                    width={28}
                    height={28}
                    alt="체크 아이콘"
                  />
                  GNB, Footer 등 글로벌 컴포넌트 완료
                </li>
                <li className="flex items-start  gap-2 text-[18px] md:text-[22px]  font-medium  align-text-top">
                  <Image
                    className="pt-0.5 w-[24px] md:w-[28px]"
                    src={roundCheckBlue}
                    width={28}
                    height={28}
                    alt="체크 아이콘"
                  />
                  사이트 회원 가입 및 로그인 기능 완료
                </li>
                <li className="flex items-start gap-2 text-[18px] md:text-[22px]  font-medium  align-text-top">
                  <Image
                    className="pt-0.5 w-[24px] md:w-[28px]"
                    src={roundCheckBlue}
                    width={28}
                    height={28}
                    alt="체크 아이콘"
                  />
                  상품 조회, 장바구니 등록, 구매 등 상품 구매를 위한 기본적인 기능
                  제작완료
                </li>
                <li className="flex items-start  gap-2 text-[18px] md:text-[22px]  font-medium  align-text-top">
                  <Image
                    className="pt-0.5 w-[24px] md:w-[28px]"
                    src={roundCheckBlue}
                    width={28}
                    height={28}
                    alt="체크 아이콘"
                  />
                  PC / Tablet / Mobile 반응형 구현
                </li>
              </ul>
            </div>
            <div className="bg-[#17191F] col-span-12 xl:col-span-6 md:col-span-10 md:col-start-2 rounded-[8px] pb-[32px] md:pb-[50px] overflow-hidden">
              <h5
                className={`${theJamsil.className} bg-poten-red py-2 text-white text-center font-medium text-[20px]`}>
                제작예정
              </h5>
              <ul className="md:px-[50px] px-[24px] py-[28px] flex flex-col gap-4">
                <li className="flex items-start md:items-center gap-2 text-[18px] md:text-[22px] font-medium  align-text-top">
                  <Image
                    className="pt-0.5 w-[24px] md:w-[28px]"
                    src={roundCheckRed}
                    width={28}
                    height={28}
                    alt="체크 아이콘"
                  />
                  SNS 로그인 기능 추가
                </li>
                <li className="flex items-start md:items-center gap-2 text-[18px] md:text-[22px] font-medium  align-text-top">
                  <Image
                    className="pt-0.5 w-[24px] md:w-[28px]"
                    src={roundCheckRed}
                    width={28}
                    height={28}
                    alt="체크 아이콘"
                  />
                  게시판 기능 개발
                </li>
                <li className="flex items-start md:items-center gap-2 text-[18px] md:text-[22px] font-medium  align-text-top">
                  <Image
                    className="pt-0.5 w-[24px] md:w-[28px]"
                    src={roundCheckRed}
                    width={28}
                    height={28}
                    alt="체크 아이콘"
                  />
                  쿠키를 활용한 ACCESS TOKEN 저장
                </li>
                <li className="flex items-start md:items-center gap-2 text-[18px] md:text-[22px] font-medium  align-text-top">
                  <Image
                    className="pt-0.5 w-[24px] md:w-[28px]"
                    src={roundCheckRed}
                    width={28}
                    height={28}
                    alt="체크 아이콘"
                  />
                  배송지 주소 검색 이후 상세 주소내용 추가 기능 개발
                </li>
                <li className="flex items-start md:items-center gap-2 text-[18px] md:text-[22px] font-medium  align-text-top">
                  <Image
                    className="pt-0.5 w-[24px] md:w-[28px]"
                    src={roundCheckRed}
                    width={28}
                    height={28}
                    alt="체크 아이콘"
                  />
                  다크모드 기능 개발
                </li>
              </ul>
            </div>
          </div>
          <div className="xl:w-[1200px] w-full mx-auto grid grid-cols-12 gap-4 xl:gap-8 text-white gap-y-16 ">
            <div className="col-span-12 xl:col-span-4 md:col-span-5 md:col-start-2 flex justify-center items-center flex-col gap-4">
              <div>
                <div className="border-1 border-poten-red rounded-[8px] text-center py-2 text-[22px] font-bold">
                  접근성강화
                </div>
                <div className="bg-[#17191F] rounded-[8px] font-medium text-[18px] p-6 min-h-[150px]">
                  시간이 없고 기능을 완성하는데에만 급급해 놓친 시멘틱 태그 및 aria 속성,
                  다수의 이미지로 대체되어 누락된 접근성
                </div>
              </div>
              <Image src={tripleArrow} width={25} height={33} alt="화살표" />
              <div className="bg-poten-red rounded-[8px] font-medium text-[18px] p-6 min-h-[150px]">
                시멘틱 태그 및 h1 ~ h6를 활용한 HTML 구조화와 누락된 alt 속성 및 aria
                속성을 강화하여 접근성을 높이는데에 더욱 집중하겠습니다.
              </div>
            </div>
            <div className="col-span-12 xl:col-span-4 md:col-span-5 md:col-start-7 flex justify-center items-center flex-col gap-4">
              <div>
                <div className="border-1 border-poten-red rounded-[8px] text-center py-2 text-[22px] font-bold">
                  성능 강화
                </div>
                <div className="bg-[#17191F] rounded-[8px] font-medium text-[18px] p-6 min-h-[150px]">
                  SSR이 아닌 CSR로 제작된 다수의 컴포넌트를 SSR로 교체하고자 하였으나
                  다수의 전역상태와 이벤트 등으로 인해 진행 불가
                </div>
              </div>
              <Image src={tripleArrow} width={25} height={33} alt="화살표" />
              <div className="bg-poten-red rounded-[8px] font-medium text-[18px] p-6 min-h-[150px]">
                성능 개선을 목표로 CSR로 제작된 다수의 이벤트 및 컴포넌트를 SSR로
                제작하고, 전역상태로 저장된 데이터를 쿠키로 전환
              </div>
            </div>
            <div className="col-span-12 xl:col-span-4 md:col-span-5  md:col-start-2 flex justify-center items-center flex-col gap-4">
              <div>
                <div className="border-1 border-poten-red rounded-[8px] text-center py-2 text-[22px] font-bold">
                  디자인 강화
                </div>
                <div className="bg-[#17191F] rounded-[8px] font-medium text-[18px] p-6 min-h-[150px]">
                  중요도와 관계없이 오직 꾸밈 요소로만 제작된 버튼 및 링크 디자인과
                  통일되지 않은 간격등 스케치 단계에서 마무리된 디자인 시안
                </div>
              </div>
              <Image src={tripleArrow} width={25} height={33} alt="화살표" />
              <div className="bg-poten-red rounded-[8px] font-medium text-[18px] p-6 min-h-[150px]">
                중요도에 따른 컴포넌트 디자인화를 진행하고, 간격, 자간, 폰트 사이즈 등
                계층을 나뉘어 체계적으로 계획된 디자인으로 변경
              </div>
            </div>
            <div className="  col-span-12 xl:hidden hidden md:flex md:col-span-5  justify-center items-center flex-col gap-4">
              <Image className="w-[80%]" src={logo} width={400} height={162} alt="로고" />
            </div>
          </div>
        </section>
        <section className="w-full hidden md:flex xl:flex-row md:flex-col">
          <div className="bg-poten-red w-full">
            <div className="xl:w-[600px] flex flex-col justify-between  ml-auto  p-8 h-[300px]">
              <div className="flex flex-col gap-4">
                <Image
                  className="w-[270px]"
                  src={LogoWhite}
                  width={384}
                  height={50}
                  alt="포텐게임"
                />
                <h3 className={`${theJamsil.className} text-[24px] text-white`}>
                  z1존포텐1004팀의 결과물이 더 궁금하시다면?
                </h3>
                <p className="text-white text-[18px] font-medium">
                  지금바로 배포 메인화면에서 게임과 게임기를 구매하는
                  <br />
                  경험을 해보세요!
                </p>
              </div>
              <Link href="/" className="self-end">
                <Image src={linkBtn} width={127} height={32} alt="바로가기" />
              </Link>
            </div>
          </div>
          <div className="bg-poten-gray3  w-full ">
            <div className="xl:w-[600px] flex flex-col justify-between  mr-auto  p-8 h-[300px]">
              <div className="flex flex-col gap-4">
                <h3 className={`${theJamsil.className} text-[24px] text-white`}>
                  z1존포텐1004팀의 개발과정 및 프로젝트의
                  <br />
                  상세 내용이 궁금하시다면?
                </h3>
                <p className="text-white text-[18px] font-medium">
                  팀 프로젝트 Git Hub 레퍼지토리의 위키 및 노션에서
                  <br />더 많은 정보와 팀의 개발스토리를 알아보실 수 있습니다.
                </p>
              </div>
              <Link
                href="https://github.com/FRONTENDBOOTCAMP-13th/Final-14-z1zone1004"
                className="self-end">
                <Image src={linkBtn} width={127} height={32} alt="바로가기" />
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full flex md:hidden">
          <Link
            href="/"
            className="bg-poten-red p-4 w-[50%] flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <Image
                className="w-[150px]"
                src={LogoWhite}
                width={384}
                height={50}
                alt="포텐게임"
              />
              <h3
                className={`${theJamsil.className} text-[18px] text-white leading-tight`}>
                결과물이
                <br />
                궁금하시다면?
              </h3>
            </div>

            <Image
              className="w-[100px] self-end"
              src={linkBtn}
              width={127}
              height={32}
              alt="바로가기"
            />
          </Link>
          <Link
            href="https://github.com/FRONTENDBOOTCAMP-13th/Final-14-z1zone1004"
            className="bg-poten-gray3 p-4 w-[50%] flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <h3
                className={`${theJamsil.className} text-[18px] text-white leading-tight`}>
                개발 과정 및<br />
                프로젝트 상세내용이 궁금하다면?
              </h3>
            </div>

            <Image
              className="w-[100px] self-end"
              src={linkBtn}
              width={127}
              height={32}
              alt="바로가기"
            />
          </Link>
        </section>
        <section
          className="py-[50px] "
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)), url(${bg2.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
          <div className="w-full xl:max-w-[1200px] mx-auto flex flex-col md:flex-row gap-0 md:gap-4 items-center justify-center">
            <Image
              src={thankyou}
              className="xl:max-w-[600px] md:max-w-[400px] w-full"
              width={800}
              height={533}
              alt="감사합니다"
            />
            <Image
              className="xl:max-w-[300px] md:max-w-[250px] w-[80%]"
              src={tawoo2}
              width={300}
              height={332}
              alt="감사합니다"
            />
          </div>
        </section>
      </main>
    </>
  );
}
