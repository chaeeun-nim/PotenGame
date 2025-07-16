import { Metadata } from 'next';

export const generateMetadata = (): Metadata => {
  return {
    title: '회원가입',
    description: '회원가입 페이지입니다.',
  };
};

export default function myPage() {
  return (
    <>
      <h1>마이페이지</h1>
    </>
  );
}
