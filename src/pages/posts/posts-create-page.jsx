import BaseLayout from "@/layouts/base-layout";

import CreatePostForm from "@/components/create-post-form";

export default function PostsCreatePage() {
  return (
    <BaseLayout>
      <section className="max-w-6xl px-4 py-12 mx-auto">
        <div className="mb-4">
          <h1 className="text-3xl font-bold leading-normal">Create Posts</h1>
        </div>
        <div className="p-4 bg-white border rounded-md shadow-md">
          <CreatePostForm />
        </div>
      </section>
    </BaseLayout>
  );
}
