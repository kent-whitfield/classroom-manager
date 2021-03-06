import React, { useState, useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import Modal from "./Modal";

function LessonStudent(props) {
  const [darkMode] = useContext(ThemeContext);

  const [showModal, setShowModal] = useState(false);
  const [resultTypes, setResultTypes] = useState([]);
  const [eventType, setEventType] = useState({
    category: "",
    type: "",
  });

  function handUpClick(e) {
    setEventType({ category: "interaction", type: "volunteer" });
    setResultTypes(["Correct", "Incorrect"]);
    setShowModal(true);
  }

  function calledClick(e) {
    setEventType({ category: "interaction", type: "called" });
    setResultTypes(["Correct", "Incorrect"]);
    setShowModal(true);
  }

  function questionClick(e) {
    setEventType({ category: "interaction", type: "question" });
    setResultTypes(["Insightful", "Answered", "Off-topic"]);
    setShowModal(true);
  }

  function closeModal(result, id) {
    setShowModal(false);
    if (result !== "cancel") {
      props.addEvent(eventType.category, eventType.type, result, props.id);
    }
  }

  return (
    <div
      className={
        darkMode
          ? "lesson-student lesson-student-dark"
          : "lesson-student lesson-student-light"
      }
    >
      <div className="lesson-student-name">{props.name}</div>
      <div>
        <button type="button" onClick={handUpClick}>
          Hand Up
        </button>
        <button type="button" onClick={calledClick}>
          Called
        </button>
        <button type="button" onClick={questionClick}>
          Question
        </button>
      </div>
      <Modal show={showModal} close={closeModal} resultTypes={resultTypes} />
    </div>
  );
}

export default LessonStudent;
