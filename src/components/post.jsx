import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { formatTimeAgo } from "@/lib/formatTimeAgo";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Post({ post }) {
  return (
    <div className="w-full p-4 space-y-5 border rounded-md shadow-sm">
      <div className="flex flex-row gap-3 ">
        <Avatar>
          <AvatarFallback>{post.author.displayName}</AvatarFallback>
          <AvatarImage
            src={`${post.author.photoURL}`}
            alt={`${post.author.displayName}`}
          />
        </Avatar>
        <div className="flex flex-col gap-1 text-sm">
          <p className="text-primary-blue">{post.author.displayName}</p>
          <p className="text-xs">{formatTimeAgo(post.createdAt)}</p>
        </div>
      </div>
      <div className="space-y-3">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold capitalize transition-all duration-150 ease-in cursor-pointer hover:text-primary-blue">
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </h3>
          <p>{post.body}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500"></p>
        </div>
      </div>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.object,
};
