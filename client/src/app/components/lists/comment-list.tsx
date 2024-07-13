import Comment from "@/app/components/list-items/comment-list-item";
import { Fragment } from "react/jsx-runtime";

type props = {
  comments: Comment[];
};

export default ({ comments }: props) => {
  return (
    <>
      {comments?.map((comment, idx) => (
        <Fragment 
          key={idx}
        >
          <Comment 
            comment={comment} 
          />
        </Fragment>
      ))}
    </>
  );
};
