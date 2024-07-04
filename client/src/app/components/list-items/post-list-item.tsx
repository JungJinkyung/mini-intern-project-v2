import Link from "next/link";

type props = {
  [key: string]: string;
};

export default ({
  no,
  title,
  id,
  nickname,
  created_time,
  view_count
}: props) => {
  // let date = formatIsoDate(created_time)
  const date = "2024.07.02";

  let num = Number(no) + 1;

  return (
    <Link href={`/post/detail/${id}`}>
      <div className="flex items-center w-[1144px] h-[51px] border-b-[1px] border-b-gray-200 hover:bg-gray-50">
        <div className="w-[62px] text-center">{num}</div>
        <div className="w-[602px] text-center">{title}</div>
        <div className="w-[160px] text-center">{nickname}</div>
        <div className="w-[160px] text-center">{date}</div>
        <div className="w-[160px] text-center">{view_count}</div>
      </div>
    </Link>
  );
};
