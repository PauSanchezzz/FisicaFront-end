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
        {/* <section className="technologies"> */}
        <img
          className="image-one"
          src="/react2.png"
          alt="Tecnolgias de Front-end"
        />
        <p className="name one">{/* Tecnolgias de Front */}</p>
        <img
          className="image-two"
          src="/html-css-javaScript2.png"
          alt="Tecnologia de Front-end"
        />
        <p className="name two">{/* React */}</p>
        <img
          className="image-three"
          src="/nodejs.png"
          alt="Tecnologia de Back-end"
        />
        <p className="name">{/* Node Js */}</p>
        <img className="image-five" src="/chartjs.png" alt="" />
        {/* </section> */}
        <img className="image-sensor" src="/sensor.png" alt="" />
        <article className="name-materials">
          <p>
            Tecnologias Front-end (Html, css, JavaScript, React, Chart Js)
            <br />
            Tecnologia de Back-end (Node Js) <br />
            Protoboard
            <br /> Arduino <br />
            Sensor de Ultrasonido
          </p>
        </article>
        {/* <section className="image-four"> 
        <img src="/public/arduino2.png" alt="Arduino" /><p className="name">{/* Arduino </p>
          <img src="/public/protoboard2.png" alt="Protoboard" /> <p className="name"></p>
        </section> */}
      </section>
      <HomeButton />
      <Footer />
    </>
  );
}
