export {};

declare global {
  interface Comment {
    nickname: string;
    content: string;
    created_time: string;
  }
}
