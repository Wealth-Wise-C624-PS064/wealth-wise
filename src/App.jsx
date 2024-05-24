import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "@/pages/home/home-page";
import ForumPage from "@/pages/forum/forum-page";
import AboutPage from "@/pages/about/about-page";
import LoginPage from "@/pages/login/login-page";
import RegisterPage from "@/pages/register/register-page";
import CalculatorPage from "@/pages/calculator/calculator-page";
import InvestmentPage from "@/pages/calculator/investment-page";
import PensionFundPage from "./pages/calculator/pension-fund-page";
import EmergencyFundPage from "./pages/calculator/emergency-fund-page";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kalkulator">
          <Route index={true} element={<CalculatorPage />} />
          <Route path="investasi" element={<InvestmentPage />} />
          <Route path="dana-pensiun" element={<PensionFundPage />} />
          <Route path="dana-darurat" element={<EmergencyFundPage />} />
        </Route>
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/tentang" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}
