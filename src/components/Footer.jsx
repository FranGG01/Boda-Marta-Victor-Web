export default function Footer() {
  return (
    <footer className="bg-[#7c1c26] text-white text-center py-10 font-[Playfair_Display]">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-2 px-4">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-widest">
          Marta & Víctor
        </h2>
        <p className="text-sm uppercase tracking-[0.2em]">
          13 · Diciembre · 2025 · Madrid
        </p>

        <div className="mt-4 text-sm opacity-90 flex flex-col md:flex-row items-center justify-center gap-3">
          <span>Con todo nuestro amor</span>
          <span className="hidden md:inline">·</span>
          <span>Hecho con ilusión y cariño 💍</span>
        </div>

        <p className="mt-6 text-xs opacity-70">
          © 2025 Marta & Víctor — Web creada con ❤️ por su familia
        </p>
      </div>
    </footer>
  );
}
