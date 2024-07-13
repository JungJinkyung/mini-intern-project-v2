"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../common/Button";

export default () => {
  const path = usePathname();

  const category = path?.split("/")[2];

  return (
    <nav 
      className="flex gap-x-3 justify-center mt-14 mb-8"
    >
      <Link href="/home/free">
        <Button color={category === "free" ? "orange" : "grey"} size="sm">
          자유 게시판
        </Button>
      </Link>
      <Link href="/home/question">
        <Button color={category === "question" ? "orange" : "grey"} size="sm">
          질문 게시판
        </Button>
      </Link>
      <Link href="/home/etc">
        <Button color={category === "etc" ? "orange" : "grey"} size="sm">
          기타 게시판
        </Button>
      </Link>
    </nav>
  );
};
