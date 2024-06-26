import { Link } from "react-router-dom";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";

import BaseLayout from "@/layouts/base-layout";

import { Button } from "@/components/ui/button";
import { Fade } from "react-awesome-reveal";

export default function AboutPage() {
  return (
    <BaseLayout>
      <section className="flex flex-col items-center justify-center h-full max-w-6xl px-4 py-12 mx-auto min-h-96">
        <div className="flex flex-col items-center justify-center gap-3 mb-8">
          <Fade delay={1e2} triggerOnce={true} damping={1e-1}>
            <h2 className="text-2xl font-semibold text-center">
              Tentang Wealth Wise
            </h2>
            <div className="bg-primary-blue w-32 h-[2px]"></div>
          </Fade>
        </div>
        <Fade delay={1e2} direction={"up"} triggerOnce={true} damping={1e-1}>
          <p className="text-justify">
            <span className="font-medium text-primary-blue">Wealth Wise</span>{" "}
            adalah aplikasi perencanaan keuangan masa depan yang menawarkan
            berbagai fitur, termasuk kalkulator penghitung investasi, dana
            darurat, dan dana pensiun. Aplikasi ini juga dilengkapi dengan forum
            diskusi serta artikel-artikel yang memberikan wawasan dan tips
            praktis tentang berbagai aspek perencanaan keuangan. Dengan{" "}
            <span className="font-medium text-primary-blue">Wealth Wise</span>,
            pengguna diharapkan dapat lebih mudah mengelola keuangan mereka,
            merencanakan masa depan yang lebih stabil, dan mencapai tujuan
            finansial jangka panjang.
          </p>
        </Fade>
      </section>
      <section className="bg-white">
        <div className="max-w-6xl px-4 pb-20 mx-auto pt-14">
          <div className="mb-12 space-y-6">
            <div className="flex flex-col items-center justify-center gap-3">
              <Fade delay={1e2} triggerOnce={true} damping={1e-1}>
                <h2 className="text-2xl font-semibold text-center">
                  Profile Developer
                </h2>

                <div className="bg-primary-blue w-32 h-[2px]"></div>
              </Fade>
            </div>
            <div>
              <Fade
                delay={1e2}
                direction={"up"}
                triggerOnce={true}
                damping={1e-1}
              >
                <p className="text-center">
                  Sebagai pengembang di balik pembuatan{" "}
                  <span className="font-medium text-primary-blue">
                    Wealth Wise
                  </span>
                  , kami ingin mengucapkan terima kasih yang sebesar-besarnya
                  karena telah menjadi bagian dari perjalanan menuju financial
                  freedom dan hidup bahagia. Katakan Hai 😻!
                </p>
              </Fade>
            </div>
          </div>
          <Fade delay={1e2} direction={"up"} triggerOnce={true} damping={1e-1}>
            <div className="grid justify-center grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-row items-center gap-2 overflow-hidden rounded-lg">
                <div>
                  <img
                    src="https://avatars.githubusercontent.com/vitohartanto"
                    alt="vito-hartanto"
                    className="object-cover bg-cover rounded-md h-36 w-36"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold">Vito Hartanto</h3>
                    <h4 className="prose">Frontend Developer</h4>
                  </div>
                  <div className="font-medium">Universitas Gajah Mada</div>
                  <div className="flex space-x-3">
                    <Button size="icon" variant="outline" asChild>
                      <Link
                        target="_blank"
                        to="https://github.com/vitohartanto"
                      >
                        <GithubIcon className="w-5 h-5" />
                      </Link>
                    </Button>
                    <Button size="icon" variant="outline" asChild>
                      <Link
                        target="_blank"
                        to="https://www.linkedin.com/in/vito-hartanto/"
                      >
                        <LinkedinIcon className="w-5 h-5" />
                      </Link>
                    </Button>
                    <Button size="icon" variant="outline" asChild>
                      <Link
                        target="_blank"
                        to="https://www.instagram.com/hartantovito/"
                      >
                        <InstagramIcon className="w-5 h-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2 overflow-hidden rounded-lg">
                <div>
                  <img
                    src="https://avatars.githubusercontent.com/Maulidin-Ilham"
                    alt="ilham-maulidin"
                    className="object-cover bg-cover rounded-md w-36 h-36"
                    loading="lazy "
                  />
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold">Muhammad Ilham Maulidin</h3>
                    <h4 className="prose">Backend Developer</h4>
                  </div>
                  <div className="font-medium">Politeknik Negeri Malang</div>
                  <div className="flex space-x-3">
                    <Button size="icon" variant="outline" asChild>
                      <Link
                        target="_blank"
                        to="https://github.com/Maulidin-Ilham"
                      >
                        <GithubIcon className="w-5 h-5" />
                      </Link>
                    </Button>
                    <Button size="icon" variant="outline" asChild>
                      <Link
                        target="_blank"
                        to="https://www.linkedin.com/in/ilham-maulidin/"
                      >
                        <LinkedinIcon className="w-5 h-5" />
                      </Link>
                    </Button>
                    <Button size="icon" variant="outline" asChild>
                      <Link
                        target="_blank"
                        to="https://www.instagram.com/maulidinilham__/"
                      >
                        <InstagramIcon className="w-5 h-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2 overflow-hidden rounded-lg">
                <div>
                  <img
                    src="https://avatars.githubusercontent.com/nelanjoe"
                    alt="nelan-joe"
                    className="object-cover bg-cover rounded-md w-36 h-36"
                    loading="lazy "
                  />
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold">Nelan</h3>
                    <h4 className="prose">Fullstack Developer</h4>
                  </div>
                  <div className="font-medium">STT Terpadu Nurul Fikri</div>
                  <div className="flex space-x-3">
                    <Button size="icon" variant="outline" asChild>
                      <Link target="_blank" to="https://github.com/NelanJoe">
                        <GithubIcon className="w-5 h-5" />
                      </Link>
                    </Button>
                    <Button size="icon" variant="outline" asChild>
                      <Link
                        target="_blank"
                        to="https://www.linkedin.com/in/nelan17/"
                      >
                        <LinkedinIcon className="w-5 h-5" />
                      </Link>
                    </Button>
                    <Button size="icon" variant="outline" asChild>
                      <Link
                        target="_blank"
                        to="https://www.instagram.com/nelan_17/"
                      >
                        <InstagramIcon className="w-5 h-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </BaseLayout>
  );
}
