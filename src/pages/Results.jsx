import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useState } from "react";
ChartJS.register(ArcElement, Tooltip, Legend);

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HomeButton } from "../components/HomeButton";

import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "TOP",
    },
    title: {
      display: true,
    },
  },
};
export function Results() {
  const [data, setData] = useState(null);
  const getData = async () => {
    const response = await fetch("http://localhost:3000/");
    const data = await response.json();
    const labels = [];
    for (let i = 0; i < data.length; i++) {
      labels.push(i);
    }
    setData({
      labels,
      datasets: [
        {
          fill: true,
          label: "Distancias",
          data: data,
          borderColor: "rgb(134, 76, 150)",
          backgroundColor: "rgba(134, 76, 150, 0.5)",
        },
      ],
    });
  };
  const myDataset = data ? data.datasets.at(0).data : null;
  const sumatory = data
    ? myDataset.reduce((antes, despues) => {
        return antes + despues;
      })
    : null;
  return (
    <>
      <Header />
      <section className="title-results">
        <h1>Resultados</h1>
      </section>
      <section>
        <button className="btn-calc" onClick={getData}>
          Calcular Resultados
        </button>
      </section>
      <HomeButton />
      <section className="chart-section">
        {data ? (
          <>
            <Line options={options} data={data} />
            <p className="chart-prom">
              La distancia promedio es :<br />
              {" " + sumatory / myDataset.length}
              <br />
              Error de medición distancia utilizando
              <br />
              un Metro es: +/- 0,1 cm.
              <br />
              Error de medición distancia utilizando el sensor ultrasonido varia
              dependiendo de la distancia y las ondas de ruido del entorno en el
              que se realiza la medición.
            </p>
            <p></p>
          </>
        ) : (
          <img className="image-results" src="estadistica.png" alt="" />
        )}
      </section>
      <Footer />
    </>
  );
}
