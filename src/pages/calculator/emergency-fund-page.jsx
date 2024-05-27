import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import useInput from "@/hooks/useInput";
import { toRupiah } from "@/lib/toRupiah";

const descFormulaHandler = (event) => {
  event.preventDefault();
  Swal.fire({
    color: "#000",
    background: "rgba(255,255,255, 0.95)",
    backdrop: `rgba(42,157,242,0.4)`,
    confirmButtonColor: "#16db3d",
    title: `<strong>Formula Hitung <span style="color:#2A9DF2;">Dana Darurat</span></strong>`,
    icon: "info",
    html: `
      <b>
      Berikut ini adalah semua kemungkinan yang dapat terjadi:
      </b>
      <br />
      <br />
      <h2>1. Anda hanya menanggung diri sendiri. Dana Darurat Anda adalah 6 kali pengeluaran bulanan.</h2>
      <br />
      <h2>2. Anda belum menikah, tetapi punya tanggungan lain. Dana Darurat Anda adalah 9 kali pengeluaran bulanan.</h2>
      <br />
      <h2>3. Anda sudah menikah, tetapi tidak punya tanggungan lain. Dana Darurat Anda adalah 9 kali pengeluaran bulanan.</h2>
      <br />
      <h2>4. Anda sudah menikah dan punya tanggungan lain. Dana Darurat Anda adalah 12 kali pengeluaran bulanan.</h2>
      <br />
      
      `,
    focusConfirm: false,
    confirmButtonText: `
       Okay
      `,
  });
};

function EmergencyFundPage() {
  // Menyimpan status pengguna (menikah/belum menikah)
  const [status, setStatus] = useState("");
  // Menyimpan tanggungan pengguna (punya/tidak punya)
  const [dependents, setDependents] = useState("");
  // Menyimpan pengeluaran bulanan pengguna
  const [monthlyExpenses, onChangeMonthlyExpensesHandler] = useInput("");
  // Menyimpan hasil perhitungan dana darurat
  const [emergencyFund, setEmergencyFund] = useState(null);

  const calculateEmergencyFund = (event) => {
    event.preventDefault();
    let fundMultiplier = 0;
    // Set the fundMultiplier based on status and dependents
    if (status === "belumMenikah" && dependents === "tidakPunya") {
      fundMultiplier = 6;
    } else if (status === "belumMenikah" && dependents === "punya") {
      fundMultiplier = 9;
    } else if (status === "sudahMenikah" && dependents === "tidakPunya") {
      fundMultiplier = 9;
    } else if (status === "sudahMenikah" && dependents === "punya") {
      fundMultiplier = 12;
    }

    // Calculating emergencyFund
    const emergencyFundAmount = monthlyExpenses * fundMultiplier;

    setEmergencyFund(emergencyFundAmount);
  };

  return (
    <div className="sm:border-2 p-4 sm:p-8 lg:p-16 rounded-2xl mb-8">
      <h1 className="text-2xl font-bold mb-8">
        Hitung <span className="text-primary-blue"> Dana Darurat</span> Minimal
        Yang Anda Butuhkan
      </h1>
      <form>
        <div className="flex flex-col mb-8">
          <label htmlFor="" className="font-bold text-xl mb-3">
            Apa status Anda?
          </label>
          <div className="flex items-center">
            <button
              onClick={(event) => {
                event.preventDefault();
                setStatus("belumMenikah");
              }}
              className={`px-8 py-2 text-white rounded-2xl text-lg font-semibold mr-4 ${
                status === "belumMenikah" ? "bg-blue-800" : "bg-primary-blue"
              }`}
            >
              Tidak/ Belum Menikah
            </button>
            <button
              onClick={(event) => {
                event.preventDefault();
                setStatus("sudahMenikah");
              }}
              className={`px-8 py-2 text-white rounded-2xl text-lg font-semibold mr-4 ${
                status === "sudahMenikah" ? "bg-blue-800" : "bg-primary-blue"
              }`}
            >
              Sudah Menikah
            </button>
          </div>
        </div>

        <div className="flex flex-col mb-8">
          <label htmlFor="" className="font-bold text-xl mb-3">
            Apakah mungkin Anda punya tanggungan lain, seperti anak, orangtua,
            ataupun kerabat?
          </label>
          <div className="flex items-center">
            <button
              onClick={(event) => {
                event.preventDefault();
                setDependents("tidakPunya");
              }}
              className={`px-8 py-2 text-white rounded-2xl text-lg font-semibold mr-4 ${
                dependents === "tidakPunya" ? "bg-blue-800" : "bg-primary-blue"
              }`}
            >
              Tidak/ Belum Punya
            </button>
            <button
              onClick={(event) => {
                event.preventDefault();
                setDependents("punya");
              }}
              className={`px-8 py-2 text-white rounded-2xl text-lg font-semibold mr-4 ${
                dependents === "punya" ? "bg-blue-800" : "bg-primary-blue"
              }`}
            >
              Punya
            </button>
          </div>
        </div>

        <div className="flex flex-col mb-8">
          <label htmlFor="" className="font-bold text-xl mb-3">
            Berapa Pengeluaran Bulanan Anda?
          </label>
          <div className="flex items-center">
            <p className="font-bold text-xl mr-4">Rp</p>
            <input
              type="text"
              value={monthlyExpenses}
              onChange={onChangeMonthlyExpensesHandler}
              placeholder="Contoh: 3000000"
              className="w-3/5 px-4 py-2 border-primary-blue border-[3px] rounded-2xl"
            />
          </div>
        </div>

        <div className="mb-4">
          <button
            onClick={calculateEmergencyFund}
            className="bg-primary-blue px-8 py-2 text-white rounded-2xl text-lg font-semibold mr-4 mb-4"
          >
            Hitung
          </button>
          <button
            onClick={descFormulaHandler}
            className="bg-primary-blue px-8 py-2 text-white rounded-2xl text-lg font-semibold mb-4"
          >
            Cara Kami Menghitung?
          </button>
        </div>
      </form>

      {emergencyFund && (
        <h1 className="font-bold text-2xl mb-12">
          Dana Darurat Minimal Anda adalah {toRupiah(emergencyFund.toFixed(2))}
        </h1>
      )}

      <button className="bg-primary-blue px-8 py-2 text-white rounded-2xl text-lg font-semibold mr-4 mb-8">
        Simpan ke Tabel
      </button>

      <div className="mb-8">
        <h1 className="font-bold text-2xl mb-4">Tabel Penyimpanan Data</h1>
        <Table>
          <TableCaption>
            Daftar tersimpan perhitungan dana darurat.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">No.</TableHead>
              <TableHead>Menikah</TableHead>
              <TableHead>Tanggungan</TableHead>
              <TableHead>Bulanan</TableHead>
              <TableHead className="text-right">Hasil</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell>Belum Menikah</TableCell>
              <TableCell>Tidak/ Belum Punya</TableCell>
              <TableCell>Rp 3.000.000</TableCell>
              <TableCell className="text-right">Rp 18.000.000</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default EmergencyFundPage;
