import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HomeButton } from "../components/HomeButton";
export function Materials() {
  return (
    <>
      <Header />
      <section className="title-materials">
        <h1>Materiales</h1>
      </section>
      <section className="section-materials">
        <section className="technologies">
          <img
            className="image-one"
            src="/public/html-css-javaScript.png"
            alt="Tecnolgias de Front-end"
          />
          <p className="name-technology">{/* Tecnolgias de Front */}</p>
          <img
            className="image-two"
            src="/public/react2.png"
            alt="Tecnologia de Front-end"
          />
          <p className="name-technology">{/* React */}</p>
          <img
            className="image-three"
            src="/public/nodejs.png"
            alt="Tecnologia de Back-end"
          />
          <p className="name-technology-backend">{/* Node Js */}</p>
        </section>
        <section className="materials">
          <img src="/public/arduino.png" alt="Arduino" />
          <p className="name-materials">{/* Arduino */}</p>
          <img src="/public/protoboard.png" alt="Protoboard" />
          <p className="name.materials">{/* Protoboardd */}</p>
        </section>
      </section>
      <HomeButton />
      <Footer />
    </>
  );
}
