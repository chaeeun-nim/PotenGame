import { Metadata } from 'next';
import { theJamsil } from './font';
import Image from 'next/image';
import LogoWhite from '../../../public/logo/logo-horizon-white.svg';
import bg1 from '@/assets/img/about/maplestorybg.webp';
import character from '@/assets/img/about/character.webp';
import Link from 'next/link';
import githubIcon from '@/assets/icons/github.svg';
import homeIcon from '@/assets/icons/home-white.svg';
import { teamData } from './teamData';
import MemberItem from '@/components/about/MemberItem';

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
            <h2 className={`${theJamsil.className} text-white font-medium text-[24px]`}>
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
      <section
        className="bg-poten-snowgray1 py-[50px] md:py-[75px] xl:py-[100px]
      px-4 md:px-6 xl:px-0 flex flex-col gap-6 md:gap-[36px] xl:gap-[50px] justify-center items-center">
        <h2
          className={`${theJamsil.className} text-poten-black text-center font-medium text-[20px]`}>
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
            멋쟁이사저처럼 프론트엔드 부트캠프의 수료라는
            <br />
            전직에 앞서 저희는 파이널프로젝트라는 사냥터에서
            <br />
            <span className="font-bold text-poten-red">깊은 인내</span>와
            <span className="font-bold text-poten-red">끈기</span>를 갖고 전직을위해 서로
            묻고 답하며
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
            멋쟁이사저처럼 프론트엔드 부트캠프의 수료라는 전직에 앞서
            <br />
            저희는 파이널프로젝트라는 사냥터에서
            <span className="font-bold text-poten-red">깊은 인내</span>와
            <span className="font-bold text-poten-red">끈기</span>를 갖고 전직을위해
            <br />
            서로 묻고 답하며 최선을 다해 “포텐게임” 프로젝트를 완수 하였습니다.
          </p>
        </div>
        <div className="flex flex-col max-w-[1200px] w-full mx-auto xl:gap-y-[36px] md:gap-y-[24px]">
          {MemberList}
        </div>
      </section>
    </>
  );
}
