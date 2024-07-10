"use client";

import Button from "@/app/components/common/Button";
import PostList from "@/app/components/lists/post-list";
import BoardSelectorTab from "@/app/components/tabs/board-selector-tab";
import { useAuth } from "@/contexts";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default () => {
  const [posts, setPosts] = useState([]);

  const category = usePathname().split("/")[2];
  const router = useRouter();

  const { isLoggedIn } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:8080/posts/${category}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        return res.json();
      })
      .then((data) => {
        setPosts(data);
      });
  }, []);

  const handleCreatePostButton = () => {
    if (isLoggedIn) {
      router.push(`/post/create/${category}`);
    } else {
      alert("✅ 로그인이 필요한 서비스 입니다!");
    }
  };

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

            <Button
              color="black"
              size="base"
              className="relative top-6 left-[1020px]"
              onClick={handleCreatePostButton}>
              글쓰기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
