import { Skeleton } from "./ui/skeleton";

export default function SkeletonLoaderCategories() {
  return (
    <div className="flex items-center gap-3">
      <Skeleton className="w-24 h-10 rounded-full" />
      <Skeleton className="w-24 h-10 rounded-full" />
    </div>
  );
}
