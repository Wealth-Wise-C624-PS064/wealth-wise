import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/services/categories-service";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => await getCategories(),
  });
};
