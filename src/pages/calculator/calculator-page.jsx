import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaMoneyBillTrendUp,
  FaPersonCane,
  FaTriangleExclamation,
} from "react-icons/fa6";

import BaseLayout from "@/layouts/base-layout";
import { Fade } from "react-awesome-reveal";

export default function CalculatorPage() {
  const [links] = useState(() => [
    {
      id: "investasi",
      path: "/kalkulator/investasi",
      name: "Investasi",
      icon: <FaMoneyBillTrendUp className="text-3xl lg:text-5xl" />,
    },
    {
      id: "dana-darurat",
      path: "/kalkulator/dana-darurat",
      name: "Dana Darurat",
      icon: <FaPersonCane className="text-3xl lg:text-5xl" />,
    },
    {
      id: "dana-pensiun",
      path: "/kalkulator/dana-pensiun",
      name: "Dana Pensiun",
      icon: <FaTriangleExclamation className="text-3xl lg:text-5xl" />,
    },
  ]);

  return (
    <BaseLayout>
      <section className="bg-primary-blue">
        <div className="flex flex-col justify-between h-full max-w-6xl gap-8 px-4 py-12 mx-auto md:items-center md:gap-20 md:flex-row min-h-96">
          <div className="space-y-3 md:space-y-4">
            <Fade
              delay={1e2}
              direction={"left"}
              triggerOnce={true}
              damping={1e-1}
            >
              <h2 className="text-3xl font-semibold leading-normal text-white md:text-5xl">
                Kalkulator
              </h2>

              <div className="space-y-4">
                <p className="text-xl text-white md:text-2xl">
                  Untuk Hitung Investasi
                </p>
                <p className="text-xl text-white md:text-2xl">
                  Untuk Hitung Dana Darurat
                </p>
                <p className="text-xl text-white md:text-2xl">
                  Untuk Hitung Dana Pensiun
                </p>
              </div>
            </Fade>
          </div>
          <div>
            <Fade
              delay={1e2}
              direction={"right"}
              triggerOnce={true}
              damping={1e-1}
            >
              <img
                src="/assets/calculator-page.svg"
                alt="calculator"
                loading="lazy"
                className="object-cover w-full md:w-[450px]"
              />
            </Fade>
          </div>
        </div>
      </section>
      <section className="max-w-6xl px-4 mx-auto my-14 md:my-20">
        <Fade
          delay={1e2}
          direction={"left"}
          cascade
          triggerOnce={true}
          damping={1e-1}
        >
          <div className="flex items-center justify-center gap-3 md:gap-8">
            {links.map((link) => (
              <NavLink
                key={link.id}
                to={`${link.path}`}
                className={({ isActive }) =>
                  isActive
                    ? "flex flex-col items-center justify-center gap-1 md:gap-3 rounded-lg  p-4 transition-all duration-150 ease-in-out shadow-sm text-primary-blue border-primary-blue border-[3px] w-28 h-28 md:w-[136px] md:h-[136px] lg:w-40 lg:h-40"
                    : "hover:bg-[rgba(225,225,225,0.90)] flex flex-col items-center justify-center border-slate-600 gap-1 md:gap-3 rounded-lg border p-4 transition-all duration-150 ease-in-out shadow-md w-28 h-28 md:w-[136px] md:h-[136px] lg:w-40 lg:h-40"
                }
              >
                {link.icon}
                <p className="text-sm font-semibold text-center md:text-lg">
                  {link.name}
                </p>
              </NavLink>
            ))}
          </div>
        </Fade>
      </section>
      <section className="max-w-6xl px-4 mx-auto sm:px-8 md:px-24">
        <Outlet />
      </section>
    </BaseLayout>
  );
}
