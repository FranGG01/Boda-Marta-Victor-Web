import Footer from "../components/Footer";

const PHONES = {
  marta: { label: "Marta", num: "681278905" },
  victor: { label: "Víctor", num: "628444584" },
};

const FORM_URL_EMBED = "https://docs.google.com/forms/d/e/1FAIpQLSc7Fs2Xlt78lCGuQ2limzMul6J987gyC6ZYTNHZggNvXoC6jQ/viewform?embedded=true";
const FORM_URL_OPEN = "https://docs.google.com/forms/d/e/1FAIpQLSc7Fs2Xlt78lCGuQ2limzMul6J987gyC6ZYTNHZggNvXoC6jQ/viewform";

export default function Asistencia() {
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
              Para facilitar la organización, os pedimos que nos ayudéis rellenando el siguiente formulario.
            </p>

            <div className="inline-block bg-gradient-to-r from-[#f5ebe0] to-[#f0e6d8] rounded-2xl px-8 py-4 shadow-md border border-[#e8dcc8] mb-8">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-[#c4984f] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
                <p className="text-base font-medium">
                  Dentro podrás indicar si usarás autobús (ida, vuelta o ambos)
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-center mb-6 text-[#2b2b2b]">
              ¿Tienes dudas?
            </h2>
            <p className="text-center text-gray-600 mb-6">
              Estaremos encantados de resolverlas. No dudes en contactarnos:
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">

              <a
                href={`tel:${PHONES.marta.num}`}
                className="bg-white rounded-2xl shadow-lg p-6 border border-[#e8dcc8] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#d4af77] to-[#c4984f] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-xl font-semibold text-[#2b2b2b] mb-1">{PHONES.marta.label}</p>
                    <p className="text-lg text-gray-600">{PHONES.marta.num.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3")}</p>
                  </div>
                </div>
              </a>

              <a
                href={`tel:${PHONES.victor.num}`}
                className="bg-white rounded-2xl shadow-lg p-6 border border-[#e8dcc8] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#8b7355] to-[#6b5945] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-xl font-semibold text-[#2b2b2b] mb-1">{PHONES.victor.label}</p>
                    <p className="text-lg text-gray-600">{PHONES.victor.num.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3")}</p>
                  </div>
                </div>
              </a>
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

          <div id="form-asistencia" className="mb-8">
            <div className="rounded-3xl overflow-hidden border-2 border-[#e8dcc8] shadow-2xl bg-white mx-auto max-w-3xl">
              <div className="bg-gradient-to-r from-[#d4af77] to-[#c4984f] p-6 text-center">
                <h2 className="text-2xl font-semibold text-white">Formulario de Confirmación</h2>
              </div>
              <iframe
                title="Formulario de asistencia"
                src={FORM_URL_EMBED}
                width="100%"
                height="1200"
                className="block"
              >
                Cargando…
              </iframe>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#f5ebe0] to-[#f0e6d8] rounded-2xl p-6 shadow-md border border-[#e8dcc8] text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <svg className="w-5 h-5 text-[#c4984f] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-base text-gray-700">
                Si vienes acompañado/a, por favor, <strong>rellenad un formulario por persona</strong>
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}