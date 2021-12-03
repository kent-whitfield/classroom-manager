import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { nanoid } from "nanoid";

function Modal(props) {
  const [darkMode] = useContext(ThemeContext);

  if (!props.show) return null;

  const buttonContainer = props.resultTypes.map((type) => {
    return (
      <button key={nanoid()} onClick={() => props.close(type)}>
        {type}
      </button>
    );
  });

  return (
    <div className={darkMode ? "modal modal-dark" : "modal modal-light"}>
      {buttonContainer}
      <button onClick={() => props.close("cancel")}>Cancel</button>
    </div>
  );
}

export default Modal;
