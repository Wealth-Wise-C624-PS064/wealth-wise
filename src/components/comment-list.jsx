import PropTypes from "prop-types";
import Comment from "./comment";

export default function CommentList({ comments }) {
  return (
    <div className="grid grid-cols-1 gap-3">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.array,
};
