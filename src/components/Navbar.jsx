import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  // Actualiza una CSS var con la altura real del navbar para el spacer
  const updateNavHeight = () => {
    if (!headerRef.current) return;
    const h = headerRef.current.offsetHeight;
    document.documentElement.style.setProperty("--nav-h", `${h}px`);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", updateNavHeight);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateNavHeight);
    };
  }, []);

  // Recalcula altura cuando cambia el estado (se expande/colapsa)
  useEffect(() => {
    // espera al final del frame para que tailwind aplique clases y medir bien
    const r = requestAnimationFrame(updateNavHeight);
    return () => cancelAnimationFrame(r);
  }, [scrolled]);

  const linkBase =
    "hover:opacity-100 opacity-95 border-b-2 border-transparent pb-1 transition-all duration-300";
  const active = "border-white opacity-100 font-semibold";

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 bg-[#7c1c26] text-white font-[Playfair_Display] shadow-md"
    >
      {/* Fila superior: M + V (se oculta al hacer scroll) */}
      <div
        className={`overflow-hidden text-center transition-all duration-300 
        ${scrolled ? "max-h-0 opacity-0 py-0" : "max-h-16 opacity-100 py-4"}`}
      >
        <div className="tracking-[0.3em] text-3xl md:text-4xl font-semibold select-none">
          M + V
        </div>
      </div>

      <nav
        className={`flex items-center justify-center transition-all duration-300
        ${scrolled ? "py-7" : "py-4"}`}
      >
        <div className="flex flex-wrap items-center gap-6 md:gap-8 uppercase tracking-[0.15em] text-[14px] md:text-[16px]">
          <NavLink to="/" end className={({isActive}) => `${linkBase} ${isActive ? active : ""}`}>
            ¡Bienvenidos!
          </NavLink>
          <NavLink to="/ceremonia" className={({isActive}) => `${linkBase} ${isActive ? active : ""}`}>
            Ceremonia
          </NavLink>
          <NavLink to="/finca" className={({isActive}) => `${linkBase} ${isActive ? active : ""}`}>
            Finca
          </NavLink>
          <NavLink to="/asistencia" className={({isActive}) => `${linkBase} ${isActive ? active : ""}`}>
            Asistencia
          </NavLink>
          <NavLink to="/buses" className={({isActive}) => `${linkBase} ${isActive ? active : ""}`}>
            Buses
          </NavLink>
          <NavLink to="/lista" className={({isActive}) => `${linkBase} ${isActive ? active : ""}`}>
            Lista de bodas
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
