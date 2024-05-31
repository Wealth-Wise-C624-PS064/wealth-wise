import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { formatTimeAgo } from "@/lib/formatTimeAgo";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

export default function Post({ post }) {
  return (
    <div className="w-full p-4 space-y-5 bg-white rounded-md shadow">
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
          <Badge className="bg-primary-blue hover:bg-primary-blue">
            {post.category}
          </Badge>
        </div>
      </div>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.object,
};
