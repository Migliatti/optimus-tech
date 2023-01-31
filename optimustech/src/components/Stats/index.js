import "./Stats.css";

const Stats = (props) => {
  return (
    <div className="stat">
      <h2>{props.number}</h2>
      <h3>{props.title}</h3>
      <p>{props.p}</p>
    </div>
  );
};

export default Stats;
