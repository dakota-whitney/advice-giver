import { useContext } from "react";
import { AdviceSlips } from "./Provider";

export const AdviceDisplay = (props) => {
  return (
    <div>
      <button
        className="btn btn-primary btn-lg"
        data-bs-toggle="modal"
        data-bs-target="#adviceModal"
        onClick={props.advice}
      >
        Get Advice
      </button>
      <div
        className="modal fade"
        id="adviceModal"
        tabindex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">{props.slip}</div>
            <div className="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={props.slips}
              >
                Pin Advice
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SlipDisplay = (props) => {
  return (
    <div>
      <ul className="list-group">
        {props.slips.map((slip, i) => (
          <li className="list-group-item" key="{i}">
            {slip}
          </li>
        ))}
      </ul>
      <button className="btn btn-danger" onClick={props.clear}>Clear Advice</button>
    </div>
  );
};
