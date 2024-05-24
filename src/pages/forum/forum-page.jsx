export default function ForumPage() {
  return (
    <section>
      <div>
        <h2>Forum Diskusi</h2>
      </div>

      <div className="max-w-screen-lg mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg space-y-4 shadow-md"
            >
              <div className="mb-3 space-y-2">
                <h3 className="font-semibold text-xl hover:text-blue-500 cursor-pointer transition-all duration-100">
                  Financial Freedom
                </h3>
                <p>
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
                    className="w-9 h-9 rounded-full object-cover border-2 border-blue-200"
                  />
                </div>
                <p>2 hari yang lalu</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
