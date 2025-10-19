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
    <main className="bg-gradient-to-b from-[#fdfaf6] via-[#faf7f2] to-[#fdfaf6] text-[#2b2b2b] font-[Playfair_Display]">

      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#fdfaf6]/60 z-10" />
        <img
          src="/images/bgceremonia.jpg"
          alt="Decoración floral"
          className="w-full h-56 md:h-72 object-cover object-center scale-105 select-none pointer-events-none"
        />
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#fdfaf6] to-transparent z-20" />


      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-12">
            <p className="text-xl leading-relaxed mb-6 text-gray-700">
              A continuación lo celebraremos por todo lo alto en{" "}
              <span className="font-semibold text-[#c4984f]">{VENUE.nombre}</span>
            </p>

            <p className="text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
              La finca se encuentra en un entorno natural y tranquilo, ideal para disfrutar del
              día con familiares y amigos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#e8dcc8] hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#d4af77] to-[#c4984f] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#2b2b2b]">Parking</h3>
                <p className="text-sm text-gray-600">
                  Aparcamiento gratuito dentro de la finca
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#e8dcc8] hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8b9d7e] to-[#6b8260] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#2b2b2b]">Entorno Natural</h3>
                <p className="text-sm text-gray-600">
                  Rodeada de naturaleza y tranquilidad
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#e8dcc8] hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8b7355] to-[#6b5945] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#2b2b2b]">Celebración</h3>
                <p className="text-sm text-gray-600">
                  Espacio ideal para disfrutar en familia
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl border-2 border-[#e8dcc8] overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-[#d4af77] to-[#c4984f] p-6 md:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-semibold text-white">
                    {VENUE.nombre}
                  </h2>
                </div>
              </div>
              <p className="text-lg text-white/90 leading-relaxed">
                {VENUE.direccion}
              </p>
            </div>

            <div className="p-6 md:p-8 bg-gradient-to-br from-[#fdfaf6] to-[#f5ebe0]">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full rounded-full bg-gradient-to-r from-[#c4984f] to-[#d4af77] px-8 py-4 text-white font-semibold text-lg hover:from-[#b38840] hover:to-[#c4984f] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Cómo llegar
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-[#e8dcc8]">
            <MapEmbed address={VENUE.direccion} title="Mapa finca" />
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}