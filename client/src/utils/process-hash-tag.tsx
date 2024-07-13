export const processHashtag = (hashtag: string): string[] => {
  const parts = hashtag
    .split('#')
    .map((part) => part.trim())
    .filter((part) => part !== '');

  return parts;
};