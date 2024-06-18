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
      toast.success("Berhasil menghapus diskusi");
      navigate("/forum", { replace: true });
    },
    onError: (err) => toast.err(err.message),
  });

  return { deletePost: mutate, isPending };
};
