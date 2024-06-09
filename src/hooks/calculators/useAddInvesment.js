import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { addInvestment } from "@/services/calculators-service";

export const useAddInvesment = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async (data) => await addInvestment(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["investment"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { addInvestment: mutate, isPending };
};
