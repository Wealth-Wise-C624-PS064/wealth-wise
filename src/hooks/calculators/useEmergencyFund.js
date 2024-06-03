import { getEmergencyFund } from "@/services/calculator-service";
import { useQuery } from "@tanstack/react-query";

export const useEmergency = () => {
  return useQuery({
    queryKey: ["emergencies"],
    queryFn: async () => await getEmergencyFund(),
  });
};
