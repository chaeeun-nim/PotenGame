'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import likelionLogo from '../../public/logo/likelionlogo.png';
import { useRouter } from 'next/navigation';

export default function MainModal() {
  const router = useRouter(); // 버튼의 경로지정을 위한 라우터
  const [modal, setModal] = useState<boolean | null>(false); // 모달의 상태

  useEffect(() => {
    const modalSession = sessionStorage.getItem('modal'); //세션스토리지에 모달의 상태를 저장

    if (modalSession === null) {
      // 세션스토리지에 모달 정보가 없는 첫 방문인 경우: 모달을 띄우고 상태 저장
      sessionStorage.setItem('modal', JSON.stringify(true));
      setModal(true);
      document.body.style.overflow = 'hidden';
    } else if (modalSession === 'true') {
      //만일 세션스토리지에 트루값이 저장되어있다면, (새로고침 or 타 페이지 이동후 재접속 하였을떄)
      sessionStorage.setItem('modal', JSON.stringify(false)); //상태를 거짓으로 변경
      document.body.style.overflow = '';
      setModal(false);
    } else {
      setModal(false); //그 외에 거짓인 상태에서 접속했을때도 똑같이 상태를 거짓으로 저장
      document.body.style.overflow = '';
    }
  }, []);

  // 모달 닫기 함수
  function closeModal() {
    setModal(false); //상태 거짓으로 변경
    sessionStorage.setItem('modal', JSON.stringify(false)); //세션스토리지에도 거짓 저장
    document.body.style.overflow = ''; // 오버플로우 히든 없애기
  }

  const aboutLink = () => {
    closeModal();
    router.push('./about'); // 회사소개 페이지로 이동을 위한 라우터
  };

  return (
    <>
      <div
        className={`w-full h-full bg-black/60 backdrop-blur-md absolute left-0 top-0 transition-all duration-75 ease-in-out z-[9999999999999]
         ${modal ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="relative w-full h-full flex justify-center items-center ">
          <div className="bg-white rounded-[8px] overflow-hidden">
            <h1 className="w-full md:text-[20px] text-white bg-poten-red text-center font-bold py-2 md:py-4 md:px-[100px]">
              포텐게임 방문을 환영합니다.
            </h1>
            <div className="py-[36px] px-4 md:py-[50px] text-center flex flex-col justify-center items-center gap-[16px]">
              <Image
                className="mx-auto w-[160px] md:w-[220px]"
                src={likelionLogo}
                alt="멋쟁이 사자처럼"
                width={304}
                height={63}
              />
              <p className="text-[14px] md:text-[16px]">
                당 사이트는
                <span className="font-bold text-poten-red">
                  실제 판매 목적의 사이트가 아닌
                </span>
                ,
                <br />
                멋쟁이 사자처럼 프론트엔드 부트캠프 13기 학생들의
                <br />
                <span className="font-bold text-poten-red">교육 목적</span>으로 제작된
                사이트임을 알립니다.
              </p>
              <div>
                <button
                  type="button"
                  className="bg-poten-red text-white rounded-4xl py-[4px] px-[32px] font-bold mr-[16px]"
                  onClick={aboutLink}>
                  프로젝트 소개
                </button>
                <button
                  type="button"
                  className="bg-white text-poten-red border-[1px] border-poten-red rounded-4xl py-[4px] px-[32px] font-bold"
                  onClick={closeModal}>
                  닫기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
