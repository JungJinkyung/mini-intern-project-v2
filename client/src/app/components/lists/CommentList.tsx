import { Comment as commentI } from "@/types/comment";
import { Fragment } from "react/jsx-runtime";
import CommentListItem from "../listItems/CommentListItem";

type props = {
  comments: commentI[];
};

export default function CommentList({ comments }: props) {
  return (
    <>
      {comments?.map((comment, idx) => (
        <Fragment key={idx}>
          <CommentListItem comment={comment} />
        </Fragment>
      ))}
    </>
  );
}
