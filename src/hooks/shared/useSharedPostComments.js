import { useQueries } from "@tanstack/react-query";

import { getPost } from "@/services/posts-service";
import { getComments } from "@/services/comments-service";

export const useSharedPostComments = (postId) => {
  return useQueries({
    queries: [
      {
        queryKey: ["posts", postId],
        queryFn: async () => await getPost(postId),
      },
      {
        queryKey: ["comments", postId],
        queryFn: async () => await getComments(postId),
      },
    ],
  });
};
