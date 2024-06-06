import { useQueries } from "@tanstack/react-query";

import { getPosts } from "@/services/posts-service";
import { getCategories } from "@/services/categories-service";

export const useSharedPostsCategories = () => {
  return useQueries({
    queries: [
      { queryKey: ["posts"], queryFn: async () => await getPosts() },
      { queryKey: ["categories"], queryFn: async () => await getCategories() },
    ],
  });
};
