import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HomeButton } from "../components/HomeButton";
export function Justification() {
  return (
    <>
      <Header />
      <section className="title-Justification">
        <h1>Justificación</h1>
      </section>
      <article className="text-Justification">
        <p className="text">
          El proyecto de diseño e implementación de un sistema para medir la
          distancia de un objeto en movimiento utilizando un sensor de
          ultrasonido y Arduino se justifica por su amplia aplicación práctica
          en diversas áreas, su accesibilidad y facilidad de uso gracias a la
          plataforma Arduino, así como la precisión y confiabilidad del sensor
          de ultrasonido. Además, el proyecto busca fomentar la integración
          tecnológica y el conocimiento compartido al ser de código abierto, lo
          que permitirá a otras personas interesadas aprovechar y aplicar esta
          solución en diferentes contextos. Además, se destaca el potencial de
          este proyecto para futuros desarrollos en el campo de la medición de
          distancia.
        </p>
      </article>
      <section className="section_image-justificacion">
        <img className="image-justificacion" src="trabajoequipo.png" alt="" />
      </section>
      <HomeButton />
      <Footer />
    </>
  );
}
