import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import {
  createUserFromAuth,
  loginWithGoogle,
} from "@/services/authentication-service";

export const useLoginWithGoogle = () => {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: async () => await loginWithGoogle(),
    onSuccess: () => {
      navigate("/", { replace: true });
    },
    onSettled: async (data) => {
      await createUserFromAuth(data);
    },
  });

  return {
    loginWithGoogle: mutate,
    isPending,
  };
};
