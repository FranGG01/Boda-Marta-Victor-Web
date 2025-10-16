import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Ceremonia from "./pages/Ceremonia";
import Finca from "./pages/Finca";
import Asistencia from "./pages/Asistencia";
import Buses from "./pages/Buses";
import Lista from "./pages/Lista";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className="h-[96px]" /> {/* separador por navbar fijo (ajusta si cambias alturas) */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ceremonia" element={<Ceremonia />} />
        <Route path="/finca" element={<Finca />} />
        <Route path="/asistencia" element={<Asistencia />} />
        <Route path="/buses" element={<Buses />} />
        <Route path="/lista" element={<Lista />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
