'use client';

import LoginButton from '@/components/Login/LoginButton';
import LoginInput from '@/components/Login/LoginInput';
import { login } from '@/data/actions/login';

import Image from 'next/image';
import Link from 'next/link';

import { useRouter, useSearchParams } from 'next/navigation';
import { useActionState, useEffect, useState } from 'react';

import checked from '@/assets/icons/checked.svg';
import unchecked from '@/assets/icons/unchecked.svg';
import useUserStore from '@/zustand/userStore';
import { getCart } from '@/data/functions/getCart';
import useCartStore from '@/zustand/cartStore';
import { Iaddress } from '@/types/products';

export default function LoginForm() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoginChecked, setIsLoginChecked] = useState(false);

  const router = useRouter();
  const [userState, formAction] = useActionState(login, null);

  const redirect = useSearchParams().get('redirect');

  const setUser = useUserStore((state) => state.setUser);
  const { setCart, setCost } = useCartStore();

  // setUser는 상태를 변경하는 함수이므로 useEffect에서 호출해야 한다.
  useEffect(() => {
    if (userState?.ok) {
      setUser({
        _id: userState.item._id,
        email: userState.item.email,
        name: userState.item.name,
        type: userState.item.type,
        phone: userState.item.phone,
        token: {
          accessToken: userState.item.token?.accessToken || '',
          refreshToken: userState.item.token?.refreshToken || '',
        },
        extra: {
          purchases: userState.item.extra?.purchases as number,
          address: userState.item.extra?.address as Iaddress[],
          nickname: userState.item.extra?.nickname as string,
          birthday: userState.item.extra?.birthday as string,
          membershipClass: userState.item.extra?.membershipClass as 'MC01' | 'MC02',
        },
      });
      if (redirect) {
        router.replace(redirect); // 돌아갈 페이지가 있을 경우 이동한다.
      } else {
        router.back(); // 이전 페이지로 이동한다.
      }

      (async () => {
        const res = await getCart(userState.item.token.accessToken);
        if (res.ok) {
          setCart(res.item);
          setCost(res.cost);
        }
      })();
    } else {
      if (!userState?.errors && userState?.message) {
        // 입력값 검증에러가 아닌 경우
        alert(userState.message); // 로그인 실패 메세지
      }
    }
  }, [userState]);

  return (
    <>
      {redirect && (
        <div className="text-center py-4">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            로그인이 필요한 서비스입니다.
          </h3>
        </div>
      )}

      <form action={formAction} className="w-full flex flex-col">
        <LoginInput isSubmit={isSubmit} type={'email'} value={'이메일 계정'} />
        <LoginInput isSubmit={isSubmit} type={'password'} value={'비밀번호'} />

        <div className="flex justify-between mt-3 mb-10">
          <div>
            <Link href="/find/findId" className="mr-5">
              아이디 찾기
            </Link>
            <Link href="/find/findPw">비밀번호 찾기</Link>
          </div>

          <div>
            <input
              id="login-maintain"
              type="checkbox"
              className="hidden"
              checked={isLoginChecked}
              onChange={() => {
                setIsLoginChecked((prev) => !prev);
              }}
            />
            <label
              htmlFor="login-maintain"
              className="inline-block w-4 h-4 cursor-pointer mx-1">
              <Image src={isLoginChecked ? checked : unchecked} alt="로그인 상태 유지" />
            </label>
            <span>로그인 유지하기</span>
          </div>
        </div>

        <LoginButton
          setIsSubmit={setIsSubmit}
          type={'submit'}
          value={'로그인'}
          color={'red'}
        />
        <LoginButton
          link={'/login/signUp'}
          type={'button'}
          value={'회원가입'}
          color={'gray3'}
        />
      </form>
    </>
  );
}
