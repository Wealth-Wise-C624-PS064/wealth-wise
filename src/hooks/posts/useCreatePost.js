import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createPost } from "@/services/posts-service";

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: async ({ title, body, category }) =>
      await createPost({ title, body, category }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      toast.success("Berhasil membuat diskusi baru");
      navigate("/forum", { replace: true });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createPost: mutate, isPending };
};
