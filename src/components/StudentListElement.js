import React, { useState, useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function StudentListElement(props) {
  const [darkMode] = useContext(ThemeContext);
  const [newName, setNewName] = useState("");
  const [isEditing, setEditing] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    props.editStudent(props.id, newName);
    setEditing(false);
  }

  function handleChange(e) {
    setNewName(e.target.value);
  }

  const editingTemplate = (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={newName} />
      <button type="submit" disabled={newName.length < 1}>
        Save
      </button>
      <button type="button" onClick={() => setEditing(false)}>
        Cancel
      </button>
    </form>
  );

  const viewTemplate = (
    <div className="list-student-flex">
      <div className="list-student-name">{props.name}</div>
      <div>
        <button
          onClick={() => {
            setNewName(props.name);
            setEditing(true);
          }}
        >
          Edit
        </button>
        <button onClick={() => props.removeStudent(props.id)}>Delete</button>
      </div>
    </div>
  );

  return (
    <li
      class={
        darkMode
          ? "list-student list-student-dark"
          : "list-student list-student-light"
      }
    >
      {isEditing ? editingTemplate : viewTemplate}
    </li>
  );
}

export default StudentListElement;
