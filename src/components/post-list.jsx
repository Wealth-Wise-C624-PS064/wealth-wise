import PropTypes from "prop-types";

import Post from "./post";

export default function PostList({ posts }) {
  return (
    <div className="grid order-1 grid-cols-1 col-span-2 gap-3 md:order-0">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.array,
};
