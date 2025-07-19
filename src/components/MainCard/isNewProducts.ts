export function isNewProducts(releaseDate: string): boolean {
  const today = new Date();
  const release = new Date(releaseDate);

  // 오늘로부터 180일 이내에 나왔으면 참 아니면 거짓
  if (today.getTime() - release.getTime() < 6 * 30 * 24 * 60 * 60 * 1000) {
    return true;
  } else {
    return false;
  }
}
