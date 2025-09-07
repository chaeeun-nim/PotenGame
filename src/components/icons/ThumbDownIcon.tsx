// src/components/icons/ThumbDownIcon.tsx
interface ThumbDownIconProps {
  filled?: boolean;
  className?: string;
  size?: number;
}

export default function ThumbDownIcon({
  filled = false,
  className = '',
  size = 25,
}: ThumbDownIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={`transition-all duration-200 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd">
      {filled ? (
        // 채워진 상태: 하나의 통합된 path 사용
        <path
          d="M15.65 6.5H18.5C19.0523 6.5 19.5 6.94772 19.5 7.5V12.5C19.5 13.0523 19.0523 13.5 18.5 13.5H15.5V12.5L13.6056 16.2889C13.5361 16.4277 13.5 16.5808 13.5 16.7361V18.5C13.5 19.0523 13.0523 19.5 12.5 19.5C11.3954 19.5 10.5 18.6046 10.5 17.5V13.5H6.5028C5.83629 13.5 5.35632 12.8603 5.54269 12.2204L7.29019 6.22037C7.41451 5.79352 7.80571 5.5 8.2503 5.5H12.0858C12.351 5.5 12.6054 5.60536 12.7929 5.79289L13.2071 6.20711C13.3946 6.39464 13.649 6.5 13.9142 6.5H15.5V6.65C15.5 6.56716 15.5672 6.5 15.65 6.5Z"
          fill="#33363F"
          stroke="#33363F"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        // 비어있는 상태: 개별 path들
        <>
          <path
            d="M15.65 6.5L18.5 6.5C19.0523 6.5 19.5 6.94772 19.5 7.5L19.5 12.5C19.5 13.0523 19.0523 13.5 18.5 13.5L15.65 13.5C15.5672 13.5 15.5 13.4328 15.5 13.35L15.5 6.65C15.5 6.56716 15.5672 6.5 15.65 6.5Z"
            fill="none"
            stroke="#33363F"
            strokeLinecap="round"
          />
          <path
            d="M15.5 12.5L13.6056 16.2889C13.5361 16.4277 13.5 16.5808 13.5 16.7361L13.5 18.5C13.5 19.0523 13.0523 19.5 12.5 19.5V19.5C11.3954 19.5 10.5 18.6046 10.5 17.5L10.5 13.5"
            fill="none"
            stroke="#33363F"
            strokeLinecap="round"
          />
          <path
            d="M12.5 13.5L6.5028 13.5C5.83629 13.5 5.35632 12.8603 5.54269 12.2204L7.29019 6.22037C7.41451 5.79352 7.80571 5.5 8.2503 5.5L12.0858 5.5C12.351 5.5 12.6054 5.60536 12.7929 5.79289L13.2071 6.20711C13.3946 6.39464 13.649 6.5 13.9142 6.5L15.5 6.5"
            fill="none"
            stroke="#33363F"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}
