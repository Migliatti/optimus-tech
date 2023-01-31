import About from "./components/About";
import Area from "./components/Area";
import Header from "./components/Header";
import Open from "./components/Open";

function App() {
  const areas = [
    {
      area: "Design",
      name: "Product Designer",
      time: "Full-time",
      wage: "7.000",
    },
    {
      area: "Design",
      name: "UX Designer",
      time: "Full-time",
      wage: "6.000",
    },
    {
      area: "Desenvolvimento de Software",
      name: "Desenvolvedor(a) iOS",
      time: "Full-time",
      wage: "8.000",
    },
    {
      area: "Desenvolvimento de Software",
      name: "Desenvolvedor(a) Front-end",
      time: "Full-time",
      wage: "7.000",
    },
    {
      area: "Desenvolvimento de Software",
      name: "Desenvolvedor(a) Back-end",
      time: "Full-time",
      wage: "8.000",
    },
  ];

  const areasFiltradas = areas.filter((e) => e.area === "Design");
  const areasFiltradas2 = areas.filter(
    (e) => e.area === "Desenvolvimento de Software"
  );

  return (
    <div>
      <Header />
      <About />
      <Open />
      <Area name="Design" vagas={areasFiltradas} key="Design" />
      <Area
        name="Desenvolvimento de Software"
        vagas={areasFiltradas2}
        key="Desenvolvimento de Software"
      />
    </div>
  );
}

export default App;
