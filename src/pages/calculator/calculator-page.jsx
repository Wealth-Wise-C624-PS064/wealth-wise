import BaseLayout from "@/layouts/base-layout";
import { Link, Outlet } from "react-router-dom";
import {
  FaMoneyBillTrendUp,
  FaPersonCane,
  FaTriangleExclamation,
} from "react-icons/fa6";

function CalculatorPage() {
  return (
 <BaseLayout>
      <section className="bg-primary-blue ">
        <div className="mx-auto flex flex-col items-center justify-center h-full max-w-6xl px-4 md:px-16 py-12 md:gap-20 md:flex-row min-h-96">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold leading-snug text-white xl:text-6xl">
              Kalkulator
            </h2>
            <div className="space-y-4">
              <p className="text-4xl font-semibold text-white">
                Untuk Hitung Investasi
              </p>
              <p className="text-4xl font-semibold text-white">
                Untuk Hitung Dana Darurat
              </p>
              <p className="text-4xl font-semibold text-white pb-6">
                Untuk Hitung Dana Pensiun
              </p>
            </div>
          </div>
          <div>
            <img
              src="/assets/calculator-page.svg"
              alt="calculator"
              loading="lazy"
              className="object-cover w-full md:w-[450px]"
            />
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-3  flex pt-8">
        <div className="flex space-x-2 sm:space-x-6 lg:space-x-12 mb-8 mx-auto">
          <Link to="/kalkulator/investasi">
            <div className="border-2 border-black  rounded-2xl w-28 h-28 md:w-[136px] md:h-[136px] lg:w-40 lg:h-40 flex flex-col items-center justify-center px-1 md:px-4">
              <FaMoneyBillTrendUp className="text-4xl md:text-5xl lg:text-6xl pb-1" />
              <p className="text-base md:text-lg lg:text-xl font-bold text-center">
                Investasi
              </p>
            </div>
          </Link>
          <Link to="/kalkulator/dana-darurat">
            <div className="border-2 border-black  rounded-2xl w-28 h-28 md:w-[136px] md:h-[136px] lg:w-40 lg:h-40 flex flex-col items-center justify-center px-1 md:px-4">
              <FaTriangleExclamation className="text-4xl md:text-5xl lg:text-6xl pb-1" />
              <p className="text-base md:text-lg lg:text-xl font-bold text-center">
                Dana Darurat
              </p>
            </div>
          </Link>
          <Link to="/kalkulator/dana-pensiun">
            <div className="border-2 border-black  rounded-2xl w-28 h-28 md:w-[136px] md:h-[136px] lg:w-40 lg:h-40 flex flex-col items-center justify-center px-1 md:px-4">
              <FaPersonCane className="text-4xl md:text-5xl lg:text-6xl pb-1" />
              <p className="text-base md:text-lg lg:text-xl font-bold text-center">
                Dana Pensiun
              </p>
            </div>
          </Link>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 md:px-24">
        <Outlet />
      </section>
    </BaseLayout>
  );
}

export default CalculatorPage;
