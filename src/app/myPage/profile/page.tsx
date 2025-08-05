import ProfileInput from "@/components/MyPage/Profile/ProfileInput";

export default function ProfilePage() {
  return (
  <>
    <h1 className="border-b-1 border-poten-gray-2">기본정보 변경</h1>

    <ProfileInput name={"name"} title={"별명"} type={"text"} placeholder={"별명을 입력해주세요"}/>
    <ProfileInput name={"email"} title={"이메일"} type={"email"} placeholder={"이메일을 입력해주세요"}/>
    <ProfileInput name={"phone"} title={"휴대폰 번호"} type={"phone"} placeholder={"전화번호를 입력해주세요"}/>
  </>
  );
}