'use client';

export default function MainBestBtnActive({
  children,
  active,
  onClick,
}: {
  children: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <>
      {active ? (
        <button
          onClick={onClick}
          disabled
          className="text-[18px] md:text-[24px] font-extrabold text-white bg-poten-gray3 text-center py-2 md:py-3"
          type="button">
          {children}
        </button>
      ) : (
        <button
          className="text-[18px] md:text-[24px] font-extrabold text-poten-gray3 bg-poten-gray-1 text-center py-2 md:py-3"
          onClick={onClick}
          type="button">
          {children}
        </button>
      )}
    </>
  );
}
