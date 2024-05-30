import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createPost } from "@/services/post-service";

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: async ({ title, body }) => await createPost({ title, body }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onSettled: () => {
      navigate("/forum", { replace: true });
    },
  });

  return {
    createPost: mutate,
    isPending,
  };
};
