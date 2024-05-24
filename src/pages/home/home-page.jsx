import {
  CalculatorIcon,
  MessagesSquareIcon,
  NewspaperIcon,
  PersonStandingIcon,
  TriangleAlertIcon,
} from "lucide-react";

import BaseLayout from "@/layouts/base-layout";

import Hero from "@/components/hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function HomePage() {
  return (
    <BaseLayout>
      <main>
        <Hero />
        <section className="bg-primary-blue">
          <div className="flex flex-col-reverse justify-between h-full max-w-6xl gap-16 px-4 py-20 mx-auto md:gap-20 item-center md:flex-row ">
            <div className="p-4 bg-white border rounded-lg">
              <img
                src="/assets/saving-image.svg"
                alt="saving-image"
                className="w-[450px] h-fit object-cover"
                loading="lazy"
              />
            </div>
            <div className="self-center space-y-3">
              <h1 className="mb-8 text-3xl font-semibold text-white">
                Gratis untuk anda
              </h1>
              <div className="">
                <ul className="flex flex-col gap-3">
                  <li className="flex items-center gap-3">
                    <div className="p-2 bg-white border rounded-lg shadow-md">
                      <CalculatorIcon className="w-6 h-6" />
                    </div>
                    <span className="text-white ">Kalkulator Investasi</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="p-2 bg-white border rounded-lg shadow-md">
                      <PersonStandingIcon className="w-6 h-6" />
                    </div>
                    <span className="text-white ">Hitung Dana Pensiun</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="p-2 bg-white border rounded-lg shadow-md">
                      <TriangleAlertIcon className="w-6 h-6" />
                    </div>
                    <span className="text-white ">Hitung Dana Darurat</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="p-2 bg-white border rounded-lg shadow-md">
                      <MessagesSquareIcon className="w-6 h-6" />
                    </div>
                    <span className="text-white ">Forum Diskusi</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="p-2 bg-white border rounded-lg shadow-md">
                      <NewspaperIcon className="w-6 h-6" />
                    </div>
                    <span className="text-white ">
                      Artikel Panduan untuk membantu Anda mencapai tujuan
                      keuangan Anda
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="max-w-6xl px-4 mx-auto">
            <div className="flex flex-col items-center justify-center gap-3 mb-10">
              <h2 className="text-2xl font-semibold text-center ">
                Kenapa Harus Menggunakan Wealth Wise?
              </h2>
              <div className="bg-primary-blue w-32 h-[2px]"></div>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="p-4 space-y-3 bg-white border rounded-lg"
                >
                  <h3 className="text-lg font-semibold">
                    Lorem ipsum dolor sit amet consectetur.
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Debitis possimus harum iusto necessitatibus nulla deserunt
                    tenetur provident, ullam unde dolor.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="max-w-6xl px-4 mx-auto">
            <div className="flex flex-col items-center justify-center gap-3 mb-10">
              <h2 className="text-2xl font-semibold text-center ">
                Frequently Asked Questions
              </h2>
              <div className="bg-primary-blue w-32 h-[2px]"></div>
            </div>
            <div>
              <Accordion
                type="single"
                collapsible
                className="flex flex-col w-full gap-3"
              >
                <AccordionItem
                  value="item-1"
                  className="px-4 py-1 border rounded-md"
                >
                  <AccordionTrigger className="text-lg font-semibold no-underline hover:no-underline">
                    Is it accessible?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-2"
                  className="px-4 py-2 border rounded-md"
                >
                  <AccordionTrigger className="text-lg font-semibold no-underline hover:no-underline">
                    Is it accessible?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-3"
                  className="px-4 py-1 border rounded-md"
                >
                  <AccordionTrigger className="text-lg font-semibold no-underline hover:no-underline">
                    Is it accessible?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-4"
                  className="px-4 py-2 border rounded-md"
                >
                  <AccordionTrigger className="text-lg font-semibold no-underline hover:no-underline">
                    Is it accessible?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
    </BaseLayout>
  );
}
