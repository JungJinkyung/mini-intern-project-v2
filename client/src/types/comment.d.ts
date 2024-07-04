export {};

declare global {
  interface Comment {
    nickname: string | any;
    comment_text: string | any;
    created_time: string | any;
  }
}
