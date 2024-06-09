import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addEmergencyFund } from "@/services/calculators-service";
import toast from "react-hot-toast";

export const useAddEmergencyFund = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async (data) => await addEmergencyFund(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["emergencies"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { addEmergencyFund: mutate, isPending };
};
