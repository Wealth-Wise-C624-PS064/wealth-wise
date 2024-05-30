import { useParams } from "react-router-dom";

import BaseLayout from "@/layouts/base-layout";
import { usePost } from "@/hooks";

export default function PostsDetailPage() {
  const { postId } = useParams();

  const { data: post, isSuccess, isLoading, isError, error } = usePost(postId);

  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  }

  if (isSuccess) {
    content = (
      <article className="prose prose-a:text-blue-600 hover:prose-a:text-blue-500">
        <h3 className="text-4xl font-semibold capitalize">{post.title}</h3>
        <div className="prose-stone">
          <p className="">{post.body}</p>
        </div>
      </article>
    );
  }

  if (isError) {
    content = <div>Error: {error.message}</div>;
  }

  return (
    <BaseLayout>
      <section className="bg-white">
        <div className="max-w-6xl px-4 pt-6 mx-auto min-h-dvh">{content}</div>
      </section>
    </BaseLayout>
  );
}
