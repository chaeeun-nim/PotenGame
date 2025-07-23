import { JSX } from "react";

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
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value) || min;
    onChange(Math.min(max, Math.max(min, newValue)));
  };

  const handleIncrement = () => {
    onChange(Math.min(max, value + 1));
  };

  const handleDecrement = () => {
    onChange(Math.max(min, value - 1));
  };

  return (
    <div className={`flex items-center ${className}`}>
      <input
        name="구매 갯수"
        id="purchase number"
        type="number"
        value={value}
        onChange={handleInputChange}
        min={min}
        max={max}
        className="border border-poten-gray-2 rounded-xs w-[52px] h-[22px] md:w-[71px] md:h-[30px] px-2 md:px-3 mr-1 text-left text-xs md:text-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
      />
      <div className="flex flex-col rounded-r-xs">
        <button
          type="button"
          onClick={handleIncrement}
          disabled={value >= max}
          className="w-[21px] h-[9px] md:w-[29px] md:h-[12px] mb-0.5 flex items-center justify-center bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border-poten-gray-2"
        >
          <span className="text-[8px] text-poten-gray3 font-bold">▲</span>
        </button>
        <button
          type="button"
          onClick={handleDecrement}
          disabled={value <= min}
          className="w-[21px] h-[9px] md:w-[29px] md:h-[12px] flex items-center justify-center bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <span className="text-[8px] text-poten-gray3 font-bold">▼</span>
        </button>
      </div>
    </div>
  );
}

export default ItemNumSpinner