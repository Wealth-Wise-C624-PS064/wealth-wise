import { useState } from "react";

import { useAddPensionFund, useCurrentUser, useInput } from "@/hooks";
import { toRupiah } from "@/lib/toRupiah";

import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

export default function PensionFoundForm() {
  const [monthlyExpensesLater, onChangeMonthlyExpensesLaterHandler] =
    useInput("");
  const [yearsLater, onChangeYearsLaterHandler, setYearsLater] = useInput("");
  const [inflation, onChangeInflationHandler, setInflation] = useInput("");
  const [annualReturn, onChangeAnnualReturnHandler, setAnnualReturn] =
    useInput("");
  const [pensionFund, setPensionFund] = useState(null);

  const { addPensionFund, isPending } = useAddPensionFund();

  const calculatePensionFund = async (event) => {
    event.preventDefault();

    // removing the comma from the numbers and giving declarations
    const MEL_value = parseFloat(monthlyExpensesLater.replace(/[,.]/g, ""));
    const t_value = parseFloat(yearsLater);
    const i_value = parseFloat(inflation) / 100;
    const r_value = parseFloat(annualReturn) / 100;

    if (
      isNaN(MEL_value) ||
      isNaN(t_value) ||
      isNaN(i_value) ||
      isNaN(r_value)
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Silakan masukkan semua nilai dengan benar!",
        confirmButtonColor: "#2A9DF2",
      });
      return;
    }

    const M_value = MEL_value * Math.pow(1 + i_value, t_value);
    const Y_value = M_value * 12;

    let pensionFundAmount;

    if (r_value > i_value) {
      pensionFundAmount = (100 / (r_value * 100 - i_value * 100)) * Y_value;
    } else {
      pensionFundAmount = 25 * Y_value;
    }

    setPensionFund(pensionFundAmount.toFixed(2));
  };

  const descFormulaHandler = (event) => {
    event.preventDefault();
    Swal.fire({
      color: "#000",
      background: "rgba(255,255,255, 0.95)",
      backdrop: `rgba(42,157,242,0.4)`,
      confirmButtonColor: "#16db3d",
      title: `<strong>Formula Hitung <span style="color:#2A9DF2;">Dana Pensiun</span></strong>`,
      icon: "info",
      html: `
      <b>
      Pertama, ketahui M sebagai Future Value dari Pengeluaran Bulanan
      </b>
      <h2>
      M = MEL * (1 + i)<sup>t</sup>
      </h2>
      
      <br />
      <b>
      Kedua, ketahui Y sebagai Pengeluaran Tahunan
      </b>
      <h2>
      Y = M * 12 
      </h2>

      <br />

      <b>
      Berdasarkan Aturan 4% Rule,
      </b>
      <h2>
      jika r > i, maka Dana Pensiun = [100/(r- i)] * Y
      </h2>
      <h2>
      jika r <= i, maka Dana Pensiun = 25 * Y
      </h2>
      
      `,
      focusConfirm: false,
      confirmButtonText: `
       Okay
      `,
    });
  };

  const handleAddPensionFund = () => {
    const MEL_value = parseFloat(monthlyExpensesLater.replace(/[,.]/g, ""));
    const t_value = parseFloat(yearsLater);
    const i_value = parseFloat(inflation) / 100;
    const r_value = parseFloat(annualReturn) / 100;

    if (
      isNaN(MEL_value) ||
      isNaN(t_value) ||
      isNaN(i_value) ||
      isNaN(r_value)
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Silakan masukkan semua nilai dengan benar!",
      });
      return;
    }

    const M_value = MEL_value * Math.pow(1 + i_value, t_value);
    const Y_value = M_value * 12;

    let pensionFundAmount;

    if (r_value > i_value) {
      pensionFundAmount = (100 / (r_value * 100 - i_value * 100)) * Y_value;
    } else {
      pensionFundAmount = 25 * Y_value;
    }

    setPensionFund(pensionFundAmount.toFixed(2));

    // Save to firestore
    addPensionFund(
      {
        P: MEL_value,
        t: t_value,
        i: i_value,
        r: r_value,
        hasil: pensionFundAmount,
      },
      {
        onSettled: () => {
          setAnnualReturn("");
          setInflation("");
          setYearsLater("");
        },
      }
    );
  };

  const { currentUser } = useCurrentUser();

  return (
    <>
      <form onSubmit={calculatePensionFund}>
        <div className="flex flex-col mb-8">
          <label htmlFor="" className="mb-3 text-xl font-bold">
            Rencana pengeluaran bulanan saat Anda pensiun nanti?{" "}
            <span className="text-primary-blue">(MEL)</span>
          </label>
          <div className="flex items-center">
            <p className="mr-4 text-xl font-bold">Rp</p>
            <input
              type="text"
              placeholder="Contoh: 5.000.000"
              value={monthlyExpensesLater}
              onChange={onChangeMonthlyExpensesLaterHandler}
              className="w-3/5 px-4 py-2 border-primary-blue border-[3px] rounded-2xl"
            />
          </div>
        </div>

        <div className="flex flex-col mb-8">
          <label htmlFor="" className="mb-3 text-xl font-bold">
            Berapa tahun lagi Anda ingin pensiun?{" "}
            <span className="text-primary-blue">(t)</span>
          </label>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="2"
              value={yearsLater}
              onChange={onChangeYearsLaterHandler}
              className="text-center w-1/5 px-4 py-2 border-primary-blue border-[3px] rounded-2xl mr-4"
            />
            <p className="text-xl font-bold ">tahun</p>
          </div>
        </div>

        <div className="flex flex-col mb-8">
          <label htmlFor="" className="mb-3 text-xl font-bold">
            Asumsi Inflasi di Indonesia (Rerata inflasi 10 tahun terakhir yaitu
            3,59%/tahun) <span className="text-primary-blue">(i)</span>
          </label>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="5"
              value={inflation}
              onChange={onChangeInflationHandler}
              className="text-center w-1/5 px-4 py-2 border-primary-blue border-[3px] rounded-2xl mr-4"
            />
            <p className="text-xl font-bold ">%/ tahun</p>
          </div>
        </div>

        <div className="flex flex-col mb-8">
          <label htmlFor="" className="mb-3 text-xl font-bold">
            Persen-an return investasi Anda per tahun?
            <span className="text-primary-blue"> (r)</span>
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
        <div className="mb-4">
          <button
            title="Hitung"
            type="submit"
            className="px-8 py-2 mb-4 mr-4 text-lg font-semibold text-white bg-primary-blue rounded-2xl"
          >
            Hitung
          </button>
          <button
            title="Cara Menghitung?"
            type="click"
            onClick={descFormulaHandler}
            className="px-8 py-2 mb-4 text-lg font-semibold text-white bg-primary-blue rounded-2xl"
          >
            Cara Kami Menghitung?
          </button>
        </div>
      </form>
      {pensionFund && (
        <h1 className="mb-12 text-2xl font-bold">
          Berdasarkan 4% rule, Anda harus memiliki setidaknya{" "}
          {toRupiah(pensionFund)} sebagai Dana Pensiun
        </h1>
      )}

      {currentUser && (
        <button
          title="Simpan"
          onClick={handleAddPensionFund}
          className="px-8 py-2 mb-8 mr-4 text-lg font-semibold text-white bg-primary-blue rounded-2xl"
          disabled={isPending}
        >
          Simpan ke Tabel
        </button>
      )}
    </>
  );
}

