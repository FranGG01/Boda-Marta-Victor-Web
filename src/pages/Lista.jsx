import Footer from "../components/Footer";
import { useState } from "react";

const IBAN = "ES27 1583 0001 1690 7375 1975"; 

export default function Lista() {
  const [copiado, setCopiado] = useState(false);

  const copyIban = async () => {
    try {
      await navigator.clipboard.writeText(IBAN.replace(/\s+/g, ""));
      setCopiado(true);
      setTimeout(() => setCopiado(false), 1600);
    } catch (e) {
      console.error(e);
    }
  };

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
          <h1 className="text-4xl md:text-5xl font-semibold mb-8">Lista de bodas</h1>

          <p className="text-lg leading-relaxed mb-6">
            Sin duda, el mejor regalo que nos podéis hacer es compartir este día tan
            importante con nosotros. Si además queréis contribuir en esta nueva aventura,
            podéis hacerlo a través del siguiente número de cuenta:
          </p>

          <div className="mt-6 inline-flex flex-col items-center gap-3">
            <div className="text-2xl md:text-3xl tracking-widest px-4 py-2 rounded-lg bg-white/70 border border-[#2b2b2b]/10">
              {IBAN}
            </div>
            <button
              onClick={copyIban}
              className="inline-flex items-center gap-2 rounded-full bg-[#7c1c26] px-5 py-2 text-white uppercase text-xs tracking-wider hover:brightness-110 transition cursor-pointer"
            >
              {copiado ? "¡Copiado!" : "Copiar IBAN"}
            </button>
          </div>

          <div className="mx-auto my-10 h-px w-40 bg-[#2b2b2b]/15" />

          <p className="text-base opacity-80">
            ¡Mil gracias por vuestro cariño! 💛
          </p>

        
          
        </div>
      </section>

      <Footer />
    </main>
  );
}
