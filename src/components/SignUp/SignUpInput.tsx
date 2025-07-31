import { emailCheck } from "@/data/functions/emailCheck";
import { NameCheck } from "@/data/functions/nameCheck";
import { useState } from "react";

interface SignUpInputType{
  type: string;
  title:string;
  placeholder: string;
  button: boolean;
}

export default function SignUpInput({title, type, placeholder, button}: SignUpInputType){

  const [ email, setEmail ] = useState('');
  const [ name, setName ] = useState('');

  const [ emailMessage, setEmailMessage ] = useState('');
  const [ nameMessage, setNameMessage ] = useState('');


  // 이메일 정규식
  const emailRegex = /[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i;

  const authButton = () => {
    switch(type){
      case 'email':
        case 'text':
          return "중복 확인"
          break;
      case 'tel':
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

        <label htmlFor={type}>
          {title}
          <span className="text-poten-red">*</span>
        </label>

        <div className="md:flex justify-between">

          <input 
            id={type} 
            type={type} 
            placeholder={placeholder} 
            value={ type === "email"? email: type === "text"? name : undefined } 
            onChange={(e) => type === "email" ? setEmail(e.target.value) : type === "text"? setName(e.target.value): undefined}
            className="block bg-poten-inputgray rounded-lg p-3 w-full
                        md:basis-4/5 flex-grow"
          />

          {button &&
            <button 
              type="button" 
              onClick={ type === "email" 
                        ? () => checkEmail(email)
                        : type === "text" 
                        ? () => checkText(name)
                        :  undefined}
              className="float-right my-2 md:my-0 bg-poten-gray3 text-white font-bold whitespace-nowrap p-3 border-none rounded-lg ml-6 
                          md:basis-1/5">
              { authButton() }
            </button>
          }

        </div>

          
          <p className={`
            font-bold
            ${ emailMessage || nameMessage === "사용가능" ? 'text-poten-safegreen' : 'text-poten-error-color'}
            `}
          >
          { type === "email" && emailMessage?
            emailMessage
            : type === "text" && nameMessage?
            nameMessage
            : undefined
          }
          </p>

      </div>
  );
}