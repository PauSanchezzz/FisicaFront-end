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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
          labore maiores, laudantium asperiores libero nesciunt blanditiis atque
          ducimus quo tenetur quas deleniti id sint. Aliquam nobis numquam
          impedit illum perspiciatis.
        </p>
      </article>

      <section className="section_image-resu">
        <img className="image-resu" src="/public/resumen5.png" alt="" />
      </section>
      <HomeButton />
      <Footer />
    </>
  );
}
