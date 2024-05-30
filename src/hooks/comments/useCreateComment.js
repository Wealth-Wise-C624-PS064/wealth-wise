import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createComment } from "@/services/comment-service";
import toast from "react-hot-toast";

export const useCreateComment = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async ({ postId, text }) =>
      await createComment({ postId, text }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      toast.success("Komentar berhasil dibuat");
    },
  });

  return {
    createComment: mutate,
    isPending,
  };
};
