"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import Button from "../buttons/default-button";

export default () => {
  const {category} = useParams()

  return (
    <nav 
      className={"flex gap-x-3 justify-center mt-14 mb-8"}
    >
      <Link 
        href="/post/free"
      >
        <Button 
          color={category === "free" ? "orange" : "grey"} 
          size="sm"
        >
          자유 게시판
        </Button>
      </Link>
      <Link 
        href="/post/question"
      >
        <Button 
          color={category === "question" ? "orange" : "grey"}
          size="sm"
        >
          질문 게시판
        </Button>
      </Link>
      <Link 
        href="/post/etc"
      >
        <Button 
          color={category === "etc" ? "orange" : "grey"} 
          size="sm"
        >
          기타 게시판
        </Button>
      </Link>
    </nav>
  );
};
