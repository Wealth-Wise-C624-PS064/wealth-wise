import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { register } from "@/services/authentication-service";

export const useRegister = () => {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: async ({ email, password }) =>
      await register({ email, password }),
    onSuccess: () => {
      toast.success("Register sukses");
      navigate("/login", { replace: true });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return {
    register: mutate,
    isPending,
  };
};
