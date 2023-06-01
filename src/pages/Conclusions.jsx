import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HomeButton } from "../components/HomeButton";
export function Conclusions() {
  return (
    <>
      <Header />
      <section className="title-conclu">
        <h1>Conclusiones</h1>
      </section>
      <article className="text-conclu">
        <p className="text">
          La conclusión de este proyecto demuestra con éxito el diseño e
          implementación de un sistema eficiente para medir la velocidad de un
          objeto en movimiento utilizando un sensor de ultrasonido y Arduino.
          Durante el proceso, se logró recopilar datos precisos de distancia y
          tiempo, los cuales fueron cuidadosamente procesados para calcular la
          velocidad correspondiente. La presentación de la información obtenida
          fue realizada de manera visualmente atractiva a través de gráficas
          exhibidas en una página web, lo que permitió una comprensión clara y
          accesible de los resultados.
        </p>
      </article>
      <section className="section_image-conclusiones">
        <img
          className="image-conclusiones"
          src="/public/conclusiones.png"
          alt=""
        />
      </section>
      <HomeButton />
      <Footer />
    </>
  );
}
