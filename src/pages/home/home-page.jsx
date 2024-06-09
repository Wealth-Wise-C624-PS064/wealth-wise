import {
  FaCalculator,
  FaPersonCane,
  FaRegComments,
  FaNewspaper,
} from "react-icons/fa6";
import { GoAlertFill } from "react-icons/go";

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
                src="/assets/calculator.svg"
                alt="calculator"
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
                      <FaCalculator className="w-6 h-6" />
                    </div>
                    <span className="text-white ">Kalkulator Investasi</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="p-2 bg-white border rounded-lg shadow-md">
                      <FaPersonCane className="w-6 h-6" />
                    </div>
                    <span className="text-white ">Hitung Dana Pensiun</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="p-2 bg-white border rounded-lg shadow-md">
                      <GoAlertFill className="w-6 h-6" />
                    </div>
                    <span className="text-white ">Hitung Dana Darurat</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="p-2 bg-white border rounded-lg shadow-md">
                      <FaRegComments className="w-6 h-6" />
                    </div>
                    <span className="text-white ">Forum Diskusi</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="p-2 bg-white border rounded-lg shadow-md">
                      <FaNewspaper className="w-6 h-6" />
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
              <div className="p-4 space-y-3 bg-white border rounded-lg">
                <h3 className="text-lg font-semibold">Perencanaan Keuangan</h3>
                <p>
                  WealthWise menawarkan kalkulator investasi, hitung dana
                  pensiun,dan hitung dana darurat yang sangat berguna untuk
                  perencanaan keuangan Anda secara jangka panjang.
                </p>
              </div>
              <div className="p-4 space-y-3 bg-white border rounded-lg">
                <h3 className="text-lg font-semibold">Forum Diskusi</h3>
                <p>
                  WealthWise menyediakan forum diskusi di mana pengguna dapat
                  berinteraksi, bertukar informasi, dan belajar dari pengalaman
                  satu sama lain
                </p>
              </div>
              <div className="p-4 space-y-3 bg-white border rounded-lg">
                <h3 className="text-lg font-semibold">
                  Artikel Panduan dan Edukasi
                </h3>
                <p>
                  WealthWise memiliki koleksi artikel panduan yang membantu Anda
                  untuk memahami berbagai aspek keuangan, dari dasar-dasar
                  investasi hingga strategi perencanaan keuangan yang lebih
                  kompleks.
                </p>
              </div>
              <div className="p-4 space-y-3 bg-white border rounded-lg">
                <h3 className="text-lg font-semibold">Kemudahan Akses</h3>
                <p>
                  WealthWise dapat diakses kapan pun dan dimana pun dengan mudah
                  melalui halaman aplikasi Web WealthWise di berbagai perangkat
                  seperti smartphone, tablet, desktop, hingga laptop.
                </p>
              </div>
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
                  <AccordionTrigger className="text-lg font-semibold text-left no-underline hover:no-underline">
                    Apakah WealthWise Gratis?
                  </AccordionTrigger>
                  <AccordionContent>
                    Ya, segala fitur dan fungsi dari aplikasi WealthWise dapat
                    Anda gunakan secara gratis tanpa biaya
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-2"
                  className="px-4 py-2 border rounded-md"
                >
                  <AccordionTrigger className="text-lg font-semibold text-left no-underline hover:no-underline">
                    Apakah saya harus login untuk menggunakan kalkulator?
                  </AccordionTrigger>
                  <AccordionContent>
                    Tidak, Anda langsung dapat menggunakan kalkulator tanpa
                    login. Namun, jika Anda ingin menyimpan ke tabel penyimpanan
                    ataupun berdiskusi di forum, maka Anda perlu login.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-3"
                  className="px-4 py-1 border rounded-md"
                >
                  <AccordionTrigger className="text-lg font-semibold text-left no-underline hover:no-underline">
                    Saya ingin tahu formula WealthWise dalam menghitung
                    Investasi, Dana Darurat, atau Dana Pensiun
                  </AccordionTrigger>
                  <AccordionContent>
                    Tentu! Anda dapat menekan tombol “Cara Kami Menghitung”
                    untuk menampilkan formula yang kami gunakan. Tentunya
                    formulanya sudah kami riset dan dijamin benar.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-4"
                  className="px-4 py-2 border rounded-md"
                >
                  <AccordionTrigger className="text-lg font-semibold text-left no-underline hover:no-underline">
                    Apa saja topik yang dapat dibahas di Forum Diskusi?
                  </AccordionTrigger>
                  <AccordionContent>
                    Anda dapat membahas Topik apa saja terkait investasi, dana
                    darurat, dana pensiun, ataupun topik keuangan lainnya.
                    Namun, perlu diingat diskusi tidak boleh mengandung unsur
                    SARA ataupun yang dapat mengganggu kenyamanan publik
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
