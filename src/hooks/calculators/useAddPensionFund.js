import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { addPensionFund } from "@/services/calculators-service";

export const useAddPensionFund = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async (data) => await addPensionFund(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pensions"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { addPensionFund: mutate, isPending };
};
