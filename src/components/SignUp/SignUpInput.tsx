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
            className="block bg-poten-inputgray rounded-lg p-3 w-full
                        md:basis-4/5 flex-grow"
          />

          {type !== 'password' && 
            <button 
              className="float-right my-2 md:my-0 bg-poten-gray3 text-white font-bold whitespace-nowrap p-3 border-none rounded-lg ml-6 
                          md:basis-1/5">
              { authButton() }
            </button>
          }
        </div>
      </div>
  );
}