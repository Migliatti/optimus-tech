import "./Vaga.css";

const Vaga = (props) => {
  return (
    <div className="vaga">
      <h3>{props.name}</h3>
      <div>
        <p>{props.time}</p>
        <p>Faixa salarial: R${props.wage}</p>
      </div>
    </div>
  );
};

export default Vaga;
