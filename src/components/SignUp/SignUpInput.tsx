import { emailCheck } from "@/data/functions/emailCheck";
import { NameCheck } from "@/data/functions/nameCheck";
import { useState } from "react";

interface SignUpInputType{
  type: string;
  title:string;
  placeholder: string;
  button: boolean;
  password?: string
  passwordCheck?: string
  setPassword?: (password: string) => void;
  setPasswordCheck?: (passwordCheck: string) => void;
}

export default function SignUpInput({title, type, placeholder, button, password, passwordCheck, setPassword, setPasswordCheck}: SignUpInputType){

  const [ email, setEmail ] = useState('');
  const [ name, setName ] = useState('');
  

  const [ emailMessage, setEmailMessage ] = useState('');
  const [ nameMessage, setNameMessage ] = useState('');


  // 이메일 정규식
  const emailRegex = /[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i;

  const authButton = () => {
    switch(title){
      case '이메일':
        case '별명':
          return "중복 확인"
          break;
      case '휴대폰 번호':
        return "휴대폰 인증"
        break;
    }
  }


  // 이메일 중복 체크
  const checkEmail = async (email: string) => {
    const res = await emailCheck(email);

    if(!emailRegex.test(email))
      setEmailMessage("아이디는 이메일 형식으로 입력해주세요");
    else{
      if(!res.ok)
        setEmailMessage("이미 존재하는 이메일입니다.");
      else setEmailMessage("사용가능");
    }
  }
    

  // 별명 중복 체크
  const checkText = async (name: string) => {
    const res = await NameCheck(name);

    if(!res.ok) 
      setNameMessage("이미 존재하는 별명입니다.");
    else setNameMessage("사용가능");
  }
    

  return(
      <div className="mb-6 h-20 ">

        <label htmlFor={title === "비밀번호 확인"? "passwordCheck" : type}>
          {title}
          <span className="text-poten-red">*</span>
        </label>

        <div className="md:flex justify-between">

          <input 
            id={title === "비밀번호 확인"? "passwordCheck" : type} 
            type={type} 
            placeholder={placeholder} 
            value={ title === "이메일"? email
              : title === "별명"? name 
              : title === "비밀번호"? password 
              : title === "비밀번호 확인"? passwordCheck 
              : undefined } 
            onChange={(e) => title === "이메일" ? setEmail(e.target.value) 
              : title === "별명"? setName(e.target.value)
              : title === "비밀번호"? setPassword && setPassword(e.target.value)
              : title === "비밀번호 확인"? setPasswordCheck && setPasswordCheck(e.target.value)
              : undefined}
            className="block bg-poten-inputgray rounded-lg p-3 w-full
                        md:basis-4/5 flex-grow"
          />

          {/* 중복확인 버튼 */}
          {button &&
            <button 
              type="button" 
              onClick={ title === "이메일" 
                        ? () => checkEmail(email)
                        : title === "별명" 
                        ? () => checkText(name)
                        :  undefined}
              className="float-right my-2 md:my-0 bg-poten-gray3 text-white font-bold whitespace-nowrap p-3 border-none rounded-lg ml-6 
                          md:basis-1/5">
              { authButton() }
            </button>
          }

        </div>

          {/* 중복확인 여부 표시 (이메일, 별명)*/}
          <p className={`
            font-bold
            ${ title === "이메일" &&  emailMessage === "사용가능" ? 'text-poten-safegreen' : 'text-poten-error-color'}
            ${ title === "별명" &&  nameMessage === "사용가능" ? 'text-poten-safegreen' : 'text-poten-error-color'}
            `}
          >
          { title === "이메일" && emailMessage?
            emailMessage
            : title === "별명" && nameMessage?
            nameMessage
            : undefined
          }
          </p>

          {/* 비밀번호 확인 */}
          { title === "비밀번호 확인" && passwordCheck &&
            <p className={`
              font-bold
              ${ password ===  passwordCheck ? 'text-poten-safegreen' : 'text-poten-error-color'}
              `}
            >
            { password === passwordCheck ? "사용가능" : "비밀번호가 다릅니다."}
            </p>
          }
        
      </div>
  );

}