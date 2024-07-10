interface Props {
  handleAddComment: () => void;
}

export default ({ handleAddComment }: Props) => {
  return (
    <button
      className="w-[142px] h-[55px] bg-black text-white text-lg rounded hover:bg-gray-600"
      onClick={handleAddComment}>
      댓글작성
    </button>
  );
};
