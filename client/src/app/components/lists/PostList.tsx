import { Post } from "@/types/post";
import { Fragment } from "react/jsx-runtime";
import PostListItem from "../listItems/PostListItem";

type props = {
  posts: Post[];
  className: string;
};

export default function PostList({ posts, className = "" }: props) {
  return (
    <div className={`${className}`}>
      <div className="flex items-center w-[1144px] h-[51px] font-bold text-center border-b-[1px] border-b-[#E1E1E1] border-t-[2px] border-t-[#000000]">
        <div className="w-[62px]">No</div>
        <div className="w-[602px]">제목</div>
        <div className="w-[160px]">글쓴이</div>
        <div className="w-[160px]">작성기간</div>
        <div className="w-[160px]">조회수</div>
      </div>

      <div>
        {posts?.map((post, idx) => {
          return (
            <Fragment key={post.id}>
              <PostListItem
                id={post.id}
                no={String(idx)}
                title={post.title}
                nickname={post.nickname}
                createdAt={post.createdAt}
                viewCount={post.viewCount}
              />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}