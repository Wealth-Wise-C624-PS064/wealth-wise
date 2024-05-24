import BaseLayout from "@/layouts/base-layout";

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
      <section className="max-w-6xl px-4 mx-auto my-20">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="p-4 space-y-4 border rounded-lg shadow-md"
            >
              <div className="mb-3 space-y-2">
                <h3 className="text-xl font-semibold transition-all duration-100 cursor-pointer hover:text-blue-500">
                  Financial Freedom
                </h3>
                <p className="prose">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
                  sint perferendis, maiores soluta odio quam! Harum temporibus a
                  magnam voluptatum.
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
      </section>
    </BaseLayout>
  );
}
