import { getPensionFund } from "@/services/calculators-service";
import { useQuery } from "@tanstack/react-query";

export const usePension = () => {
  return useQuery({
    queryKey: ["pensions"],
    queryFn: async () => await getPensionFund(),
  });
};
