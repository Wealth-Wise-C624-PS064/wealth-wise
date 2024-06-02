import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { deletePost } from "@/services/posts-service";

export const useDeletePost = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async (postId) => await deletePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onSettled: () => {
      navigate("/forum", { replace: true });
      toast.success("Berhasil menghapus diskusi");
    },
  });

  return {
    deletePost: mutate,
    isPending,
  };
};
