import CommentButton from "@/app/components/buttons/comment-button";
import CommentList from "@/app/components/lists/comment-list";
import HashTag from "@/app/components/tags/hash-tag";
import { Fragment } from "react";
import { FaChevronLeft } from "react-icons/fa";

export default () => {
  const post = {
    id: "1",
    category: "string",
    created_time: "string",
    title: "임시 제목입니다.",
    text: "임시 내용입니다.",
    file: "string",
    hashtag: ["string", "tag"],
    comment: [
      {
        nickname: "string",
        comment_text: "임시 댓글1 입니다.",
        created_time: "string"
      },
      {
        nickname: "string",
        comment_text: "임시 댓글2 입니다.",
        created_time: "string"
      },
      {
        nickname: "string",
        comment_text: "임시 댓글1 입니다.",
        created_time: "string"
      },
      {
        nickname: "string",
        comment_text: "임시 댓글2 입니다.",
        created_time: "string"
      }
    ],
    view_count: "string",
    user_id: "string",
    nickname: "string"
  };

  return (
    <div className="py-[100px] w-[1144px] mx-auto flex flex-col justify-center">
      <header className="mb-11 flex flex-col">
        <div className="flex gap-x-4 mb-[20px]">
          <FaChevronLeft className="relative top-[15px]" />
          <h1 className="text-[32px] font-bold">{post?.title}</h1>
        </div>
        <div className="flex align-center gap-x-2 text-base h-[27px] p-1">
          <div>{post?.nickname}</div>
          <div className="border-x-[1px] border-gray-200 px-2">
            지난 시간 pastTime
          </div>
          <div>{`조회수 ${post?.view_count}`}</div>
        </div>
      </header>
      <main>
        <section className="mb-4">
          <p className="min-h-[420px] w-[1140px] text-xl break-all">
            {post?.text}
          </p>
        </section>
        <section className="flex py-5 gap-x-4 ">
          <h2 className="text-xl font-normal text-main-orange">첨부된 파일</h2>
          <div className="font-bold text-xl">{post?.file}</div>
        </section>
        <section className="my-4">
          <div className="flex space-x-3">
            {post?.hashtag?.map((hashtag: string) => (
              <Fragment key="1">
                <HashTag>{hashtag}</HashTag>
              </Fragment>
            ))}
          </div>
        </section>
        <section className="flex gap-x-4 py-[32px] mb-2">
          <textarea className="w-[977px] h-[55px] p-3 border rounded mb-2 text-xl"></textarea>
          <CommentButton />
        </section>
        <section className="">
          <CommentList comments={post?.comment} />
        </section>
      </main>
    </div>
  );
};
