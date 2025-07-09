import { Metadata } from "next";

export const metadata: Metadata = {
  title: '회원가입',
  description: '회원가입 페이지입니다.'
}

export default function signUp() {
  return (
    <>
    <h1> 회원가입 </h1>
    <form action="/">
      <input type="email" placeholder="이메일을 입력하세요"/>
      <input type="text" placeholder="비밀번호를 입력하세요"/>
      <input type="text" placeholder="이름을 입력하세요" />
      <input type="phone" placeholder="전화번호를 입력하세요"/>
      <input type="address" placeholder="주소를 입력하세요"/>

      <input type="radio" id="user" name="user" value="user" />
        <label htmlFor="user">  구매자 </label>
      <input type="radio" id="seller" name="seller" value="seller" />
        <label htmlFor="option2">판매자</label>

      <input type="checkbox" id="scales" name="scales" />
        <label htmlFor="scales">[필수] 만 14세 이상입니다.</label>
      <input type="checkbox" id="scales" name="scales" />
        <label htmlFor="scales">[필수] 이용약관 동의</label>
      <input type="checkbox" id="scales" name="scales" />
        <label htmlFor="scales">[필수] 개인 정보 수집 및 이용 동의</label>
      <input type="checkbox" id="scales" name="scales" />
        <label htmlFor="scales">[선택] 광고성 정보 수신 모두 동의</label>

      <button type="submit">가입하기</button>
    </form>
    </>
  );
}