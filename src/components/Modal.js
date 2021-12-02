import React from "react";
import { nanoid } from "nanoid";

function Modal(props) {
  if (!props.show) return null;

  const buttonContainer = props.resultTypes.map((type) => {
    return (
      <button key={nanoid()} onClick={() => props.close(type)}>
        {type}
      </button>
    );
  });

  return (
    <div>
      {buttonContainer}
      <button onClick={() => props.close("cancel")}>Cancel</button>
    </div>
  );
}

export default Modal;
