import Footer from "../components/Footer";

const PHONES = {
  marta: { label: "Marta", num: "681278905" },
  victor: { label: "Víctor", num: "628444584" },
};

const FORM_URL_EMBED = "https://docs.google.com/forms/d/e/1FAIpQLSc7Fs2Xlt78lCGuQ2limzMul6J987gyC6ZYTNHZggNvXoC6jQ/viewform?embedded=true";
const FORM_URL_OPEN = "https://docs.google.com/forms/d/e/1FAIpQLSc7Fs2Xlt78lCGuQ2limzMul6J987gyC6ZYTNHZggNvXoC6jQ/viewform";

export default function Asistencia() {
  return (
    <main className="bg-[#fdfaf6] text-[#2b2b2b] font-[Playfair_Display]">
      {/* Cabecera floral */}
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
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">Asistencia</h1>

          <p className="text-lg leading-relaxed mb-4">
            Para facilitar la organización, os pedimos que nos ayudéis rellenando el siguiente formulario.
            <strong> Dentro podrás indicar si usarás autobús (ida, vuelta o ambos). </strong>
            Os dejamos nuestros números de teléfono. Si os surge cualquier duda, ¡estaremos encantados de resolverlas!
          </p>

          <div className="mx-auto flex flex-col gap-2 items-center text-lg">
            <a href={`tel:${PHONES.marta.num}`} className="hover:opacity-80 transition">
              <strong>{PHONES.marta.label}:</strong> {PHONES.marta.num.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3")}
            </a>
            <a href={`tel:${PHONES.victor.num}`} className="hover:opacity-80 transition">
              <strong>{PHONES.victor.label}:</strong> {PHONES.victor.num.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3")}
            </a>
          </div>

          <div className="mx-auto my-10 h-px w-40 bg-[#2b2b2b]/20" />



          <div id="form-asistencia" className="flex justify-center">
            <div className="w-[95%] md:w-[80%] lg:w-[70%] rounded-2xl overflow-hidden border border-[#e6d7d0] shadow-md bg-white/70">
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

          <p className="mt-6 text-sm opacity-70">
            Si vienes acompañado/a, por favor, rellenad un formulario por persona.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
