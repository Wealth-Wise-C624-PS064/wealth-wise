import BaseLayout from "@/layouts/base-layout";
import content from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
export default function ArticlePage() {
  const tipsMenabungData = content.filter(
    (data) => data.category === "tips-menabung"
  );

  const dasarInvestasiData = content.filter(
    (data) => data.category === "dasar-investasi"
  );
  const lifestyleData = content.filter((data) => data.category === "lifestyle");

  const rumahTanggaData = content.filter(
    (data) => data.category === "rumah-tangga"
  );
  return (
    <BaseLayout>
      <section className="bg-primary-blue">
        <div className="flex flex-col items-center h-full max-w-6xl px-4 py-12 mx-auto justify-evenly md:gap-20 md:flex-row min-h-96">
          <div>
            <Fade
              delay={1e2}
              direction={"left"}
              triggerOnce={true}
              damping={1e-1}
            >
              <img
                src="/assets/article.svg"
                alt="disscussion"
                loading="lazy"
                className="object-cover w-full md:w-[450px]"
              />
            </Fade>
          </div>
          <div className="space-y-4">
            <Fade
              delay={1e2}
              direction={"right"}
              triggerOnce={true}
              damping={1e-1}
            >
              <h2 className="text-3xl font-semibold leading-snug text-white md:text-5xl">
                Artikel
              </h2>
              <p className="text-2xl text-white">
                Yuk tingkatkan literasi finansialmu
              </p>
            </Fade>
          </div>
        </div>
      </section>
      <section className="max-w-6xl px-4 mx-auto my-20">
        <div className="flex flex-col space-y-12">
          <div>
            <Fade delay={1e2} triggerOnce={true} damping={1e-1}>
              <div className="flex flex-col gap-2 mb-4">
                <h2 className="text-xl font-semibold md:text-2xl">
                  Tips Menabung<span className="text-primary-blue">.</span>
                </h2>
                <div className="h-[2px] w-36 bg-primary-blue"></div>
              </div>
              <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {tipsMenabungData.map((data) => (
                  <div
                    key={data.id}
                    className="p-4 border min-h-[300px] rounded-lg shadow-md flex flex-col justify-between"
                  >
                    <div>
                      <h1 className="text-lg font-bold">{data.title}</h1>
                      <p className="mt-3 text-gray-700 line-clamp-3">
                        {data.desc}
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full mt-4">
                      <Link
                        to={`${data.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button className="w-full font-semibold bg-primary-blue hover:bg-primary-blue/80">
                          Baca Selengkapnya
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </Fade>
          </div>

          {/* dasar investasi */}
          <div>
            <Fade delay={1e2} triggerOnce={true} damping={1e-1}>
              <div className="flex flex-col gap-2 mb-4">
                <h2 className="text-xl font-semibold md:text-2xl">
                  Dasar Investasi<span className="text-primary-blue">.</span>
                </h2>
                <div className="h-[2px] w-36 bg-primary-blue"></div>
              </div>
              <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {dasarInvestasiData.map((data) => (
                  <div
                    key={data.id}
                    className="p-4 border min-h-[300px] rounded-lg shadow-md flex flex-col justify-between"
                  >
                    <div>
                      <h1 className="text-lg font-bold">{data.title}</h1>
                      <p className="mt-3 text-gray-700 line-clamp-3">
                        {data.desc}
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full mt-4">
                      <Link
                        to={`${data.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button className="w-full font-semibold bg-primary-blue hover:bg-primary-blue/80">
                          Baca Selengkapnya
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </Fade>
          </div>

          {/* lifestyle */}
          <div>
            <Fade delay={1e2} triggerOnce={true} damping={1e-1}>
              <div className="flex flex-col gap-2 mb-4">
                <h2 className="text-xl font-semibold md:text-2xl">
                  Gaya Hidup<span className="text-primary-blue">.</span>
                </h2>
                <div className="h-[2px] w-36 bg-primary-blue"></div>
              </div>
              <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {lifestyleData.map((data) => (
                  <div
                    key={data.id}
                    className="p-4 border min-h-[300px] rounded-lg shadow-md flex flex-col justify-between"
                  >
                    <div>
                      <h1 className="text-lg font-bold">{data.title}</h1>
                      <p className="mt-3 text-gray-700 line-clamp-3">
                        {data.desc}
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full mt-4">
                      <Link
                        to={`${data.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button className="w-full font-semibold bg-primary-blue hover:bg-primary-blue/80">
                          Baca Selengkapnya
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </Fade>
          </div>

          {/* rumah tangga */}
          <div>
            <Fade delay={1e2} triggerOnce={true} damping={1e-1}>
              <div className="flex flex-col gap-2 mb-4">
                <h2 className="text-xl font-semibold md:text-2xl">
                  Rumah Tangga<span className="text-primary-blue">.</span>
                </h2>
                <div className="h-[2px] w-36 bg-primary-blue"></div>
              </div>
              <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {rumahTanggaData.map((data) => (
                  <div
                    key={data.id}
                    className="p-4 border min-h-[300px] rounded-lg shadow-md flex flex-col justify-between"
                  >
                    <div>
                      <h1 className="text-lg font-bold">{data.title}</h1>
                      <p className="mt-3 text-gray-700 line-clamp-3">
                        {data.desc}
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full mt-4">
                      <Link
                        to={`${data.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button className="w-full font-semibold bg-primary-blue hover:bg-primary-blue/80">
                          Baca Selengkapnya
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}

