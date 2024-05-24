import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <section>
      <header className="flex flex-row justify-between items-center p-4 h-[80px] border-b-black border">
        <h1 className="text-3xl font-bold">Wealth Wise</h1>
        <nav>
          <ul className="flex flex-row space-x-3 justify-center items-center font-bold text-xl">
            <li>
              <a href="">Beranda</a>
            </li>
            <li>
              <a href="">Kalkulator</a>
            </li>
            <li>
              <a href="">Forum</a>
            </li>
            <li>
              <a href="">Artikel</a>
            </li>
            <li>
              <a href="">Tentang</a>
            </li>

            <li className="flex flex-col justify-center items-center">
              <Button className="bg-[#2a9df2] font-semibold text-lg">
                Masuk
              </Button>
            </li>
          </ul>
        </nav>
      </header>

      <div className="min-h-screen p-4 flex flex-row min-w-fit space-x-10  items-center px-20">
        <div className="w-1/2  flex flex-col h-[400px] ">
          <h1 className="font-bold text-4xl">Raih Financial Freedom</h1>
          <h2 className="font-bold text-4xl">
            dengan{" "}
            <span className="font-semibold text-[#2a9df2]">WealthWise</span>
          </h2>
          <h3 className="mt-4 font-semibold text-lg">
            Prediksikan Masa Depan Anda!
          </h3>
          <h4 className="mt-4 font-semibold">Dapatkan Sekarang</h4>
        </div>
        <div className="w-1/2 bg-blue-100 flex flex-col h-[400px]">Gambar</div>
      </div>

      <div className=" p-4 bg-[#2a9df2]  ">
        <div className="flex flex-row min-w-fit min-h-screen items-center px-8 space-x-10">
          <div className="w-1/2  flex flex-col h-[400px] bg-red-100">
            Gambar babi
          </div>
          <div className="w-1/2  flex flex-col h-[400px]">
            <h1 className="text-2xl font-semibold text-white">
              Gratis untuk anda
            </h1>
            <div className="flex flex-col h-screen justify-around mt-5">
              <div>
                <h1 className="text-2xl font-semibold text-white">
                  Kalkulator Investasi
                </h1>
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-white">
                  Hitung Dana Pensiun
                </h1>
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-white">
                  Hitung Dana Darurat
                </h1>
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-white">
                  Forum Diskusi
                </h1>
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-white">
                  Artikel Panduan untuk membantu Anda mencapai tujuan keuanagn
                  Anda
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
