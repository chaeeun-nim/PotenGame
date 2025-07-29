import { JSX, useEffect, useState } from 'react';

interface ItemNumSpinnerProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  className?: string;
}

function ItemNumSpinner({
  value,
  onChange,
  min = 1,
  max = 99,
  className = '',
}: ItemNumSpinnerProps): JSX.Element {
  // value가 undefined일 때 기본값 사용
  const safeValue = value ?? min;

  // local state로 input 값 관리 (입력 중 임시 값 허용)
  const [inputValue, setInputValue] = useState(safeValue.toString());

  // props value 변경 시 inputValue도 업데이트
  useEffect(() => {
    const newSafeValue = value ?? min;
    setInputValue(newSafeValue.toString());
  }, [value, min]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    setInputValue(rawValue); // 입력값 그대로 표시

    // 숫자로 변환 가능 시 onChange 호출
    const numValue = parseInt(rawValue);
    if (!isNaN(numValue)) {
      const clampedValue = Math.min(max, Math.max(min, numValue));
      onChange(clampedValue);
    }
  };

  const handleInputBlur = () => {
    // 포커스 잃을 시 유효값으로 변경
    const numValue = parseInt(inputValue);
    const currentValue = value ?? min;
    if (isNaN(numValue) || numValue < min || numValue > max) {
      setInputValue(currentValue.toString());
    }
  };

  const handleIncrement = () => {
    const currentValue = value ?? min;
    if (currentValue < max) {
      onChange(currentValue + 1);
    }
  };

  const handleDecrement = () => {
    const currentValue = value ?? min;
    if (currentValue > min) {
      onChange(currentValue - 1);
    }
  };

  return (
    <div className={`flex items-center ${className}`}>
      <input
        name="구매 갯수"
        id="purchase-number"
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        min={min}
        max={max}
        className="border border-poten-gray-2 rounded-xs w-[52px] h-[22px] md:w-[71px] md:h-[30px] px-2 md:px-3 mr-1 text-left text-xs md:text-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
      />
      <div className="flex flex-col rounded-r-xs">
        <button
          type="button"
          onClick={handleIncrement}
          disabled={safeValue >= max}
          className="w-[21px] h-[9px] md:w-[29px] md:h-[12px] mb-0.5 flex items-center justify-center bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border-poten-gray-2 rounded-t-sm">
          <span className="text-[8px] text-poten-gray3 font-bold">▲</span>
        </button>
        <button
          type="button"
          onClick={handleDecrement}
          disabled={safeValue <= min}
          className="w-[21px] h-[9px] md:w-[29px] md:h-[12px] flex items-center justify-center bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors rounded-b-sm">
          <span className="text-[8px] text-poten-gray3 font-bold">▼</span>
        </button>
      </div>
    </div>
  );
}

export default ItemNumSpinner;
