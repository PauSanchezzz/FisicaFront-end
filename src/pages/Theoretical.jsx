import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HomeButton } from "../components/HomeButton";
export function Theoretical() {
  return (
    <>
      <Header />
      <section className="title-marTeorico">
        <h1>Marco Teorico</h1>
      </section>
      <article className="text-marTeorico">
        <p className="text">
          <sub className="title-text">Arduino: </sub>Hardware libre y de bajo
          costo para crear dispositivos interactivos mediante programación de
          microcontroladores.
          <br />
          <sub className="title-text">Sensor de ultrasonido: </sub> Dispositivo
          que emite ondas sonoras y mide el tiempo de reflexión para calcular la
          distancia entre el sensor y el objeto.
          <br />
          <sub className="title-text">JavaScript: </sub>Lenguaje de programación
          de alto nivel utilizado para desarrollar el back-end que procesará los
          datos del Arduino.
          <br />
          <sub className="title-text">Tecnologías web: </sub>
          HTML, CSS, React y JavaScript se utilizan para desarrollar la interfaz
          de usuario.
          <br />
          <sub className="title-text">Charts.js: </sub>Librería de JavaScript
          que permite mostrar la información al usuario mediante gráficas.
          <br />
        </p>
      </article>
      <section className="section_image-marTeorico">
        <img className="image-marTeorico" src="/marTeorico.png" alt="" />
      </section>
      <HomeButton />
      <Footer />
    </>
  );
}
