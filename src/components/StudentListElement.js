import React from "react";

function StudentListElement(props) {
  return (
    <div>
      <label>{props.name}</label>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

export default StudentListElement;
