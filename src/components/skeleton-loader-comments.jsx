import PropTypes from "prop-types";

import { Skeleton } from "./ui/skeleton";

export default function SkeletonLoaderComments({ number = 2 }) {
  return (
    <div className="flex flex-col gap-3">
      {[...Array(number)].map((_, index) => (
        <div key={index} className="flex flex-row gap-3">
          <Skeleton className="w-12 h-12 rounded-full" />
          <div className="w-full p-3 rounded-md bg-slate-100/50">
            <div className="flex flex-col gap-5">
              <Skeleton className="h-2.5 w-96 bg-white" />
              <Skeleton className="h-2.5 w-9/12 bg-white" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

SkeletonLoaderComments.propTypes = {
  number: PropTypes.number,
};
