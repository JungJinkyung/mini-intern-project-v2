export {};

declare global {
  interface Post {
    id: string;
    category: string;
    created_time: string;
    title: string;
    text: string;
    file: string;
    hashtag: string[];
    comment?: any[];
    view_count: string;
    user_id: string;
    nickname: string;
  }
}
