import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
export function Theoretical() {
  return (
    <>
      <Header />
      <section className="title-marTeorico">
        <h1>Marco Teorico</h1>
      </section>
      <article className="text-marTeorico">
        <p className="text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
          labore maiores, laudantium asperiores libero nesciunt blanditiis atque
          ducimus quo tenetur quas deleniti id sint. Aliquam nobis numquam
          impedit illum perspiciatis.
        </p>
      </article>
      <section className="section_image-marTeorico">
        <img className="image-marTeorico" src="/marTeorico.png" alt="" />
      </section>
      <Footer />
    </>
  );
}
