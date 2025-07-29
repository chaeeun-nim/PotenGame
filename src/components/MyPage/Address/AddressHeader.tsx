'use client';

type Props = {
  textSize?: string;
  barHeight?: string;
};

export default function AddressHeader({ textSize = '18px', barHeight = '23px' }: Props) {
  return (
    <>
      <div className="flex items-end gap-2 mb-4">
        <div
          className="bg-[var(--color-poten-red)] rounded-sm"
          style={{ width: '4px', height: barHeight }}
        />
        <h2 className="font-semibold text-black" style={{ fontSize: textSize }}>
          배송 주소록
        </h2>
      </div>
      <div className="w-full border-t border-[var(--color-poten-gray-2)] mb-6" />
    </>
  );
}
