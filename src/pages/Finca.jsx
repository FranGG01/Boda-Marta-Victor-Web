import Footer from "../components/Footer";
import MapEmbed from "../components/MapEmbed";
const VENUE = {
  nombre: "Finca Las Jarillas",
  direccion: "Finca Las Jarillas, M-607, Km19, 900, Fuencarral-El Pardo, 28049 Madrid",
  lat: 40.551436, 
  lng: -3.760741, 
};

const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  VENUE.direccion
)}&travelmode=driving`;

export default function Finca() {
  return (
    <main className="bg-[#fdfaf6] text-[#2b2b2b] font-[Playfair_Display]">
      
      <section className="relative w-full bg-[#fdfaf6] overflow-hidden">
        <img
          src="/images/bgceremonia.jpg" 
          alt="Decoración floral"
          className="w-full h-48 md:h-64 object-cover object-center scale-110 select-none pointer-events-none"
        />
        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#fdfaf6] to-transparent" />
      </section>

      <section className="px-6 py-14">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">Finca</h1>

          <p className="text-lg leading-relaxed mb-5">
            A continuación lo celebraremos por todo lo alto en{" "}
            <strong>{VENUE.nombre}</strong>. Para todos aquellos que vengáis en coche,
            no os preocupéis: se puede aparcar dentro de la finca sin problema.
          </p>

          <p className="text-lg leading-relaxed mb-10">
            La finca se encuentra en un entorno natural y tranquilo, ideal para disfrutar del
            día con familiares y amigos.
          </p>

          <div className="mx-auto max-w-xl grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-6">
            <div>
              <h4 className="text-2xl font-semibold leading-tight">
                {VENUE.nombre}
              </h4>
              <p className="mt-2 text-base leading-relaxed">{VENUE.direccion}</p>
            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/0 bg-[#fdfaf6] px-6 py-3 text-[#7c1c26] tracking-wider uppercase text-sm hover:underline transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
              Ver dirección ↗
            </a>
          </div>
         
        </div>
        <MapEmbed address={VENUE.direccion} title="Mapa finca" />
      </section>

      <Footer />
    </main>
  );
}
