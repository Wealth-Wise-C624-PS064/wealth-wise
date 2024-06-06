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
import { usePension } from "@/hooks";
import PensionFoundForm from "@/components/pension-found-form";

function PensionFundPage() {
  const { data: pensions, isLoading, isError, error } = usePension();

  return (
    <div className="p-4 mb-8 sm:border-2 sm:p-8 lg:p-16 rounded-2xl">
      <h1 className="mb-8 text-2xl font-bold">
        Rencanakan<span className="text-primary-blue"> Dana Pensiun</span> untuk
        Masa Tua Anda
      </h1>

      <div>
        <PensionFoundForm />
      </div>

      <div className="mb-8">
        <h1 className="mb-4 text-2xl font-bold">Tabel Penyimpanan Data</h1>
        {isLoading && <div>loading...</div>}
        {isError && <div>{error.message}</div>}
        {pensions && (
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
              {pensions
                .sort((a, b) => b.createdAt - a.createdAt)
                ?.map((pension, index = 0) => (
                  <TableRow key={pension.id}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>{toRupiah(pension.P)}</TableCell>
                    <TableCell>{pension.t} tahun</TableCell>
                    <TableCell>{pension.i * 100}%</TableCell>
                    <TableCell>{pension.r * 100}%</TableCell>
                    <TableCell className="text-right">
                      {toRupiah(pension.hasil)}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}

export default PensionFundPage;
