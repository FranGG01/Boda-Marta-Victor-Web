import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkBase =
    "hover:opacity-80 border-b-2 border-transparent pb-1 transition-all duration-300";
  const active = "border-white opacity-100 font-semibold";

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#7c1c26] text-white py-8 z-50 shadow-md font-[Playfair_Display]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Logo / Iniciales */}
        <div className="flex justify-center text-5xl tracking-[0.3em] font-semibold">
          M + V
        </div>

        {/* Links */}
        <div className="flex items-center justify-center mt-5">
          <div className="flex flex-wrap items-center gap-8 text-[20px] tracking-[0.15em] uppercase">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : ""}`
              }
            >
              ¡Bienvenidos!
            </NavLink>
            <NavLink
              to="/ceremonia"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : ""}`
              }
            >
              Ceremonia
            </NavLink>
            <NavLink
              to="/finca"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : ""}`
              }
            >
              Finca
            </NavLink>
            <NavLink
              to="/asistencia"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : ""}`
              }
            >
              Asistencia
            </NavLink>
            <NavLink
              to="/buses"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : ""}`
              }
            >
              Buses
            </NavLink>
            <NavLink
              to="/lista"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : ""}`
              }
            >
              Lista de bodas
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
