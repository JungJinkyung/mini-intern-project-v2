import Link from "next/link";

type props = {
  [key: string]: string;
};

export default function PostListItem({
  no,
  title,
  id,
  nickname,
  createdAt,
  viewCount
}: props) {
  // let date = formatIsoDate(createdAt)
  const date = "2024.07.02";

  let num = Number(no) + 1;

  return (
    <Link href={`/post/detail/${id}`}>
      <div className="flex items-center w-[1144px] h-[51px] border-b-[1px] border-b-gray-200 hover:bg-gray-50">
        <div className="w-[62px] text-center">{num}</div>
        <div className="w-[602px] text-center">{title}</div>
        <div className="w-[160px] text-center">{nickname}</div>
        <div className="w-[160px] text-center">{date}</div>
        <div className="w-[160px] text-center">{viewCount}</div>
      </div>
    </Link>
  );
}
