export const processHashtag = (hashtag: string): string[] => {
  const parts = hashtag.split('#');

  const trimmedParts = parts.map((part) => part.trim());

  return trimmedParts;
};
