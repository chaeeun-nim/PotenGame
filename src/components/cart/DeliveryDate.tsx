'use client';
// 배송날짜를 제작하는 함수
export default function DeliveryDate() {
  const today = new Date();
  const todayMonth = today.getMonth() + 1;
  const todayDate = today.getDate() + 3;
  const weekDay = today.getDay() + 3 >= 7 ? today.getDay() + 5 - 7 : today.getDay() + 3;
  const whatDay = ['일', '월', '화', '수', '목', '금', '토'];
  const formatDate = `0${todayMonth}.${todayDate} (${whatDay[weekDay]})`;
  return <>{formatDate} 이내 발송 예정</>;
}
