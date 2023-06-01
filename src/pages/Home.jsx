import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
export function Home() {
  return (
    <>
      <Header />
      <section className="title">
        <h1>Proyecto Fisica</h1>
      </section>
      <article className="text-index">
        <p className="text">
          Se lleva a cabo un proyecto con el objetivo de determinar la distancia
          de un objeto en movimiento utilizando un sensor de ultrasonido, y
          luego visualizar esta información de forma gráfica.
          <br />
          Daniel García Romero - 20202578089
          <br />
          Camilo Alejandro Contreras Morales - 20221578048 <br />
          Jorge Andrés Gómez Ruiz - 20222572056 <br />
          Paula Andrea Sánchez Torres - 20211578084 <br />
        </p>
      </article>
      <section className="btn-results">
        <a href="/results">Resultados</a>
      </section>
      <section className="section_image">
        <img className="image-index" src="/img3.png" alt="" />
      </section>
      <Footer />
    </>
  );
}
