import { useQuery } from "@tanstack/react-query";

import { getPost } from "@/services/post-service";

export const usePost = (postId) => {
  return useQuery({
    queryKey: ["posts", postId],
    queryFn: async () => await getPost(postId),
  });
};
