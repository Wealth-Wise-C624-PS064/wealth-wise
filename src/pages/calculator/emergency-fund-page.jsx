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

function EmergencyFundPage() {
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
            <p className="font-bold text-xl mr-4">Rp</p>
            <input
              type="text"
              placeholder="Contoh: 5.000.000"
              className="w-3/5 px-4 py-2 border-primary-blue border-[3px] rounded-2xl"
            />
          </div>
        </div>

        <div className="flex flex-col mb-8">
          <label htmlFor="" className="font-bold text-xl mb-3">
            Uang yang dapat Anda tabung per bulan?{" "}
            <span className="text-primary-blue">(PMT)</span>
          </label>
          <div className="flex items-center">
            <p className="font-bold text-xl mr-4">Rp</p>
            <input
              type="text"
              placeholder="Contoh: 1.000.000"
              className="w-3/5 px-4 py-2 border-primary-blue border-[3px] rounded-2xl"
            />
          </div>
        </div>

        <div className="flex flex-col mb-8">
          <label htmlFor="" className="font-bold text-xl mb-3">
            Persen-an return investasi Anda per tahun?{" "}
            <span className="text-primary-blue">(r)</span>
          </label>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="5"
              className="text-center w-1/5 px-4 py-2 border-primary-blue border-[3px] rounded-2xl mr-4"
            />
            <p className="font-bold text-xl ">%/ tahun</p>
          </div>
        </div>

        <div className="flex flex-col mb-8">
          <label htmlFor="" className="font-bold text-xl mb-3">
            Berapa lama Anda konsisten menabung dan berinvestasi?{" "}
            <span className="text-primary-blue">(t)</span>
          </label>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="2"
              className="text-center w-1/5 px-4 py-2 border-primary-blue border-[3px] rounded-2xl mr-4"
            />
            <p className="font-bold text-xl ">tahun</p>
          </div>
        </div>

        <div className="">
          <button className="bg-primary-blue px-8 py-2 text-white rounded-2xl text-lg font-semibold mr-4 mb-4">
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

      <h1 className="font-bold text-2xl mb-12">
        Uang yang akan Anda miliki pada 2 tahun lagi sebesar Rp 52.556.993
      </h1>

      <button className="bg-primary-blue px-8 py-2 text-white rounded-2xl text-lg font-semibold mr-4 mb-8">
        Simpan ke Tabel
      </button>

      <div className="mb-8">
        <h1 className="font-bold text-2xl mb-4">Tabel Penyimpanan Data</h1>
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
            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell>Rp 5.000.000</TableCell>
              <TableCell>Rp 1.000.000</TableCell>
              <TableCell>5%</TableCell>
              <TableCell>2 tahun</TableCell>
              <TableCell className="text-right">Rp 52.556.993</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default EmergencyFundPage;
