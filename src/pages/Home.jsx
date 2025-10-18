import Hero from "../components/Hero";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
    <Hero />
      {/* Sección principal con imagen de fondo (ramas florales) */}
      <section
        className="relative min-h-screen w-full flex flex-col items-center justify-center text-center font-[Playfair_Display] text-[#2b2b2b] bg-[#fdfaf6]"
        style={{
          backgroundImage: "url('/images/bghero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-[#fdfaf6]/70"></div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl mb-4 font-light">¡Nos casamos!</h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-wider mb-2">
            13 DICIEMBRE 2025
          </h1>
          <p className="text-xl italic mb-8">Madrid</p>
        </div>
      </section>

      {/* Sección de bienvenida */}
      <section className="relative bg-[#fdfaf6] text-[#2b2b2b] py-24 px-6 font-[Playfair_Display]">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-semibold mb-8">
            ¡Bienvenidos a nuestra boda!
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            Todavía no nos creemos que muy pronto vayamos a dar el paso más importante
            de nuestras vidas y nos sentimos muy felices. ¡Estamos deseando compartir
            con todos vosotros nuestra historia de amor!
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Hemos creado esta web para que estéis al día de todo. En el menú superior
            podréis acceder a todas las secciones: ceremonia, finca, asistencia, buses
            y lista de bodas.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Una de las secciones más importantes es la de asistencia, donde podéis
            confirmar si venís a la boda, además del medio de transporte y de las
            alergias o intolerancias que podáis tener.
          </p>
          <p className="text-lg leading-relaxed">
            ¡Os agradecemos si confirmáis lo antes posible!
          </p>
        </div>
      </section>
     {/* Foto final de Marta & Víctor */}
<section className="relative w-full h-[60vh] overflow-hidden">
  <img
    src="/images/foto2.jpg"
    alt="Marta y Víctor"
    className="absolute inset-0 w-full h-full object-cover object-[center_30%] grayscale"
  />
  <div className="absolute inset-0 bg-[#fdfaf6]/10"></div>
</section>

      
      <Footer />
    </>
  );
}
