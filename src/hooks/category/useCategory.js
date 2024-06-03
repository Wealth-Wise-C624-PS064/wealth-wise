import { getAllCategory } from "@/services/category-service";
import { useQuery } from "@tanstack/react-query";

export const useCategory = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: async () => await getAllCategory(),
  });
};
