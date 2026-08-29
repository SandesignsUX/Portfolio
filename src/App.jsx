import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import VPPCaseStudy from "./pages/work/vppCaseStudy";
import SharpCaseStudy from "./pages/work/SharpCaseStudy";
import VenyaCaseStudy from "./pages/work/VenyaCaseStudy";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work/vpp" element={<VPPCaseStudy />} />
        <Route path="/work/sharp" element={<SharpCaseStudy />} />
        <Route path="/work/venya" element={<VenyaCaseStudy />} />
      </Routes>
    </BrowserRouter>
  );
}
