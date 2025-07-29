import { emailCheck } from "@/data/functions/emailCheck";
import { NameCheck } from "@/data/functions/nicknameCheck";
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
    if(res.ok){
      console.log('가능한 이메일입니다.');
    }else{
      console.log('중복된 이메일입니다.');
    }
  }

  // 별명 중복 체크
  const checkText = async (name: string) => {
    const res = await NameCheck(name);
    if(res.ok){
      console.log('가능한 별명입니다.');
    }else{
      console.log('중복된 별명입니다.');
    }
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
            value={type === "email"? email: type === "text"? name : undefined}
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
      </div>
  );
}