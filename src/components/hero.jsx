import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "./ui/button";
import { Fade } from "react-awesome-reveal";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-between max-w-6xl px-4 mx-auto my-10 md:gap-10 md:flex-row md:min-h-dvh md:my-0">
      <div className="text-center md:text-left md:w-1/2">
        <Fade delay={1e2} triggerOnce={true} damping={1e-1}>
          <h1 className="text-3xl font-bold leading-relaxed md:text-4xl md:leading-normal lg:leading-normal">
            Raih Financial Freedom
            <br />
            dengan{" "}
            <span className="font-semibold text-primary-blue">WealthWise</span>
          </h1>
          <h3 className="mt-4 mb-3 text-lg font-semibold"></h3>
          <Button
            asChild
            className="rounded-full w-fit bg-primary-blue hover:bg-primary-blue"
          >
            <Link to="/kalkulator">
              <div className="flex items-center gap-2 transition-all duration-300 ease-in-out hover:gap-3">
                <span>Prediksikan Masa Depan Anda Sekarang</span>
                <ArrowRightIcon className="w-5 h-5 text-white" />
              </div>
            </Link>
          </Button>
        </Fade>
      </div>

      <div>
        <Fade delay={1e2} triggerOnce={true} damping={1e-1}>
          <img
            src="assets/banknote.svg"
            alt="banknote"
            loading="lazy"
            className="object-cover w-[300px] md:w-[580px] h-fit"
          />
        </Fade>
      </div>
    </section>
  );
}

