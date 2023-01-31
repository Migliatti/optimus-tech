import Vaga from "../Vaga";
import "./Area.css";

const Area = (props) => {
  return (
    <div className="area">
      <h2>{props.name}</h2>
      {props.vagas.map((element) => {
        return (
          <Vaga
            name={element.name}
            time={element.time}
            wage={element.wage}
            key={element.name}
          />
        );
      })}
    </div>
  );
};

export default Area;
