import { useMemo } from "react";

import { Link, useSearchParams } from "react-router-dom";
import { SquarePlusIcon } from "lucide-react";

import { useCurrentUser, useSharedPostsCategories } from "@/hooks";

import BaseLayout from "@/layouts/base-layout";

import SearchThread from "@/components/search-thread";
import PostList from "@/components/post-list";
import Categories from "@/components/categories";
import SkeletonLoaderCategories from "@/components/skeleton-loader-categories";

import { Button } from "@/components/ui/button";
import SkeletonLoaderPosts from "@/components/skeleton-loader-posts";

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

  let contentPosts;

  let contentCategories;

  if (isLoadingPosts) {
    contentPosts = <SkeletonLoaderPosts number={2} />;
  }

  if (isLoadingCategories) {
    contentCategories = <SkeletonLoaderCategories />;
  }

  const filteredPosts = useMemo(() => {
    return posts?.filter((post) => {
      if (searchParams.get("search") ?? "") {
        return post?.title
          ?.toLocaleLowerCase()
          ?.includes(searchParams.get("search")?.toLocaleLowerCase());
      } else if (searchParams.get("category") ?? "") {
        return post?.category
          ?.toLocaleLowerCase()
          .includes(searchParams.get("category")?.toLocaleLowerCase());
      } else {
        return true;
      }
    });
  }, [posts, searchParams]);

  if (isSuccessPosts) {
    contentPosts =
      posts.length > 0 ? (
        <PostList posts={filteredPosts} />
      ) : (
        <div>
          <p>
            <i>Tidak ada postingan</i>
          </p>
        </div>
      );
  }

  if (isSuccessCategories) {
    contentCategories = <Categories categories={categories} />;
  }

  if (isErrorPosts) {
    contentPosts = <div>{errorPosts.message}</div>;
  }

  if (isErrorCategories) {
    contentCategories = <div>{errorCatergories.message}</div>;
  }

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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          <div className="order-1 md:order-0 md:col-span-2">{contentPosts}</div>
          <div className="order-0 md:order-1 md:col-span-1">
            <div className="p-4 bg-white border rounded-md shadow-sm">
              <div className="flex flex-col gap-2 mb-4">
                <h2 className="text-xl font-semibold">Kategori Popular</h2>
                <div className="bg-primary-blue w-40 h-[2px]"></div>
              </div>
              {contentCategories}
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
