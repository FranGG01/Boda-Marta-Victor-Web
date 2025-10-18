import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Ceremonia from "./pages/Ceremonia";
import Finca from "./pages/Finca";
import Asistencia from "./pages/Asistencia";
import Buses from "./pages/Buses";
import Lista from "./pages/Lista";

export default function App() {
  return (
    <>
      <Navbar />
      <div style={{ height: "var(--nav-h, 120px)" }} />

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
