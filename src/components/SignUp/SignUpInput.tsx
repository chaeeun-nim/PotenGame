import { emailCheck } from "@/data/functions/emailCheck";
import { NicknameCheck } from "@/data/functions/nicknameCheck";

interface SignUpInputType {
  type: string;
  title: string;
  placeholder: string;
  button: boolean;
  name:string;

  password?: string;
  passwordCheck?: string;
  email?: string;
  nickname?: string;
  tel?: string;
  emailMessage?: string;
  nicknameMessage?: string;

  setPassword?: (value: string) => void;
  setPasswordCheck?: (value: string) => void;
  setEmail?: (value: string) => void;
  setEmailMessage?: (value: string) => void;
  setNickname?: (value: string) => void;
  setNicknameMessage?: (value: string) => void;
  setTel?:  (value: string) => void;
}

export default function SignUpInput({
  title,
  type,
  placeholder,
  button,
  name,
  
  password,
  passwordCheck,
  email,
  nickname,
  tel,
  emailMessage,
  nicknameMessage,
  setPassword,
  setPasswordCheck,
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
      case "비밀번호":
        return password;
      case "비밀번호 확인":
        return passwordCheck;
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
      case "비밀번호":
        setPassword?.(value);
        break;
      case "비밀번호 확인":
        setPasswordCheck?.(value);
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
      <label htmlFor={title === "비밀번호 확인" ? "passwordCheck" : type}>
        {title}
        <span className="text-poten-red">*</span>
      </label>

      <div className="md:flex justify-between">
        <input
          name={name === 'passwordCheck'? undefined : name}
          id={title === "비밀번호 확인" ? "passwordCheck" : type}
          type={type}
          placeholder={placeholder}
          value={getValue()}
          onChange={(e) => handleChange(e.target.value)}
          className="block bg-poten-inputgray rounded-lg p-3 w-full md:basis-4/5 flex-grow"
        />

        {button && (
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
        )}
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

      {title === "비밀번호 확인" && passwordCheck && (
        <p
          className={`font-bold ${
            password === passwordCheck
              ? "text-poten-safegreen"
              : "text-poten-error-color"
          }`}
        >
          {password === passwordCheck
            ? "사용가능"
            : "비밀번호가 다릅니다."}
        </p>
      )}

      {title === "비밀번호" && password && password.length<4 &&(
        <p className="font-bold text-poten-error-color">비밀번호는 4자 이상 입력해주세요.</p>
      )}
    </div>
  );
}
