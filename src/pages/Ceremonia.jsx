import Footer from "../components/Footer";
import MapEmbed from "../components/MapEmbed";

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

          <div className="bg-white rounded-3xl shadow-2xl border-2 border-[#e8dcc8] overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-[#d4af77] to-[#c4984f] p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 className="text-3xl font-bold text-white">13:00h</h2>
              </div>
              <p className="text-lg text-white/95">
                La ceremonia tendrá lugar en la <span className="font-semibold">{VENUE.nombre}</span>
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-[#fdfaf6] to-[#f5ebe0]">
              <div className="bg-gradient-to-r from-[#f5ebe0] to-[#f0e6d8] rounded-2xl p-6 border-l-4 border-[#c4984f]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 text-[#c4984f]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-[#2b2b2b] mb-2">
                      Puntualidad importante
                    </p>
                    <p className="text-base text-gray-700">
                      Para asegurarnos de cumplir con los horarios que nos pide la iglesia,
                      <strong className="text-[#c4984f]"> os rogamos estar allí a las 12:45h</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-3 text-[#2b2b2b]">
                ¿Vienes en coche?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                La zona puede ser algo complicada para aparcar. Te recomendamos estos parkings cercanos:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#e8dcc8] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#d4af77] to-[#c4984f] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#2b2b2b]">
                      Parking Público El Pilar
                    </h3>
                    <p className="text-base text-gray-600">
                      Calle de Ayala, 64
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#e8dcc8] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8b7355] to-[#6b5945] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#2b2b2b]">
                      Parking Gallardo Núñez
                    </h3>
                    <p className="text-base text-gray-600">
                      Calle de Don Ramón de la Cruz, 38
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#c4984f] to-transparent"></div>
            <div className="mx-4">
              <svg className="w-6 h-6 text-[#c4984f]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
              </svg>
            </div>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#c4984f] to-transparent"></div>
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
                  <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
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
            <MapEmbed address={VENUE.direccion} title="Mapa ceremonia" />
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}