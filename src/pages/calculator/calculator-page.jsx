import BaseLayout from "@/layouts/base-layout";
import { Link } from "react-router-dom";

function CalculatorPage() {
  return (
    <BaseLayout>
      <div>
        <Link to="/kalkulator/investasi">Kalkulator Investasi</Link>
        <Link to="/kalkulator/dana-pensiun">Dana Pensiun</Link>
        <Link to="/kalkulator/dana-darurat">Dana Darurat</Link>
      </div>
    </BaseLayout>
  );
}

export default CalculatorPage;
