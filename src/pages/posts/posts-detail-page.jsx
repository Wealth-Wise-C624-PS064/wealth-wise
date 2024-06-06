import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeftIcon, Loader2Icon, XIcon } from "lucide-react";

import { useCurrentUser, useDeletePost, useSharedPostComments } from "@/hooks";

import { formatTimeAgo } from "@/lib/formatTimeAgo";

import BaseLayout from "@/layouts/base-layout";

import CreateCommentForm from "@/components/create-comment-form";
import CommentList from "@/components/comment-list";
import SkeletonLoaderPosts from "@/components/skeleton-loader-posts";
import SkeletonLoaderComments from "@/components/skeleton-loader-comments";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function PostsDetailPage() {
  const { postId } = useParams();
  const navigate = useNavigate();

  const { currentUser } = useCurrentUser();
  const [
    {
      data: post,
      isLoading: isLoadingPost,
      isSuccess: isSuccessPost,
      isError: isErrorPost,
      error: errorPost,
    },
    {
      data: comments,
      isLoading: isLoadingComments,
      isSuccess: isSuccessComments,
      isError: isErrorComments,
      error: errorComments,
    },
  ] = useSharedPostComments(postId);

  const { deletePost, isPending } = useDeletePost();

  let contentPost;
  let contentComments;

  if (isLoadingPost) {
    contentPost = <SkeletonLoaderPosts number={1} />;
  }

  if (isLoadingComments) {
    contentComments = <SkeletonLoaderComments />;
  }

  if (isSuccessPost) {
    contentPost = (
      <>
        <div className="p-4 mb-10 space-y-4 border rounded-md">
          <div className="flex flex-row gap-3">
            <Avatar>
              <AvatarFallback>{post.author.displayName}</AvatarFallback>
              <AvatarImage
                src={`${post.author.photoURL}`}
                alt={`${post.author.displayName}`}
              />
            </Avatar>
            <div className="flex flex-col gap-1 text-sm">
              <p className="text-primary-blue">{post.author.displayName}</p>
              <p className="text-xs">{formatTimeAgo(post.createdAt)}</p>
            </div>
          </div>
          <h2 className="text-3xl font-semibold capitalize">{post.title}</h2>
          <p>{post.body}</p>
          <div>
            <Badge className="bg-primary-blue hover:bg-primary-blue">
              {post.category}
            </Badge>
          </div>
        </div>
        {post?.author.id === currentUser?.uid && (
          <div className="flex flex-row justify-end mb-6">
            <Button
              onClick={() => deletePost(postId)}
              className="rounded-full"
              variant="destructive"
              disabled={isPending}
            >
              <div className="flex flex-row items-center gap-2">
                {isPending ? (
                  <Loader2Icon className="w-5 h-5 animate-spin" />
                ) : (
                  <XIcon className="w-5 h-5" />
                )}
                <span>Hapus Diskusi</span>
              </div>
            </Button>
          </div>
        )}
      </>
    );
  }

  if (isSuccessComments) {
    contentComments =
      comments.length > 0 ? (
        <CommentList comments={comments} />
      ) : (
        <p>
          <i>Belum ada komentar</i>
        </p>
      );
  }

  if (isErrorPost) {
    contentPost = <p>Error: {errorPost.message}</p>;
  }

  if (errorComments) {
    contentComments = <div>Error: {errorComments.message}</div>;
  }

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
            <span className="ml-2">Kembali</span>
          </Button>
        </div>
        <div className="max-w-6xl px-4 mx-auto space-y-4 min-h-max">
          <div>{contentPost}</div>
          <div>
            <h3 className="font-medium">
              <div className="flex flex-row items-center gap-1">
                {isLoadingComments && (
                  <Loader2Icon className="w-3 h-3 animate-spin" />
                )}
                {isSuccessComments && <span>{comments.length}</span>}
                {isErrorComments && <span>Error: {errorComments.message}</span>}
                <span>Komentar</span>
              </div>
            </h3>
          </div>

          <div className="p-4 border rounded-md shadow-sm">
            <div className="space-y-8">
              {currentUser ? (
                <div className="flex flex-row gap-2">
                  <Avatar className="w-6 h-6 md:h-10 md:w-10">
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
              <div>{contentComments}</div>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
