'use client';

import useLoginModal from '@/zustand/areyouLogin';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function MainLoginModal() {
  const { viewModal, closeViewModal } = useLoginModal();
  const router = useRouter(); // 버튼의 경로지정을 위한 라우터

  useEffect(() => {
    if (viewModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [viewModal]);

  const loginLink = () => {
    closeViewModal();
    router.push('/login');
  };

  if (viewModal) {
    return (
      <>
        <div
          className={` fixed overflow-hidden  pointer-events-none  inset-0 transition-all duration-75 ease-in-out z-[9999999999999]`}>
          <div className=" w-full h-full pointer-events-auto  flex justify-center items-center ">
            <div className="bg-white rounded-[8px] shadow-2xl overflow-hidden">
              <h1 className="w-full md:text-[20px] text-white bg-poten-red text-center font-bold py-2 md:py-4 md:px-[100px]">
                포텐게임 방문을 환영합니다.
              </h1>
              <div className="py-[36px]  px-4 md:py-[50px] text-center flex flex-col justify-center items-center gap-[16px]">
                <p className="text-[14px] md:text-[16px] xl:text-[18px]">
                  지금 <span className="font-bold text-poten-red">로그인</span>하시고
                  중고,신상게임 최신 게임기 까지!
                  <br />
                  모두 모인 <span className="font-bold text-poten-red">포텐게임</span>을
                  이용해 보세요!
                </p>
                <div className="md:text-[18px] xl:text-[20px]">
                  <button
                    type="button"
                    className="bg-poten-red text-white rounded-4xl py-[4px] px-[32px] font-bold mr-[16px]"
                    onClick={loginLink}>
                    로그인
                  </button>
                  <button
                    type="button"
                    className="bg-white text-poten-red border-[1px] border-poten-red rounded-4xl py-[4px] px-[32px] font-bold"
                    onClick={closeViewModal}>
                    닫기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
}
