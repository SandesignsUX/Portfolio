import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import VPPCaseStudy from "./pages/work/vppCaseStudy";
import SharpCaseStudy from "./pages/work/SharpCaseStudy";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work/vpp" element={<VPPCaseStudy />} />
        <Route path="/work/sharp" element={<SharpCaseStudy />} />
      </Routes>
    </BrowserRouter>
  );
}
