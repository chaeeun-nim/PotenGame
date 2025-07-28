'use client';

import AddressList from '@/components/MyPage/Address/AddressList';
import MobileMyPageNav from '@/components/MyPage/MobileMyPageNav';

export default function AddressPage() {
  return (
    <>
      {/* 모바일 전용 버튼 그룹 */}
      <MobileMyPageNav />

      {/* 주소록 콘텐츠 */}
      <AddressList />
    </>
  );
}
