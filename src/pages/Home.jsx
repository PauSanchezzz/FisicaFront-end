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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
          labore maiores, laudantium asperiores libero nesciunt blanditiis atque
          ducimus quo tenetur quas deleniti id sint. Aliquam nobis numquam
          impedit illum perspiciatis.
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
