import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HomeButton } from "../components/HomeButton";
import { useState } from "react";
export function Theoretical() {
  const [clicked, setClicked] = useState(false);
  const btnReferences = () => {
    setClicked((prev) => !prev);
  };
  return (
    <>
      <Header />
      <section className="title-marTeorico">
        <h1>Marco Teorico</h1>
      </section>
      {clicked === false ? (
        <article className="text-marTeorico">
          <p className="text">
            <sub className="title-text">Arduino: </sub>Hardware libre y de bajo
            costo para crear dispositivos interactivos mediante programación de
            microcontroladores.
            <br />
            <sub className="title-text">Sensor de ultrasonido: </sub>{" "}
            Dispositivo que emite ondas sonoras y mide el tiempo de reflexión
            para calcular la distancia entre el sensor y el objeto.
            <br />
            <sub className="title-text">JavaScript: </sub>Lenguaje de
            programación de alto nivel utilizado para desarrollar el back-end
            que procesará los datos del Arduino.
            <br />
            <sub className="title-text">Tecnologías web: </sub>
            HTML, CSS, React y JavaScript se utilizan para desarrollar la
            interfaz de usuario.
            <br />
            <sub className="title-text">Charts.js: </sub>Librería de JavaScript
            que permite mostrar la información al usuario mediante gráficas.
            <br />
          </p>
        </article>
      ) : (
        <article className="text-marTeorico-references">
          [1] E. P. García, “Sensor de Distancia (proximidad) hasta 5 metros /
          HC-SR04 y ARDUINO”, 27-ago-2014. [En línea]. Disponible en:
          https://www.youtube.com/watch?v=IF1eN0WK3bU. [Consultado:
          25-abr-2023]. <br />
          [2] “Deno — A modern runtime for JavaScript and TypeScript”, Deno. [En
          línea]. Disponible en: https://deno.land/. [Consultado: 25-abr-2023].
          <br /> [3] “Socket.IO”, Socket.io. [En línea]. Disponible en:
          https://socket.io/. [Consultado: 25-abr-2023].
          <br /> [4] “Chart.Js”, Chartjs.org. [En línea]. Disponible en:
          https://www.chartjs.org/. [Consultado: 25-abr-2023]. <br />
          [5] “HTML: Lenguaje de etiquetas de hipertexto”, Mozilla.org. [En
          línea]. Disponible en: https://developer.mozilla.org/es/docs/Web/HTML.
          [Consultado: 25-abr-2023]. <br />
          [6] “CSS”, Mozilla.org. [En línea]. Disponible
          en:https://developer.mozilla.org/es/docs/Web/CSS. [Consultado:
          25-abr-2023].
          <br /> [7] M. Baumgardt, “JavaScript”, en Web Design kreativ!, Berlin,
          Heidelberg: Springer Berlin Heidelberg, 1998, pp. 125–132.
          <br />
          [8]“Excalidraw”, Excalidraw. [En línea]. Disponible en:
          https://excalidraw.com/. [Consultado: 25-abr-2023].
        </article>
      )}
      <section className="section_image-marTeorico">
        <img className="image-marTeorico" src="/marTeorico.png" alt="" />
      </section>
      <section>
        <button className="btn-references" onClick={btnReferences}>
          Referencias
        </button>
      </section>
      <HomeButton />
      <Footer />
    </>
  );
}
