import BaseLayout from "@/layouts/base-layout";
import { Link, Outlet } from "react-router-dom";

function CalculatorPage() {
  return (
    <BaseLayout>
      <section className="flex flex-col items-center justify-center h-full max-w-6xl px-4 py-12 mx-auto min-h-96">
        <div className="flex flex-col items-center justify-center gap-3 mb-8">
          <h2 className="text-2xl font-semibold text-center">
            Tentang Wealth Wise
          </h2>
          <div className="bg-primary-blue w-32 h-[2px]"></div>
        </div>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quis
          sint itaque. Eaque minus asperiores corrupti deserunt ut beatae sequi
          aut dolorum, magni cupiditate! Modi quidem dolorem asperiores esse
          quisquam!
        </p>
      </section>
      <section className="max-w-6xl mx-auto px-4">
        <Link to="/kalkulator/investasi">Kalkulator Investasi</Link>
        <Link to="/kalkulator/dana-pensiun">Dana Pensiun</Link>
        <Link to="/kalkulator/dana-darurat">Dana Darurat</Link>
      </section>
      <section className="max-w-6xl mx-auto px-4">
        <Outlet />
      </section>
    </BaseLayout>
  );
}

export default CalculatorPage;
