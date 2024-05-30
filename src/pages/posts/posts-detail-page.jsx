import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeftIcon, Loader2Icon } from "lucide-react";

import { useCurrentUser, usePost } from "@/hooks";

import BaseLayout from "@/layouts/base-layout";

import CreateCommentForm from "@/components/create-comment-form";
import CommentList from "@/components/comment-list";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function PostsDetailPage() {
  const { postId } = useParams();
  const navigate = useNavigate();

  const { currentUser } = useCurrentUser();
  const { data, isSuccess, isLoading, isError, error } = usePost(postId);

  return (
    <BaseLayout>
      <section className="pt-10 pb-24 bg-white">
        <div className="max-w-6xl px-4 mx-auto mb-6">
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            className="rounded-full"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            <span className="ml-2">Back</span>
          </Button>
        </div>
        <div className="max-w-6xl px-4 mx-auto space-y-4 min-h-max">
          <div className="my-12">
            {isLoading && (
              <div>
                <Loader2Icon className="animate-spin" />
              </div>
            )}
            {isSuccess && (
              <div className="p-4 space-y-2 border rounded-md">
                <h2 className="text-3xl font-semibold capitalize">
                  {data?.post.title}
                </h2>
                <p>{data?.post.body}</p>
              </div>
            )}
            {isError && <div>Error: {error.message}</div>}
          </div>

          <div>
            <h3 className="font-medium">
              <div className="flex flex-row items-center gap-1">
                {isLoading && <Loader2Icon className="w-3 h-3 animate-spin" />}
                {isSuccess && <span>{data?.comments.length}</span>}
                {isError && <span>Error: {error.message}</span>}
                <span>Komentar</span>
              </div>
            </h3>
          </div>

          <div className="p-4 border rounded-md shadow-sm">
            <div className="space-y-8">
              {currentUser ? (
                <div className="flex flex-row gap-6">
                  <Avatar>
                    <AvatarFallback>{currentUser?.displayName}</AvatarFallback>
                    <AvatarImage
                      src={`${currentUser?.photoURL}`}
                      alt={`${currentUser?.displayName}`}
                    />
                  </Avatar>
                  <div className="w-full">
                    <CreateCommentForm />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-1 p-4 border rounded-md">
                  <p>Silahkan masuk untuk mengirim komentar.</p>
                  <Link
                    to="/login"
                    className="underline underline-offset-2 text-primary-blue"
                  >
                    <strong>Masuk</strong>
                  </Link>
                </div>
              )}
              <div>
                {isLoading && (
                  <div>
                    <Loader2Icon className="animate-spin" />
                  </div>
                )}
                {isSuccess &&
                  (data?.comments.length > 0 ? (
                    <CommentList comments={data.comments} />
                  ) : (
                    <p>
                      <i>Belum ada komentar</i>
                    </p>
                  ))}
                {isError && <span>Error: {error.message}</span>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
