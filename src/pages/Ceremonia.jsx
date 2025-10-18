import Footer from "../components/Footer";

const VENUE = {
  nombre: "Iglesia Colegio Nuestra Señora del Pilar",
  direccion: "Calle Príncipe de Vergara, 41, 28001 Madrid",
  lat: 40.425352, 
  lng: -3.684241, 
};

const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  VENUE.direccion
)}&travelmode=driving`;

export default function Ceremonia() {
  return (
    <main className="bg-[#fdfaf6] text-[#2b2b2b] font-[Playfair_Display]">
{/* Banda floral superior */}
<section className="relative w-full bg-[#fdfaf6] overflow-hidden">
  <img
    src="/images/bgceremonia.jpg"
    alt="Decoración floral"
    className="w-full h-48 md:h-64 object-cover object-center scale-110 select-none pointer-events-none"
  />
  <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#fdfaf6] to-transparent" />
</section>




      {/* Contenido */}
      <section className="px-6 py-14">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">Ceremonia</h1>

          <p className="text-lg leading-relaxed mb-5">
            La ceremonia tendrá lugar en la <strong>{VENUE.nombre}</strong> a las <strong>13:00h</strong>.
            Para asegurarnos de cumplir con los horarios que nos pide la iglesia,
            <strong> os rogamos estar allí a las 12:45h</strong>.
          </p>

          <p className="text-lg leading-relaxed mb-10">
            Si vienes en coche, la zona puede ser algo complicada para aparcar. Te recomendamos
            los siguientes parkings cercanos:
          </p>

          {/* Parkings */}
          <div className="space-y-8 text-base">
            <div>
              <h3 className="text-xl font-semibold mb-1">Parking Público El Pilar</h3>
              <p>Calle de Ayala, 64.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Parking Gallardo Nuñez</h3>
              <p>Calle de Don Ramón de la Cruz, 38.</p>
            </div>
          </div>

          {/* Separador sutil */}
          <div className="mx-auto my-12 h-px w-40 bg-[#2b2b2b]/20" />

          {/* Tarjeta dirección + botón ruta */}
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
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/0 bg-[#fdfaf6] px-6 py-3 text-white tracking-wider uppercase text-sm "
            >
              {/* iconito señalización */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              Ver dirección ↗
            </a>
          </div>
        </div>
        <div className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#2b2b2b]/10">
  <iframe
    title="Mapa ceremonia"
    src={`https://www.google.com/maps?q=${encodeURIComponent(VENUE.direccion)}&output=embed`}
    className="h-full w-full"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

      </section>
      
      <Footer />
    </main>
  );
}
