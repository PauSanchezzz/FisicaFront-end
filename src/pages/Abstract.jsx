import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HomeButton } from "../components/HomeButton";
export function Abstract() {
  return (
    <>
      <Header />
      <section className="title-resu">
        <h1>Resumen</h1>
      </section>
      <article className="text-resu">
        <p className="text">
          El proyecto utiliza tecnologías como Arduino, Protoboard, y un sensor
          de Ultrasonido, además de JavaScript, HTML, CSS y chart.js. El
          objetivo es recopilar datos de distancia y tiempo utilizando el sensor
          y el Arduino, para luego calcular la distancia de un objeto en
          movimiento. La información se presentará mediante gráficas en una
          página web desarrollada con tecnologías web en el frontend y procesada
          en el backend con JavaScript. El proyecto requerirá una etapa de
          diseño y configuración del hardware, así como una etapa de
          programación del Arduino y el backend. Además, se desarrollará una
          interfaz de usuario atractiva.
        </p>
      </article>

      <section className="section_image-resu">
        <img className="image-resu" src="imgresumen.png" alt="" />
      </section>
      <HomeButton />
      <Footer />
    </>
  );
}
