import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "@/pages/home/home-page";
import ForumPage from "@/pages/forum/forum-page";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/forum" element={<ForumPage />} />
      </Routes>
    </Router>
  );
}
