import { useContext } from "react";
import { AdviceSlips } from "./Provider";

export const Display = (props) => {
  return (
    <div>
      <button className="btn btn-light btn-lg" onClick={props.advice}>
        Get Advice
      </button>
      <button className="btn btn-secondary btn-lg" onClick={props.slips}>
        Pin Advice
      </button>
      <h1>{props.slip}</h1>
    </div>
  );
};

export const Slips = () => {
  const { slips } = useContext(AdviceSlips);

  return (
    <ul>
      {slips.map((slip, i) => (
        <li key="{i}">{slip}</li>
      ))}
    </ul>
  );
};
