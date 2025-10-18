import Footer from "../components/Footer";

const PHONES = {
  marta: { label: "Marta", num: "681278905" },
  victor: { label: "Víctor", num: "628444584" },
};

// Pega aquí el enlace de tu Google Forms (Embed -> “Send” -> icono <> -> copia el src)
const FORM_URL = "https://docs.google.com/forms/d/e/XXXXXXXXXXXXXXXXX/viewform?embedded=true";

export default function Asistencia() {
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
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">Asistencia</h1>

          <p className="text-lg leading-relaxed mb-6">
            Para facilitar la organización, os pedimos que nos ayudéis rellenando el siguiente formulario.
            Si surge cualquier duda, ¡estaremos encantados de resolverla!
          </p>

          <div className="mx-auto flex flex-col gap-2 items-center text-lg">
            <a
              href={`tel:${PHONES.marta.num}`}
              className="hover:opacity-80 transition"
              aria-label={`Llamar a ${PHONES.marta.label}`}
            >
              <strong>{PHONES.marta.label}:</strong> {PHONES.marta.num.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3")}
            </a>
            <a
              href={`tel:${PHONES.victor.num}`}
              className="hover:opacity-80 transition"
              aria-label={`Llamar a ${PHONES.victor.label}`}
            >
              <strong>{PHONES.victor.label}:</strong> {PHONES.victor.num.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3")}
            </a>
          </div>

          <div className="mx-auto my-10 h-px w-40 bg-[#2b2b2b]/20" />

          <div className="mb-6">
            <a
              href={FORM_URL.replace("embedded=true", "")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#7c1c26] px-6 py-3 text-white tracking-wider uppercase text-sm hover:brightness-110 transition"
            >
              Rellenar formulario ↗
            </a>
          </div>

          <div className="flex justify-center">
            <div className="w-[95%] md:w-[80%] lg:w-[70%] rounded-2xl overflow-hidden border border-[#e6d7d0] shadow-md bg-white/70">
              <iframe
                title="Formulario de asistencia"
                src={FORM_URL}
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
