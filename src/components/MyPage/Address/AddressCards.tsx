'use client';

type Address = {
  id: number;
  label: string;
  address: string;
  zip: string;
  phone: string;
  isDefault: boolean;
  isSelected: boolean;
};

type Props = {
  addresses: Address[];
  size: 'lg' | 'md' | 'sm';
};

export default function AddressCards({ addresses, size }: Props) {
  const text = {
    lg: ['16px', '14px', '13px'],
    md: ['15px', '13px', '12px'],
    sm: ['14px', '12px', '11px'],
  }[size];

  const buttonPad = {
    lg: 'px-4 py-1',
    md: 'px-3 py-[2px]',
    sm: 'px-2 py-[2px]',
  }[size];

  const radius = {
    lg: 'rounded-[2px]',
    md: 'rounded-[2px]',
    sm: 'rounded-[1px]',
  }[size];

  return (
    <>
      {addresses.map((addr) => (
        <div
          key={addr.id}
          className={`border border-[var(--color-poten-gray-1)] bg-[var(--color-poten-snowgray1)] p-4 mb-4 ${radius}`}
        >
          <div className="flex justify-between mb-2">
            <div className="flex items-center gap-2">
              <p className="font-semibold" style={{ fontSize: text[0] }}>{addr.label}</p>
              {addr.isDefault && (
                <span
                  className="px-2 py-[2px] rounded-full bg-[var(--color-poten-red)] text-white font-medium"
                  style={{ fontSize: text[2] }}
                >
                  기본배송지
                </span>
              )}
            </div>
            {addr.isSelected && (
              <p className="font-semibold text-[var(--color-poten-red)]" style={{ fontSize: text[1] }}>
                ✔ 선택됨
              </p>
            )}
          </div>
          <p className="text-black" style={{ fontSize: text[1] }}>{addr.address}</p>
          <p className="text-gray-400" style={{ fontSize: text[2] }}>({addr.zip})</p>
          <p className="text-gray-400" style={{ fontSize: text[2] }}>수취인 {addr.phone}</p>

          {/* 버튼 영역 */}
          <div className={`flex ${size === 'sm' ? 'justify-start' : 'justify-end'} gap-2 mt-3`}>
            <button className={`border text-sm text-gray-500 border-poten-gray-1 ${buttonPad} ${radius}`}>삭제</button>
            <button className={`border text-sm text-gray-500 border-poten-black ${buttonPad} ${radius}`}>수정</button>
            {!addr.isDefault && (
              <button className={`border text-sm text-[var(--color-poten-red)] border-[var(--color-poten-red)] ${buttonPad} ${radius}`}>
                기본배송지로 변경
              </button>
            )}
          </div>
        </div>
      ))}

      {/* 등록 버튼 */}
      <div className="flex justify-center md:justify-end mt-6">
        <button className="w-full md:w-auto bg-[var(--color-poten-red)] text-white font-semibold rounded-sm py-3 px-6 text-[14px]">
          신규 배송지 등록하기
        </button>
      </div>
    </>
  );
}
