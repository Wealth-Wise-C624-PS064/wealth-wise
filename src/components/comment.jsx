import PropTypes from "prop-types";

import { formatTimeAgo } from "@/lib/formatTimeAgo";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DotIcon } from "lucide-react";

export default function Comment({ comment }) {
  return (
    <div className="flex flex-row gap-3">
      <Avatar className="w-6 h-6 md:h-10 md:w-10">
        <AvatarFallback>{comment.author.displayName}</AvatarFallback>
        <AvatarImage
          src={`${comment.author.photoURL}`}
          alt={`${comment.author.displayName}`}
        />
      </Avatar>
      <div className="w-full p-3 space-y-2 border rounded-md shadow-sm md:space-y-3">
        <div className="flex items-center text-sm">
          <p className="text-primary-blue">{comment.author.displayName}</p>
          <DotIcon />
          <div>{formatTimeAgo(comment.createdAt)}</div>
        </div>
        <p>{comment.text}</p>
      </div>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.object,
};
