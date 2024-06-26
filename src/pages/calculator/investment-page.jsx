import { useMemo } from "react";

import { useCurrentUser, useInvestment } from "@/hooks";

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
import InvestmentForm from "@/components/investment-form";
import { Fade } from "react-awesome-reveal";

function InvestmentPage() {
  const { currentUser } = useCurrentUser();
  const { data: investments } = useInvestment();

  const user = auth.currentUser;
  const investmentFilter = useMemo(() => {
    return investments?.filter(
      (investment) => investment.author_id === user?.uid
    );
  }, [investments, user]);

  return (
    <Fade delay={1e1} triggerOnce={true} damping={1e-1}>
      <div className="p-4 mb-8 sm:border-2 sm:p-8 lg:p-16 rounded-2xl">
        <h1 className="mb-8 text-2xl font-bold">
          Hitung Aset Masa Depan Anda dengan Nilai
          <span className="text-primary-blue"> Investasi</span> yang Anda Telah
          Terapkan
        </h1>

        <div>
          <InvestmentForm />
        </div>

        {currentUser && (
          <div className="mb-8">
            <h1 className="mb-4 text-2xl font-bold">Tabel Penyimpanan Data</h1>
            <Table>
              <TableCaption>
                Daftar tersimpan perhitungan investasi.
              </TableCaption>
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
                {investmentFilter &&
                  investmentFilter?.map((investment, index = 0) => (
                    <TableRow key={investment.id}>
                      <TableCell className="font-medium">{index + 1}</TableCell>
                      <TableCell>{toRupiah(investment.P)}</TableCell>
                      <TableCell>{toRupiah(investment.PMT)}</TableCell>
                      <TableCell>{(investment.r * 100).toFixed(2)}%</TableCell>
                      <TableCell>{investment.t} tahun</TableCell>
                      <TableCell className="text-right">
                        {toRupiah(investment.hasil)}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </Fade>
  );
}

export default InvestmentPage;
