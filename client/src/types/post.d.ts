export {};

declare global {
  interface Post {
    id: string;
    category: string;
    created_time: string;
    title: string;
    content: string;
    file: string;
    hashtag: string;
    comments?: any[];
    view_count: string;
    user_id: string;
    nickname: string;
  }
}
