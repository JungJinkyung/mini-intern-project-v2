"use client";

import Button from "@/app/components/common/Button";
import { useState } from "react";
import styles from "./page.module.css";

export default () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [hashtag, setHashtag] = useState("");

  const handleCreatePost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(title, content, hashtag);

    try {
      /* 로그인 api 처리 로직... */
    } catch (error) {
      alert("회원가입에 실패했습니다!");
    }
  };

  return (
    <div className="h-[921px] flex flex-col justify-center items-center">
      <h1 className="text-gray-800 text-[32px] font-bold mt-16 mb-10">
        게시글 작성
      </h1>
      <form
        className="flex flex-col gap-y-4 text-xl"
        onSubmit={handleCreatePost}>
        <div className="flex items-center gap-x-2">
          <h2 className={`${styles.title}`}>제목</h2>
          <input
            className={`${styles["title-input"]}`}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력해주세요."
          />
        </div>
        <div className="flex gap-x-2">
          <h2 className={`${styles.title} pt-3`}>내용</h2>
          <textarea
            className={`${styles.textarea}`}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력해주세요."
          />
        </div>
        <div className="flex items-center gap-x-2">
          <h2 className={`${styles.title}`}>파일 첨부</h2>
          <input
            /* ref={fileInputRef} */
            className="hidden"
            type="file"
            /* onChange={handleFile} */
          />
          <div
            className={`${styles["file-container"]}`}
            /* onClick={handleFileButtonClick} */
          >
            {/* {file ?? "임시 파일"} */}
            아직 사용 불가
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <h2 className="text-xl font-bold w-[140px]">해시태그</h2>
          <input
            className={`${styles["hashtag"]}`}
            placeholder="# 을 붙여주세요!  ex) #해시 #태그 #게시글 #작성"
            onChange={(e) => setHashtag(e.target.value)}
          />
        </div>
        <Button color="black" size="lg" className="relative m-auto my-10">
          게시글 작성
        </Button>
      </form>
    </div>
  );
};
