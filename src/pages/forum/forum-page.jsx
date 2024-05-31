import { useMemo } from "react";

import { Link, useSearchParams } from "react-router-dom";
import { SquarePlusIcon } from "lucide-react";

import { useCurrentUser, useSharedPostsCategories } from "@/hooks";

import BaseLayout from "@/layouts/base-layout";

import SearchThread from "@/components/search-thread";
import PostList from "@/components/post-list";

import { Button } from "@/components/ui/button";

export default function ForumPage() {
  const [searchParams] = useSearchParams();

  const { currentUser } = useCurrentUser();
  const [
    {
      data: posts,
      isLoading: isLoadingPosts,
      isSuccess: isSuccessPosts,
      isError: isErrorPosts,
      error: errorPosts,
    },
    {
      data: categories,
      isLoading: isLoadingCategories,
      isSuccess: isSuccessCategories,
      isError: isErrorCategories,
      error: errorCatergories,
    },
  ] = useSharedPostsCategories();

  const filteredPosts = useMemo(() => {
    return posts?.filter((post) =>
      post?.title
        ?.toLocaleLowerCase()
        ?.includes(searchParams.get("search")?.toLocaleLowerCase() ?? "")
    );
  }, [posts, searchParams]);

  return (
    <BaseLayout>
      <section className="bg-primary-blue">
        <div className="flex flex-col items-center justify-between h-full max-w-6xl px-4 py-12 mx-auto md:gap-20 md:flex-row min-h-96">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold leading-snug text-white md:text-5xl">
              Forum Diskusi
            </h2>
            <p className="text-2xl text-white">
              Lagi pengen bahas apa hari ini?
            </p>
          </div>
          <div>
            <img
              src="/assets/discussion.svg"
              alt="disscussion"
              loading="lazy"
              className="object-cover w-full md:w-[450px]"
            />
          </div>
        </div>
      </section>
      <section className="max-w-6xl px-4 mx-auto mt-20 mb-6 md:mb-12">
        <div className="flex flex-row justify-between mb-2">
          <div className="flex flex-col gap-2 mb-4">
            <h2 className="text-xl font-semibold md:text-2xl">
              Diskusi Aktif<span className="text-primary-blue">.</span>
            </h2>
            <div className="h-[2px] w-36 bg-primary-blue"></div>
          </div>
          <div>
            {currentUser && (
              <Button
                asChild
                className="w-full rounded-full bg-primary-blue hover:bg-primary-blue/80"
              >
                <Link to="/posts/create">
                  <div className="flex flex-row items-center gap-1">
                    <SquarePlusIcon className="w-5 h-5" />
                    <span>Buat Diskusi Baru</span>
                  </div>
                </Link>
              </Button>
            )}
          </div>
        </div>
        <div className="w-full">
          <SearchThread />
        </div>
      </section>
      <section className="max-w-6xl px-4 mx-auto mb-20">
        <div className="grid grid-cols-3 md:gap-6">
          <div className="col-span-2">
            {isLoadingPosts && <p>Loading...</p>}
            {isSuccessPosts && <PostList posts={filteredPosts} />}
            {isErrorPosts && <p>{errorPosts.message}</p>}
          </div>
          <div>
            <div className="flex flex-col gap-3 mb-10">
              <h2 className="text-2xl font-semibold">Kategori Popular</h2>
              <div className="bg-primary-blue w-48 h-[2px]"></div>
            </div>
            {isLoadingCategories && <p>Loading...</p>}
            {isSuccessCategories && (
              <pre>{JSON.stringify(categories, null, 2)}</pre>
            )}
            {isErrorCategories && <p>{errorCatergories.message}</p>}
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
