import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createPost } from "@/services/posts-service";

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: async ({ title, body, category }) =>
      await createPost({ title, body, category }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onSettled: () => {
      navigate("/forum", { replace: true });
    },
  });

  return { createPost: mutate, isPending };
};
