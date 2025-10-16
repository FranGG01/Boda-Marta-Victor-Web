export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden text-white text-center">
      {/* Imagen de fondo */}
      <img
        src="/images/foto1.jpg"    
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
      <div className="absolute inset-0 bg-black/40" />

      {/* Texto */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-light tracking-widest mb-4 font-[Playfair_Display]">
          MARTA & VÍCTOR
        </h1>
        <p className="text-xl italic font-[Playfair_Display]">13 · Diciembre · 2025</p>
      </div>
    </section>
  );
}
