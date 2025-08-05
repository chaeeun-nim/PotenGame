import { emailCheck } from "@/data/functions/emailCheck";
import { NicknameCheck } from "@/data/functions/nicknameCheck";
import { useState } from "react";


interface ProfileInputType {
  title: string;
  type: string
  name: string;
}

export default function ProfileInput({title, type, name}: ProfileInputType) {

  const [ value, setValue ] = useState('');
  const [ canUse, setCanUse ] = useState(false);

  const DupCheck = async () =>{
    switch(name){
      case "nickname":
        const nickname = await NicknameCheck(value);
        if(nickname.ok) setCanUse(true)
        break;
      case "email":
        const email = await emailCheck(value);
        if(email.ok) setCanUse(true)
        break;
      default: return null;
    }
  }

  return (
    <div>
      {/* 인풋창 */}
        <div className="mb-4">
          <label className="text-sm font-semibold mb-1 block">
            {title}<span className="text-red-500">*</span>
          </label>
          <div className="flex gap-4">
            <input
              type={type}
              value={value}
              onChange={ e => setValue(e.target.value)}
              className="flex-1 h-[50px] bg-[#f1f4f6] px-4 rounded text-sm text-black"
            />
            <button 
              className="w-[180px] h-[50px] bg-poten-gray3 text-white rounded"
              onClick={() => DupCheck()}
              >
              { name === 'phone'? "휴대폰 인증" : "중복확인"}
            </button>
          </div>
        </div>

        {/* 확인 메세지 */}
        <div className="flex items-center gap-2 mb-4 ml-1">
          { canUse ? 
          <>
            <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-[10px] text-white">
              ✔
            </div>
            <span className="text-sm text-green-600 font-medium">사용가능</span>
          </>
          :
          <>
            <div className="w-4 h-4 rounded-full bg-orange-400 flex items-center justify-center text-white text-[10px] font-bold">
              !
            </div>
            <span className="text-sm text-orange-500 font-medium">사용불가</span>
          </>
          }
        </div>
    </div>
  );
}
