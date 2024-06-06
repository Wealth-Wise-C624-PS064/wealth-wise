import { useMemo } from "react";

import { useEmergency } from "@/hooks";

import auth from "@/lib/firebase/auth";
import { toRupiah } from "@/lib/toRupiah";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import EmergencyFundForm from "@/components/emergency-fund-form";

function EmergencyFundPage() {
  const { data: emergencies } = useEmergency();

  const currentUser = auth.currentUser;
  const emergencyFilter = useMemo(() => {
    return emergencies?.filter(
      (emergency) => emergency.author_id === currentUser?.uid
    );
  }, [emergencies, currentUser]);

  return (
    <div className="p-4 mb-8 sm:border-2 sm:p-8 lg:p-16 rounded-2xl">
      <h1 className="mb-8 text-2xl font-bold">
        Hitung <span className="text-primary-blue"> Dana Darurat</span> Minimal
        Yang Anda Butuhkan
      </h1>

      <div>
        <EmergencyFundForm />
      </div>

      <div className="mb-8">
        <h1 className="mb-4 text-2xl font-bold">Tabel Penyimpanan Data</h1>
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
            {emergencyFilter &&
              emergencyFilter?.map((emergency, index = 0) => (
                <TableRow key={emergency.id}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>
                    {emergency?.menikah === "sudahMenikah"
                      ? "Sudah Menikah"
                      : "Tidak / Belum Menikah"}
                  </TableCell>
                  <TableCell>
                    {emergency?.tanggungan === "tidakPunya"
                      ? "Tidak / Belum Punya"
                      : "Punya"}
                  </TableCell>
                  <TableCell>{toRupiah(emergency.bulanan)}</TableCell>
                  <TableCell className="text-right">
                    {toRupiah(emergency.hasil)}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default EmergencyFundPage;
