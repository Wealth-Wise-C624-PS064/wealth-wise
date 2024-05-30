import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "@/services/post-service";

export const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => await getAllPosts(),
  });
};
