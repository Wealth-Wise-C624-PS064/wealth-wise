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
    title: `<strong>Formula Hitung <span style="color:#2A9DF2;">Dana Darurat</span></strong>`,
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
            <button className="bg-primary-blue px-8 py-2 text-white rounded-2xl text-lg font-semibold mr-4 ">
              Tidak/ Belum Menikah
            </button>
            <button className="bg-primary-blue px-8 py-2 text-white rounded-2xl text-lg font-semibold mr-4 ">
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
            <button className="bg-primary-blue px-8 py-2 text-white rounded-2xl text-lg font-semibold mr-4 ">
              Tidak/ Belum Punya
            </button>
            <button className="bg-primary-blue px-8 py-2 text-white rounded-2xl text-lg font-semibold mr-4 ">
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
              placeholder="Contoh: 3.000.000"
              className="w-3/5 px-4 py-2 border-primary-blue border-[3px] rounded-2xl"
            />
          </div>
        </div>

        <div className="mb-4">
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
        Dana Darurat Minimal Anda adalah Rp 18.000.000{" "}
      </h1>

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
