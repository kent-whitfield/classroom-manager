import React, { useState } from "react";

function StudentListElement(props) {
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
    <div>
      <label>{props.name}</label>
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
  );

  return <li>{isEditing ? editingTemplate : viewTemplate}</li>;
}

export default StudentListElement;
