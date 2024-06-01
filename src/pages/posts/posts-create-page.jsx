import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";

import BaseLayout from "@/layouts/base-layout";

import CreatePostForm from "@/components/create-post-form";
import { Button } from "@/components/ui/button";

export default function PostsCreatePage() {
  const navigate = useNavigate();

  return (
    <BaseLayout>
      <section className="max-w-6xl px-4 py-12 mx-auto ">
        <div>
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            className="rounded-full cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <ArrowLeftIcon className="w-4 h-4" />
              <span>Back</span>
            </div>
          </Button>
        </div>
        <div className="my-8">
          <h1 className="text-3xl font-bold leading-normal text-center">
            Tambah Diskusi Baru
          </h1>
        </div>
        <div className="p-4 bg-white border rounded-md shadow-md">
          <CreatePostForm />
        </div>
      </section>
    </BaseLayout>
  );
}
