// 출시일 날짜 포맷팅 함수

export function DateFormat(releaseDate: string): string {
  const release = new Date(releaseDate);
  const Year = release.getFullYear().toString();
  const Month = release.getMonth().toString().padStart(2, '0');
  const Day = release.getDay().toString().padStart(2, '0');

  return `${Year.slice(2)}.${Month}.${Day}`;
}
