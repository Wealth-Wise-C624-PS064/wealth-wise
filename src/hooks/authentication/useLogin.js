import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { login } from "@/services/authentication-service";

export const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async ({ email, password }) => await login({ email, password }),
    onSuccess: async (data) => {
      const user = {
        uid: data.uid,
        displayName: data.displayName,
        email: data.email,
        photoURL: data.photoURL,
      };

      queryClient.setQueryData(["user"], user);
      toast.success("Login sukses");
      navigate("/", { replace: true });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return {
    login: mutate,
    isPending,
  };
};
