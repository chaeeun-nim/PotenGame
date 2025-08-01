"use client";

import checked from '@/assets/icons/checked.svg';
import unchecked from '@/assets/icons/unchecked.svg';
import Image from 'next/image';

interface SignUpCheckboxType{
  id: number;
  title: string;
  isChecked: boolean;
  onToggle: (id: number) => void;
}

export default function SignUpCheckbox({id, title, isChecked, onToggle}: SignUpCheckboxType){

  return(
     <div>
      <input
        id={`check-${id}`}
        type="checkbox"
        className="hidden"
        checked={isChecked}
        onChange={() => onToggle(id)}
      />
      <label
        htmlFor={`check-${id}`}
        className="inline-block w-4 h-4 cursor-pointer mx-1">
        <Image src={isChecked ? checked : unchecked} alt="로그인 상태 유지" />
      </label>
      <span>[필수]{title}</span>
    </div>
  );
}