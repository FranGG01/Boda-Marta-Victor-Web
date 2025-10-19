import Footer from "../components/Footer";

const FORM_URL_EMBED = "https://docs.google.com/forms/d/e/1FAIpQLSc7Fs2Xlt78lCGuQ2limzMul6J987gyC6ZYTNHZggNvXoC6jQ/viewform?embedded=true";
const FORM_URL_OPEN = "https://docs.google.com/forms/d/e/1FAIpQLSc7Fs2Xlt78lCGuQ2limzMul6J987gyC6ZYTNHZggNvXoC6jQ/viewform";

export default function Buses() {
  return (
    <main className="bg-gradient-to-b from-[#fdfaf6] via-[#faf7f2] to-[#fdfaf6] text-[#2b2b2b] font-[Playfair_Display]">
      {/* Cabecera floral mejorada */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#fdfaf6]/60 z-10" />
        <img
          src="/images/bgceremonia.jpg"
          alt=""
          className="w-full h-56 md:h-72 object-cover object-center scale-105 select-none pointer-events-none"
        />
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#fdfaf6] to-transparent z-20" />

        {/* Título superpuesto */}
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg tracking-wide">
            Transporte
          </h1>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">

          {/* Tarjetas de horarios */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Tarjeta Ida */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#e8dcc8] hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#d4af77] to-[#c4984f] rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4 text-[#c4984f]">Ida</h3>
              <div className="space-y-3 text-center">
                <p className="text-lg">
                  <span className="font-semibold">Salida:</span> Plaza Marqués de Salamanca
                </p>
                <p className="text-3xl font-bold text-[#2b2b2b]">14:00</p>
                <p className="text-sm text-gray-600">Dirección a la finca</p>
              </div>
            </div>

            {/* Tarjeta Vuelta */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#e8dcc8] hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8b7355] to-[#6b5945] rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4 text-[#8b7355]">Vuelta</h3>
              <div className="space-y-3 text-center">
                <p className="text-lg">
                  <span className="font-semibold">Desde:</span> La finca
                </p>
                <p className="text-3xl font-bold text-[#2b2b2b]">00:00</p>
                <p className="text-sm text-gray-600">Destino: Plaza de Castilla</p>
              </div>
            </div>
          </div>

          {/* Nota importante */}
          <div className="bg-gradient-to-r from-[#f5ebe0] to-[#f0e6d8] rounded-2xl p-8 shadow-md border-l-4 border-[#c4984f]">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-[#c4984f]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#2b2b2b]">Reserva tu plaza</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Por favor, confirmad vuestra plaza en el formulario de asistencia para garantizar vuestro sitio en el autobús.
                </p>

              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}