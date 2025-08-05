import { emailCheck } from "@/data/functions/emailCheck";
import { NicknameCheck } from "@/data/functions/nicknameCheck";

interface SignUpInputType {
  type: string;
  title: string;
  placeholder: string;
  name:string;

  email?: string;
  nickname?: string;
  tel?: string;
  emailMessage?: string;
  nicknameMessage?: string;

  setEmail?: (value: string) => void;
  setEmailMessage?: (value: string) => void;
  setNickname?: (value: string) => void;
  setNicknameMessage?: (value: string) => void;
  setTel?:  (value: string) => void;
}

export default function ProfileInput({
  title,
  type,
  placeholder,
  name,
  

  email,
  nickname,
  tel,
  emailMessage,
  nicknameMessage,
  setEmail,
  setEmailMessage,
  setNickname,
  setNicknameMessage,
  setTel
}: SignUpInputType) {

  const emailRegex =
    /[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i;

  // 버튼 텍스트
  const authButton = () => {
    switch (title) {
      case "이메일":
      case "별명":
        return "중복 확인";
      case "휴대폰 번호":
        return "휴대폰 인증";
      default:
        return null;
    }
  };

  // 이메일 중복체크
  const checkEmail = async () => {
    if (!email || !setEmailMessage) return;
    const res = await emailCheck(email);

    if (!emailRegex.test(email)) {
      setEmailMessage("아이디는 이메일 형식으로 입력해주세요");
    } else {
      setEmailMessage(res.ok ? "사용가능" : "이미 존재하는 이메일입니다.");
    }
  };

  // 별명 중복체크
  const checkText = async () => {
    if (!nickname || !setNicknameMessage) return;
    const res = await NicknameCheck(nickname);
    setNicknameMessage(res.ok ? "사용가능" : "이미 존재하는 별명입니다.");
  };

  // input value 처리
  const getValue = () => {
    switch (title) {
      case "이메일":
        return email;
      case "별명":
        return nickname;
      case "휴대폰 번호":
        return tel;
      default:
        return "";
    }
  };

  const handleChange = (value: string) => {
    switch (title) {
      case "이메일":
        setEmail?.(value);
        break;
      case "별명":
        setNickname?.(value);
        break;
      case "휴대폰 번호":
        setTel?.(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="mb-6 h-20">
      <label htmlFor={title}>
        {title}
        <span className="text-poten-red">*</span>
      </label>

      <div className="md:flex justify-between">
        <input
          name={name}
          id={title}
          type={type}
          placeholder={placeholder}
          value={getValue()}
          onChange={(e) => handleChange(e.target.value)}
          className="block bg-poten-inputgray rounded-lg p-3 w-full md:basis-4/5 flex-grow"
        />

        <button
          type="button"
          onClick={
            title === "이메일"
              ? checkEmail
              : title === "별명"
              ? checkText
              : undefined
          }
          className="float-right my-2 md:my-0 bg-poten-gray3 text-white font-bold whitespace-nowrap p-3 border-none rounded-lg ml-6 md:basis-1/5"
        >
          {authButton()}
        </button>

      </div>

      {/* 메시지 출력 */}
      {title === "이메일" && emailMessage && (
        <p
          className={`font-bold ${
            emailMessage === "사용가능"
              ? "text-poten-safegreen"
              : "text-poten-error-color"
          }`}
        >
          {emailMessage}
        </p>
      )}

      {title === "별명" && nicknameMessage && (
        <p
          className={`font-bold ${
            nicknameMessage === "사용가능"
              ? "text-poten-safegreen"
              : "text-poten-error-color"
          }`}
        >
          {nicknameMessage}
        </p>
      )}
    </div>
  );
}
