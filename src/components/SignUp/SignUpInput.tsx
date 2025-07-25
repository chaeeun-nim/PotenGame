interface SignUpInputType{
  type: "email" | "password" | "tel" | "text"
  title:string;
  placeholder: string;
}

export default function SignUpInput({title, type, placeholder}: SignUpInputType){

  const authButton = () => {
    switch(type){
      case 'email':
        return "이메일 인증"
        break;
      case 'tel':
        return "휴대폰 인증"
        break;
      case 'text':
        return "중복 확인"
        break;
    }
  }

  return(
      <div className="mb-6 w-150 h-20">
        <label htmlFor={type}>
          {title}
          <span className="text-poten-red">*</span>
        </label>
        <div className="flex justify-between">
          <input 
            id={type} 
            type={type} 
            placeholder={placeholder}
            className="bg-poten-inputgray rounded-lg px-3"
            />
          {type !== 'password' && 
            <button 
              className="bg-poten-gray3 text-white font-bold p-3 border-none rounded-lg ml-6">
              { authButton() }
            </button>
          }
        </div>
      </div>
  );
}