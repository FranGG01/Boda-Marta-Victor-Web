import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />

      <section
        className="relative min-h-screen w-full flex flex-col items-center justify-center text-center font-[Playfair_Display] text-[#2b2b2b]"
        style={{
          backgroundImage: "url('/images/bghero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#fdfaf6]/80 via-[#fdfaf6]/70 to-[#fdfaf6]/80"></div>

        <div className="relative z-10 px-6">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-5xl mb-6 font-light tracking-wide text-[#8b7355]">
              ¡Nos casamos!
            </h2>
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold tracking-wider mb-3 bg-gradient-to-r from-[#c4984f] via-[#d4af77] to-[#c4984f] bg-clip-text text-transparent drop-shadow-sm">
                13 DICIEMBRE
              </h1>
              <h1 className="text-5xl md:text-7xl font-bold tracking-wider bg-gradient-to-r from-[#c4984f] via-[#d4af77] to-[#c4984f] bg-clip-text text-transparent">
                2025
              </h1>
            </div>
            <div className="flex items-center justify-center gap-3 text-2xl italic text-[#8b7355]">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Madrid
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fdfaf6] to-transparent"></div>
      </section>

      <section className="relative bg-gradient-to-b from-[#fdfaf6] via-[#faf7f2] to-[#fdfaf6] text-[#2b2b2b] py-20 md:py-28 px-6 font-[Playfair_Display]">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#c4984f] to-transparent"></div>
              <svg className="w-8 h-8 mx-4 text-[#c4984f]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#c4984f] to-transparent"></div>
            </div>

            <h3 className="text-4xl md:text-5xl font-semibold mb-4 text-[#2b2b2b]">
              ¡Bienvenidos a nuestra boda!
            </h3>
          </div>

          <div className="space-y-6">

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#e8dcc8] hover:shadow-xl transition-shadow duration-300">
              <p className="text-lg leading-relaxed text-gray-700">
                Todavía no nos creemos que muy pronto vayamos a dar el paso más importante
                de nuestras vidas y nos sentimos muy felices. <span className="font-semibold text-[#c4984f]">¡Estamos deseando compartir
                  con todos vosotros nuestra historia de amor!</span>
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#f5ebe0] to-[#f0e6d8] rounded-2xl shadow-lg p-8 border border-[#e8dcc8]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#d4af77] to-[#c4984f] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-[#2b2b2b]">Toda la información en un solo lugar</h4>
                  <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    Hemos creado esta web para que estéis al día de todo. En el menú superior
                    podréis acceder a todas las secciones:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block bg-white px-4 py-2 rounded-full text-sm font-medium text-[#c4984f] border border-[#e8dcc8]">Ceremonia</span>
                    <span className="inline-block bg-white px-4 py-2 rounded-full text-sm font-medium text-[#c4984f] border border-[#e8dcc8]">Finca</span>
                    <span className="inline-block bg-white px-4 py-2 rounded-full text-sm font-medium text-[#c4984f] border border-[#e8dcc8]">Asistencia</span>
                    <span className="inline-block bg-white px-4 py-2 rounded-full text-sm font-medium text-[#c4984f] border border-[#e8dcc8]">Buses</span>
                    <span className="inline-block bg-white px-4 py-2 rounded-full text-sm font-medium text-[#c4984f] border border-[#e8dcc8]">Lista de Bodas</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-[#c4984f]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#c4984f] to-[#d4af77] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold mb-3 text-[#2b2b2b]">¡Importante!</h4>
                  <p className="text-lg leading-relaxed text-gray-700 mb-5">
                    Una de las secciones más importantes es la de <strong>Asistencia</strong>, donde podéis
                    confirmar si venís a la boda, además del medio de transporte y de las
                    alergias o intolerancias que podáis tener.
                  </p>

                </div>
              </div>
            </div>

            <div className="text-center pt-6">
              <p className="text-xl font-semibold text-[#c4984f]">
                ¡Os agradecemos si confirmáis lo antes posible!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Foto final mejorada */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fdfaf6] via-transparent to-[#fdfaf6]/90 z-10"></div>
        <img
          src="/images/foto2.jpg"
          alt="Marta y Víctor"
          className="absolute inset-0 w-full h-full object-cover object-[center_30%] grayscale hover:grayscale-0 transition-all duration-700"
        />

        {/* Overlay decorativo */}
        <div className="absolute bottom-0 left-0 right-0 p-12 z-20 bg-gradient-to-t from-[#fdfaf6] via-[#fdfaf6]/80 to-transparent">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-[#2b2b2b] mb-2">Marta & Víctor</h3>
            <p className="text-lg text-gray-600 italic">13 de Diciembre, 2025</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}