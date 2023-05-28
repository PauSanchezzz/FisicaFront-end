import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HomeButton } from "../components/HomeButton";
export function Members() {
  return (
    <>
      <Header />
      <section className="title-members">
        <h1>Integrantes</h1>
      </section>
      <section className="image-members">
        <img className="member" src="./public/foto1.jpg" alt="" />
        <p className="memeber-text name-one">Daniel García Romero</p>
        <img className="member" src="./public/foto1.jpg" alt="" />
        <p className="memeber-text name-two">Jorge Andrés Gómez Ruiz</p>
        <img className="member" src="./public/foto1.jpg" alt="" />
        <p className="memeber-text name-three">
          Camilo Alejandro Contreras Morales
        </p>
        <img className="member" src="./public/foto1.jpg" alt="" />
        <p className="memeber-text name-four">Paula Andrea Sánchez Torres</p>
      </section>
      <HomeButton />
      <Footer />
    </>
  );
}
