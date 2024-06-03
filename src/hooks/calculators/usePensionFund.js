import { getPensionFund } from "@/services/calculator-service";
import { useQuery } from "@tanstack/react-query";

export const usePension = () => {
  return useQuery({
    queryKey: ["pensions"],
    queryFn: async () => await getPensionFund(),
  });
};
