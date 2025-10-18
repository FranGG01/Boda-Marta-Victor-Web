import Footer from "../components/Footer";

const FORM_URL_EMBED = "https://docs.google.com/forms/d/e/1FAIpQLSc7Fs2Xlt78lCGuQ2limzMul6J987gyC6ZYTNHZggNvXoC6jQ/viewform?embedded=true";
const FORM_URL_OPEN  = "https://docs.google.com/forms/d/e/1FAIpQLSc7Fs2Xlt78lCGuQ2limzMul6J987gyC6ZYTNHZggNvXoC6jQ/viewform";

export default function Buses() {
  return (
    <main className="bg-[#fdfaf6] text-[#2b2b2b] font-[Playfair_Display]">
      {/* Cabecera floral */}
      <section className="relative w-full overflow-hidden">
        <img
          src="/images/bgceremonia.jpg"
          alt=""
          className="w-full h-48 md:h-64 object-cover object-center scale-110 select-none pointer-events-none"
        />
        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#fdfaf6] to-transparent" />
      </section>

      <section className="px-6 py-14">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">Buses</h1>

          <p className="text-lg leading-relaxed mb-8">
            Habrá autobuses de ida y vuelta. Por favor, confirmad vuestra plaza en el <strong>formulario de Asistencia</strong>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={FORM_URL_OPEN}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#7c1c26] px-6 py-3 !text-white tracking-wider uppercase text-sm hover:brightness-110 transition"
            >
              Abrir formulario ↗
            </a>

            <a
              href="/asistencia#form-asistencia"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[#7c1c26] tracking-wider uppercase text-sm hover:underline transition"
            >
              Ir al formulario embebido
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
