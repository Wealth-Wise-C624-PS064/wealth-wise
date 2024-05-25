import SearchThread from "@/components/search-thread";
import { Button } from "@/components/ui/button";
import BaseLayout from "@/layouts/base-layout";
import { Link } from "react-router-dom";

export default function ForumPage() {
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
            <Button
              asChild
              className="w-full rounded-full bg-primary-blue hover:bg-primary-blue/80"
            >
              <Link>Buat Diskusi Baru</Link>
            </Button>
          </div>
        </div>
        <div className="w-full">
          <SearchThread />
        </div>
      </section>
      <section className="grid max-w-6xl grid-cols-1 gap-8 px-4 mx-auto mb-20 md:grid-cols-3">
        <div className="grid order-1 grid-cols-1 col-span-2 gap-3 md:order-0">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="p-4 space-y-4 bg-white border rounded-lg shadow-md"
            >
              <div className="mb-3 space-y-2">
                <h3 className="text-xl font-semibold transition-all duration-100 cursor-pointer hover:text-blue-500">
                  Financial Freedom
                </h3>
                <p className="prose">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div>
                  <img
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    loading="lazy"
                    className="object-cover border-2 border-blue-200 rounded-full w-9 h-9"
                  />
                </div>
                <p>2 hari yang lalu</p>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-1 order-0 md:order-1">
          <div className="flex flex-col gap-2 mb-4">
            <h2 className="text-xl font-semibold md:text-2xl">
              Kategori Popular<span className="text-primary-blue"></span>
            </h2>
            <div className="h-[2px] w-48 bg-primary-blue"></div>
          </div>
          <div className="flex flex-row gap-3 overflow-x-scroll md:overflow-auto md:flex-wrap">
            {[...Array(4)].map((_, index) => (
              <div key={index}>
                <Button className="rounded-full bg-primary-blue hover:bg-primary-blue/80">
                  Financial Freedom
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
