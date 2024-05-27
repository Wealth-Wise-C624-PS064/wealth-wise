import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { loginWithGoogle } from "@/services/authentication-service";

export const useLoginWithGoogle = () => {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: async () => await loginWithGoogle(),
    onSuccess: () => {
      navigate("/", { replace: true });
    },
  });

  return {
    loginWithGoogle: mutate,
    isPending,
  };
};
