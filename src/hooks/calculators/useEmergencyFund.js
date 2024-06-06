import { useQuery } from "@tanstack/react-query";

import { getEmergencyFund } from "@/services/calculators-service";

export const useEmergency = () => {
  return useQuery({
    queryKey: ["emergencies"],
    queryFn: async () => await getEmergencyFund(),
  });
};
