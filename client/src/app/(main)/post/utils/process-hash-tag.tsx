export const processHashtag = (hashtag: string): string[] => {
  // '#'로 분할하고 각 부분을 trim()한 다음 빈 문자열이 아닌 부분만 필터링
  const parts = hashtag
    .split("#")
    .map((part) => part.trim())
    .filter((part) => part !== "");

  return parts;
};
