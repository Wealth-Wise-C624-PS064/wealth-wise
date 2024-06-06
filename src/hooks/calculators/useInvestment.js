import { getInvestment } from "@/services/calculators-service";
import { useQuery } from "@tanstack/react-query";

export const useInvestment = () => {
  return useQuery({
    queryKey: ["investment"],
    queryFn: async () => await getInvestment(),
  });
};
