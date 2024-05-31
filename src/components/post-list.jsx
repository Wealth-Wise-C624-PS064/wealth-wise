import PropTypes from "prop-types";

import Post from "./post";

export default function PostList({ posts }) {
  return (
    <div className="grid grid-cols-1 gap-3">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.array,
};
