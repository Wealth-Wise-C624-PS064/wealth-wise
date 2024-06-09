import PropTypes from "prop-types";

import Post from "./post";

export default function PostList({ posts }) {
  return (
    <div className="grid grid-cols-1 gap-3">
      {posts.length > 0 ? (
        posts.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <div>
          <p>
            <i>Tidak ada postingan</i>
          </p>
        </div>
      )}
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.array,
};
