interface SignUpInputType{
  type: string;
  title:string;
  placeholder: string;
  button: boolean;
}

export default function SignUpInput({title, type, placeholder, button}: SignUpInputType){

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

  // const emailRegex = /[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i;

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

          {button &&
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