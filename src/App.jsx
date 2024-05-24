import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "@/pages/home/home-page";
import ForumPage from "@/pages/forum/forum-page";
import AboutPage from "@/pages/about/about-page";
import LoginPage from "@/pages/login/login-page";
import RegisterPage from "@/pages/register/register-page";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/tentang" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}
