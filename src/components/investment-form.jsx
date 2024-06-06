import { useState, useEffect } from "react";

import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

import { useAddInvesment, useCurrentUser, useInput } from "@/hooks";

import { toRupiah } from "@/lib/toRupiah";

export default function InvestmentForm() {
  const [currentAmount, onChangeCurrentAmountHandler, setCurrentAmount] =
    useInput("");
  const [monthlySaving, onChangeMonthlySavingHandler, setMonthlySaving] =
    useInput("");
  const [annualReturn, onChangeAnnualReturnHandler, setAnnualReturn] =
    useInput("");
  const [years, onChangeYearsHandler] = useInput("");
  const [futureValue, setFutureValue] = useState(null);

  const calculateFutureValue = async (event) => {
    event.preventDefault();

    // removing the comma from the numbers and giving declarations
    const P_value = parseFloat(currentAmount.replace(/[,.]/g, ""));
    const PMT_value = parseFloat(monthlySaving.replace(/[,.]/g, ""));
    const r_value = parseFloat(annualReturn) / 100;
    const t_value = parseFloat(years);

    if (
      isNaN(P_value) ||
      isNaN(PMT_value) ||
      isNaN(r_value) ||
      isNaN(t_value)
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Silakan masukkan semua nilai dengan benar!",
      });
      return;
    }

    const A = P_value * Math.pow(1 + r_value / 12, 12 * t_value);
    const B =
      (PMT_value * (Math.pow(1 + r_value / 12, 12 * t_value) - 1)) /
      (r_value / 12);
    const futureValue = A + B;

    setFutureValue(futureValue.toFixed(2));
  };

  const descFormulaHandler = (event) => {
    event.preventDefault();
    Swal.fire({
      color: "#000",
      background: "rgba(255,255,255, 0.95)",
      backdrop: `rgba(42,157,242,0.4)`,
      confirmButtonColor: "#16db3d",
      title: `<strong>Formula Hitung <span style="color:#2A9DF2;">Investasi</span></strong>`,
      icon: "info",
      html: `
        <b>
        Total = A + B
        </b>
        <br />
        <br />
        <b>
        A: Future Value dari Aset Awal
        </b>
        <h2>
        A = P (1 + <sup>r</sup>&frasl;<sub>12</sub>)<sup>12t</sup>
        </h2>
  
        <br />
  
        <b>
        B: Future Value dari Tabungan Bulanan
        </b>
        <h2>
        B = PMT  * ((1 + <sup>r</sup>&frasl;<sub>12</sub>)<sup>12t</sup> - 1)/ (<sup>r</sup>&frasl;<sub>12</sub>)
        </h2>
        
        `,
      focusConfirm: false,
      confirmButtonText: `
         Okay
        `,
    });
  };

  const { addInvestment, isPending } = useAddInvesment();

  const handleAddInvesment = () => {
    // removing the comma from the numbers and giving declarations
    const P_value = parseFloat(currentAmount.replace(/[,.]/g, ""));
    const PMT_value = parseFloat(monthlySaving.replace(/[,.]/g, ""));
    const r_value = parseFloat(annualReturn) / 100;
    const t_value = parseFloat(years);

    if (
      isNaN(P_value) ||
      isNaN(PMT_value) ||
      isNaN(r_value) ||
      isNaN(t_value)
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Silakan masukkan semua nilai dengan benar!",
      });
      return;
    }

    const A = P_value * Math.pow(1 + r_value / 12, 12 * t_value);
    const B =
      (PMT_value * (Math.pow(1 + r_value / 12, 12 * t_value) - 1)) /
      (r_value / 12);
    const futureValue = A + B;

    setFutureValue(futureValue.toFixed(2));

    addInvestment(
      {
        P: P_value,
        PMT: PMT_value,
        r: r_value,
        t: t_value,
        hasil: futureValue,
      },
      {
        onSettled: () => {
          setCurrentAmount("");
          setMonthlySaving("");
          setAnnualReturn("");
        },
      }
    );
  };

  const { currentUser } = useCurrentUser();

  useEffect(() => {
    console.log(currentAmount * 2);
  }, [currentAmount]);

  return (
    <>
      <form onSubmit={calculateFutureValue}>
        <div className="flex flex-col mb-8">
          <label htmlFor="" className="mb-3 text-xl font-bold">
            Uang yang Anda miliki saat ini sebesar?{" "}
            <span className="text-primary-blue">(P)</span>
          </label>
          <div className="flex items-center">
            <p className="mr-4 text-xl font-bold">Rp</p>
            <input
              type="text"
              value={currentAmount}
              onChange={onChangeCurrentAmountHandler}
              placeholder="Contoh: 5.000.000"
              className="w-3/5 px-4 py-2 border-primary-blue border-[3px] rounded-2xl"
            />
          </div>
        </div>

        <div className="flex flex-col mb-8">
          <label htmlFor="" className="mb-3 text-xl font-bold">
            Uang yang dapat Anda tabung per bulan?{" "}
            <span className="text-primary-blue">(PMT)</span>
          </label>
          <div className="flex items-center">
            <p className="mr-4 text-xl font-bold">Rp</p>
            <input
              type="text"
              value={monthlySaving}
              onChange={onChangeMonthlySavingHandler}
              placeholder="Contoh: 1.000.000"
              className="w-3/5 px-4 py-2 border-primary-blue border-[3px] rounded-2xl"
            />
          </div>
        </div>

        <div className="flex flex-col mb-8">
          <label htmlFor="" className="mb-3 text-xl font-bold">
            Persen-an return investasi Anda per tahun?{" "}
            <span className="text-primary-blue">(r)</span>
          </label>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="5"
              value={annualReturn}
              onChange={onChangeAnnualReturnHandler}
              className="text-center w-1/5 px-4 py-2 border-primary-blue border-[3px] rounded-2xl mr-4"
            />
            <p className="text-xl font-bold ">%/ tahun</p>
          </div>
        </div>

        <div className="flex flex-col mb-8">
          <label htmlFor="" className="mb-3 text-xl font-bold">
            Berapa lama Anda konsisten menabung dan berinvestasi?{" "}
            <span className="text-primary-blue">(t)</span>
          </label>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="2"
              value={years}
              onChange={onChangeYearsHandler}
              className="text-center w-1/5 px-4 py-2 border-primary-blue border-[3px] rounded-2xl mr-4"
            />
            <p className="text-xl font-bold ">tahun</p>
          </div>
        </div>
        <div className="mb-4">
          <button className="px-8 py-2 mb-4 mr-4 text-lg font-semibold text-white bg-primary-blue rounded-2xl">
            Hitung
          </button>
          <button
            onClick={descFormulaHandler}
            className="px-8 py-2 mb-4 text-lg font-semibold text-white bg-primary-blue rounded-2xl"
          >
            Cara Kami Menghitung?
          </button>
        </div>
      </form>

      {futureValue && (
        <h1 className="mb-12 text-2xl font-bold">
          Uang yang akan Anda miliki pada {years} tahun lagi sebesar{" "}
          {toRupiah(futureValue)}
        </h1>
      )}

      {currentUser && (
        <button
          title="Simpan ke Tabel"
          onClick={handleAddInvesment}
          disabled={isPending}
          className="px-8 py-2 mb-8 mr-4 text-lg font-semibold text-white bg-primary-blue rounded-2xl"
        >
          Simpan ke Tabel
        </button>
      )}
    </>
  );
}

