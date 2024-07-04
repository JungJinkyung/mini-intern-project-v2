type props = {
  comment: Comment;
};

export default ({ comment }: props) => {
  return (
    <div className="flex flex-col gap-y-4 justify-center h-[240px] border-t-[1px] border-t-[#E1E1E1]">
      <div className="text-xl font-bold">{comment.nickname}</div>
      <p className="text-xl">{comment.comment_text}</p>
      <div className="text-gray-400">{comment.created_time}</div>
    </div>
  );
};
