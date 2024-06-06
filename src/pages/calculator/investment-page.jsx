import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { useState } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useInput, useInvestment } from "@/hooks";
import { toRupiah } from "@/lib/toRupiah";
import { addInvestment } from "@/services/calculators-service";
import auth from "@/lib/firebase/auth";

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

function InvestmentPage() {
  const [currentAmount, onChangeCurrentAmountHandler] = useInput("");
  const [monthlySaving, onChangeMonthlySavingHandler] = useInput("");
  const [annualReturn, onChangeAnnualReturnHandler] = useInput("");
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

    // function add to firestore
    const createdAt = new Date().toISOString();
    const { uid } = auth.currentUser;
    await addInvestment({
      P: P_value,
      PMT: PMT_value,
      r: r_value,
      t: t_value,
      hasil: futureValue,
      createdAt: createdAt,
      authorId: uid,
    });
  };

  const { data: investments } = useInvestment();
  console.log(investments);

  return (
    <div className="p-4 mb-8 sm:border-2 sm:p-8 lg:p-16 rounded-2xl">
      <h1 className="mb-8 text-2xl font-bold">
        Hitung Aset Masa Depan Anda dengan Nilai
        <span className="text-primary-blue"> Investasi</span> yang Anda Telah
        Terapkan
      </h1>
      <form onSubmit={calculateFutureValue}>
        <div className="flex flex-col mb-8">
          <label htmlFor="" className="mb-3 text-xl font-bold">
            Uang yang Anda miliki saat ini sebesar?{" "}
            <span className="text-primary-blue">(P)</span>
          </label>
          <div className="flex items-center">
            <p className="mr-4 text-xl font-bold">Rp</p>
            <input
              type="number"
              value={currentAmount}
              onChange={onChangeCurrentAmountHandler}
              placeholder="Contoh: 5000000"
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
              type="number"
              value={monthlySaving}
              onChange={onChangeMonthlySavingHandler}
              placeholder="Contoh: 1000000"
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
              type="number"
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
              type="number"
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

      <button className="px-8 py-2 mb-8 mr-4 text-lg font-semibold text-white bg-primary-blue rounded-2xl">
        Simpan ke Tabel
      </button>

      <div className="mb-8">
        <h1 className="mb-4 text-2xl font-bold">Tabel Penyimpanan Data</h1>
        <Table>
          <TableCaption>Daftar tersimpan perhitungan investasi.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">No.</TableHead>
              <TableHead>P</TableHead>
              <TableHead>PMT</TableHead>
              <TableHead>r</TableHead>
              <TableHead>t</TableHead>
              <TableHead className="text-right">Hasil</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {investments?.map((investment, index = 0) => (
              <TableRow key={investment.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{toRupiah(investment.P)}</TableCell>
                <TableCell>{toRupiah(investment.PMT)}</TableCell>
                <TableCell>{investment.r * 100}%</TableCell>
                <TableCell>{investment.t} tahun</TableCell>
                <TableCell className="text-right">Rp 52.556.993</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default InvestmentPage;
