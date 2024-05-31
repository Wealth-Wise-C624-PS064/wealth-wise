import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/services/category-service";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => await getCategories(),
  });
};
