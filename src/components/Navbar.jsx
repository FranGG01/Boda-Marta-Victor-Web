import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);

  const updateNavHeight = () => {
    if (!headerRef.current) return;
    document.documentElement.style.setProperty("--nav-h", `${headerRef.current.offsetHeight}px`);
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

  useEffect(() => {
    const r = requestAnimationFrame(updateNavHeight);
    return () => cancelAnimationFrame(r);
  }, [scrolled, open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const linkBase =
    "block py-2 md:py-0 hover:opacity-100 opacity-95 border-b-2 border-transparent md:pb-1 transition-all duration-300";
  const active = "border-white opacity-100 font-semibold";

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 bg-[#7c1c26] text-white font-[Playfair_Display] shadow-md"
    >
      <div className="hidden md:block">
        <div
          className={`overflow-hidden text-center transition-all duration-300 
          ${scrolled ? "max-h-0 opacity-0 py-0" : "max-h-16 opacity-100 py-4"}`}
        >
          <div className="tracking-[0.3em] text-3xl lg:text-4xl font-semibold select-none">
            M + V
          </div>
        </div>

        <nav className={`flex items-center justify-center transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
          <div className="flex flex-wrap items-center gap-8 uppercase tracking-[0.15em] text-[15px] lg:text-[16px]">
            <NavLink to="/" end className={({isActive}) => `${linkBase} ${isActive ? active : ""}`}>¡Bienvenidos!</NavLink>
            <NavLink to="/ceremonia" className={({isActive}) => `${linkBase} ${isActive ? active : ""}`}>Ceremonia</NavLink>
            <NavLink to="/finca" className={({isActive}) => `${linkBase} ${isActive ? active : ""}`}>Finca</NavLink>
            <NavLink to="/asistencia" className={({isActive}) => `${linkBase} ${isActive ? active : ""}`}>Asistencia</NavLink>
            <NavLink to="/buses" className={({isActive}) => `${linkBase} ${isActive ? active : ""}`}>Buses</NavLink>
            <NavLink to="/lista" className={({isActive}) => `${linkBase} ${isActive ? active : ""}`}>Lista de bodas</NavLink>
          </div>
        </nav>
      </div>

      <div className="md:hidden">
        <div className="h-14 px-4 flex items-center justify-between">
          <div className="tracking-[0.25em] text-lg font-semibold select-none">M · V</div>
          <button
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="p-2 -m-2"
          >
            {open ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {open && (
          <>
            <div className="fixed inset-0 bg-black/40" onClick={() => setOpen(false)} />
            <nav className="fixed inset-x-0 top-14 bottom-0 bg-[#7c1c26] overflow-y-auto">
              <div className="px-6 py-6 text-center uppercase tracking-[0.2em] text-[16px] space-y-4">
                <NavLink to="/" end onClick={() => setOpen(false)}
                  className={({isActive}) => `${linkBase} ${isActive ? active : ""}`}>¡Bienvenidos!</NavLink>
                <NavLink to="/ceremonia" onClick={() => setOpen(false)}
                  className={({isActive}) => `${linkBase} ${isActive ? active : ""}`}>Ceremonia</NavLink>
                <NavLink to="/finca" onClick={() => setOpen(false)}
                  className={({isActive}) => `${linkBase} ${isActive ? active : ""}`}>Finca</NavLink>
                <NavLink to="/asistencia" onClick={() => setOpen(false)}
                  className={({isActive}) => `${linkBase} ${isActive ? active : ""}`}>Asistencia</NavLink>
                <NavLink to="/buses" onClick={() => setOpen(false)}
                  className={({isActive}) => `${linkBase} ${isActive ? active : ""}`}>Buses</NavLink>
                <NavLink to="/lista" onClick={() => setOpen(false)}
                  className={({isActive}) => `${linkBase} ${isActive ? active : ""}`}>Lista de bodas</NavLink>
              </div>
            </nav>
          </>
        )}
      </div>
    </header>
  );
}
