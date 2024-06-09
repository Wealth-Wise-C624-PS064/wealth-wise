import { useMemo } from "react";

import { useCurrentUser, usePension } from "@/hooks";

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
import PensionFoundForm from "@/components/pension-found-form";

function PensionFundPage() {
  const { currentUser } = useCurrentUser();
  const { data: pensions } = usePension();

  const user = auth.currentUser;

  const pensionFilter = useMemo(() => {
    return pensions?.filter((pension) => pension.author_id === user?.uid);
  }, [pensions, user]);

  return (
    <div className="p-4 mb-8 sm:border-2 sm:p-8 lg:p-16 rounded-2xl">
      <h1 className="mb-8 text-2xl font-bold">
        Rencanakan<span className="text-primary-blue"> Dana Pensiun</span> untuk
        Masa Tua Anda
      </h1>

      <div>
        <PensionFoundForm />
      </div>

      {currentUser && (
        <div className="mb-8">
          <h1 className="mb-4 text-2xl font-bold">Tabel Penyimpanan Data</h1>
          <Table>
            <TableCaption>Daftar tersimpan perhitungan investasi.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">No.</TableHead>
                <TableHead>P</TableHead>
                <TableHead>t</TableHead>
                <TableHead>i</TableHead>
                <TableHead>r</TableHead>
                <TableHead className="text-right">Hasil</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pensionFilter &&
                pensionFilter?.map((pension, index = 0) => (
                  <TableRow key={pension.id}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>{toRupiah(pension.P)}</TableCell>
                    <TableCell>{pension.t} tahun</TableCell>
                    <TableCell>{pension.i * 100} %</TableCell>
                    <TableCell>{pension.r * 100} %</TableCell>
                    <TableCell className="text-right">
                      {toRupiah(pension.hasil)}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}

export default PensionFundPage;
