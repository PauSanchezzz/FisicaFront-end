function App() {
  return (
    <>
      <nav className="nav">
        <ul className="menu">
          <li>
            <a href="#">Resultados</a>
          </li>
          <li>
            <a href="#">Marco Teorico</a>
          </li>
          <li>
            <a href="#">Resumen</a>
          </li>
          <li>
            <a href="#">Conclusiones</a>
          </li>
          <li>
            <a href="#">Integrantes</a>
          </li>
        </ul>
      </nav>
      <section className="title">
        <h1>Proyecto Fisica</h1>
      </section>
      <article className="text-index">
        <p className="texto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
          labore maiores, laudantium asperiores libero nesciunt blanditiis atque
          ducimus quo tenetur quas deleniti id sint. Aliquam nobis numquam
          impedit illum perspiciatis.
        </p>
      </article>

      <section className="section_image">
        <img className="image-index" src="/img3.png" alt="" />
      </section>
      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#864C96"
          fillOpacity="1"
          d="M0,288L80,250.7C160,213,320,139,480,138.7C640,139,800,213,960,213.3C1120,213,1280,139,1360,101.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#864C96"
          fillOpacity="0.4"
          d="M0,288L80,245.3C160,203,320,117,480,112C640,107,800,181,960,186.7C1120,192,1280,128,1360,96L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </>
  );
}

export default App;
