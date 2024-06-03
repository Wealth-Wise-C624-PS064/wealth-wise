import { getInvestment } from "@/services/calculator-service";
import { useQuery } from "@tanstack/react-query";

export const useInvestment = () => {
  return useQuery({
    queryKey: ["investments"],
    queryFn: async () => await getInvestment(),
  });
};
