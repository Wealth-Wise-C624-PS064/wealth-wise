import { useRef } from "react";
import { useParams } from "react-router-dom";
import { Loader2Icon } from "lucide-react";

import { usePost } from "@/hooks";

import BaseLayout from "@/layouts/base-layout";

export default function PostsDetailPage() {
  const { postId } = useParams();

  const { data, isSuccess, isLoading, isError, error } = usePost(postId);

  return (
    <BaseLayout>
      <section className="bg-white">
        <div className="max-w-6xl px-4 pt-8 pb-12 mx-auto space-y-4 min-h-dvh">
          <div>
            <div>
              {isLoading && (
                <div>
                  <Loader2Icon className="animate-spin" />
                </div>
              )}
              {isSuccess && <pre>{JSON.stringify(data, null, 2)}</pre>}
            </div>
          </div>

          <div></div>

          <div className="space-y-4">
            <h3 className="font-medium">
              <div className="flex flex-row gap-1">
                Comments:
                {isLoading && <Loader2Icon className="animate-spin" />}
                <span>{isSuccess && data.comments.length}</span>
              </div>
            </h3>
            <div>
              {isLoading && (
                <div>
                  <Loader2Icon className="animate-spin" />
                </div>
              )}
              {isSuccess &&
                (data.comments.length > 0 ? (
                  <div>{JSON.stringify(data.comments, null, 2)}</div>
                ) : (
                  <p>
                    <i>Belum ada komentar</i>
                  </p>
                ))}
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
