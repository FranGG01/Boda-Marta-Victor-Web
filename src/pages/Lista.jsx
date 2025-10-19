import { useState } from "react";
import { Copy, Check, Heart } from "lucide-react";
import Footer from "../components/Footer";
const IBAN = "ES27 1583 0001 1690 7375 1975";

// Componente Footer simple


export default function Lista() {
  const [copiado, setCopiado] = useState(false);

  const copyIban = async () => {
    try {
      await navigator.clipboard.writeText(IBAN.replace(/\s+/g, ""));
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="bg-[#fdfaf6] text-[#2b2b2b] font-serif">
      {/* Hero Section con imagen */}
      <section className="relative w-full bg-[#fdfaf6] overflow-hidden">
        <div className="relative h-64 md:h-80">
          <img
            src="/images/bgceremonia.jpg"
            alt="Decoración floral"
            className="w-full h-full object-cover object-center select-none pointer-events-none brightness-95"
          />
          {/* Overlay sutil */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#fdfaf6]" />
        </div>

        {/* Decoración floral sutil */}
        <div className="absolute top-8 left-8 opacity-10">
          <div className="w-24 h-24 border-2 border-[#7c1c26] rounded-full" />
        </div>
        <div className="absolute bottom-12 right-8 opacity-10">
          <div className="w-16 h-16 border-2 border-[#7c1c26] rounded-full" />
        </div>
      </section>

      {/* Contenido principal */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-2xl mx-auto">

          {/* Icono decorativo */}
          <div className="flex justify-center mb-8 animate-pulse">
            <Heart className="w-8 h-8 text-[#7c1c26] fill-[#7c1c26]" />
          </div>

          {/* Título */}
          <h1 className="text-5xl md:text-6xl font-light text-center mb-12 tracking-tight">
            Lista de bodas
          </h1>

          {/* Texto principal */}
          <div className="text-center space-y-6 mb-12">
            <p className="text-lg md:text-xl leading-relaxed text-[#2b2b2b]/80">
              Sin duda, el mejor regalo que nos podéis hacer es compartir este día tan
              importante con nosotros.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-[#2b2b2b]/80">
              Si además queréis contribuir en esta nueva aventura, podéis hacerlo a través
              de nuestra cuenta bancaria:
            </p>
          </div>

          {/* Card del IBAN */}
          <div className="relative">
            {/* Sombra decorativa */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#7c1c26]/5 to-transparent rounded-2xl transform translate-y-2 blur-xl" />

            <div className="relative bg-white rounded-2xl shadow-lg border border-[#2b2b2b]/5 p-8 md:p-10 transition-transform hover:scale-[1.02] duration-300">
              {/* Etiqueta */}
              <div className="text-xs uppercase tracking-widest text-[#7c1c26] mb-4 font-sans">
                Número de cuenta
              </div>

              {/* IBAN */}
              <div className="text-2xl md:text-3xl font-mono tracking-wider mb-6 text-[#2b2b2b] break-all">
                {IBAN}
              </div>

              {/* Botón copiar */}
              <button
                onClick={copyIban}
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-[#7c1c26] px-8 py-3.5 text-white font-sans text-sm uppercase tracking-widest hover:bg-[#5f1620] active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg group"
              >
                {copiado ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    <span>Copiar IBAN</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Divisor decorativo */}
          <div className="flex items-center justify-center my-14">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#2b2b2b]/20" />
            <div className="mx-4">
              <Heart className="w-4 h-4 text-[#7c1c26] fill-[#7c1c26]" />
            </div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#2b2b2b]/20" />
          </div>

          {/* Mensaje final */}
          <div className="text-center">
            <p className="text-xl md:text-2xl font-light text-[#2b2b2b]/70 italic">
              ¡Mil gracias por vuestro cariño!
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}