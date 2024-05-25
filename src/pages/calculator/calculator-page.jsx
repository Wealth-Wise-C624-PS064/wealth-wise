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
        <div className="flex flex-col items-center justify-center h-full max-w-6xl px-4 md:px-16 py-12 mx-auto md:gap-20 md:flex-row min-h-96">
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
      <section className="max-w-6xl mx-auto px-3 flex pt-8">
        <div className="flex space-x-2">
          <Link to="/kalkulator/investasi">
            <div className="border-2 border-primary-blue rounded-2xl w-28 h-28 flex flex-col items-center justify-center px-1">
              <FaMoneyBillTrendUp className="text-4xl pb-1" />
              <p className="text-base font-bold text-center">Investasi</p>
            </div>
          </Link>
          <Link to="/kalkulator/dana-pensiun">
            <div className="border-2 border-primary-blue rounded-2xl w-28 h-28 flex flex-col items-center justify-center px-1">
              <FaTriangleExclamation className="text-4xl pb-1" />
              <p className="text-base font-bold text-center">Dana Darurat</p>
            </div>
          </Link>
          <Link to="/kalkulator/dana-darurat">
            <div className="border-2 border-primary-blue rounded-2xl w-28 h-28 flex flex-col items-center justify-center px-1">
              <FaPersonCane className="text-4xl pb-1" />
              <p className="text-base font-bold text-center">Dana Pensiun</p>
            </div>
          </Link>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4">
        <Outlet />
      </section>
    </BaseLayout>
  );
}

export default CalculatorPage;
