import Button from "@/app/components/common/Button";
import PostList from "@/app/components/lists/PostList";
import BoardSelectorTab from "@/app/components/tabs/BoardSelectorTab";
import Link from "next/link";

export default () => {
  const posts = [
    {
      id: "1",
      category: "string",
      createdAt: "string",
      title: "string",
      text: "string",
      file: "string",
      hashtag: ["string"],
      comment: ["Comment"],
      viewCount: "string",
      userId: "string",
      nickname: "string"
    },
    {
      id: "1",
      category: "string",
      createdAt: "string",
      title: "string",
      text: "string",
      file: "string",
      hashtag: ["string"],
      comment: ["Comment"],
      viewCount: "string",
      userId: "string",
      nickname: "string"
    },
    {
      id: "1",
      category: "string",
      createdAt: "string",
      title: "string",
      text: "string",
      file: "string",
      hashtag: ["string"],
      comment: ["Comment"],
      viewCount: "string",
      userId: "string",
      nickname: "string"
    },
    {
      id: "1",
      category: "string",
      createdAt: "string",
      title: "string",
      text: "string",
      file: "string",
      hashtag: ["string"],
      comment: ["Comment"],
      viewCount: "string",
      userId: "string",
      nickname: "string"
    },
    {
      id: "1",
      category: "string",
      createdAt: "string",
      title: "string",
      text: "string",
      file: "string",
      hashtag: ["string"],
      comment: ["Comment"],
      viewCount: "string",
      userId: "string",
      nickname: "string"
    },
    {
      id: "1",
      category: "string",
      createdAt: "string",
      title: "string",
      text: "string",
      file: "string",
      hashtag: ["string"],
      comment: ["Comment"],
      viewCount: "string",
      userId: "string",
      nickname: "string"
    },
    {
      id: "1",
      category: "string",
      createdAt: "string",
      title: "string",
      text: "string",
      file: "string",
      hashtag: ["string"],
      comment: ["Comment"],
      viewCount: "string",
      userId: "string",
      nickname: "string"
    },
    {
      id: "1",
      category: "string",
      createdAt: "string",
      title: "string",
      text: "string",
      file: "string",
      hashtag: ["string"],
      comment: ["Comment"],
      viewCount: "string",
      userId: "string",
      nickname: "string"
    },
    {
      id: "1",
      category: "string",
      createdAt: "string",
      title: "string",
      text: "string",
      file: "string",
      hashtag: ["string"],
      comment: ["Comment"],
      viewCount: "string",
      userId: "string",
      nickname: "string"
    },
    {
      id: "1",
      category: "string",
      createdAt: "string",
      title: "string",
      text: "string",
      file: "string",
      hashtag: ["string"],
      comment: ["Comment"],
      viewCount: "string",
      userId: "string",
      nickname: "string"
    }
  ];

  return (
    <div className="min-h-[1069px] flex flex-col justify-center items-center">
      <div>
        <h3 className="text-red-MAIN text-[20px] font-bold text-center">
          board
        </h3>
        <h1 className="text-[32px] font-bold my-3">자유 게시판</h1>
      </div>
      <div>
        <BoardSelectorTab />
        <div>
          <div className="h-[600px]">
            <PostList posts={posts} className="mt-10" />
            <Link
              href={`/post/create`}
              /* onClick={handlePostCreateButtonClick} */
            >
              <Button
                color="black"
                size="base"
                className="relative top-6 left-[1020px]">
                글쓰기
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
