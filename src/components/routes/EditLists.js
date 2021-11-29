import React, { useContext } from "react";
import { StudentListsContext } from "../../StudentListsContext";

function EditLists() {
  // const [studentLists, setStudentLists] = useContext(StudentListsContext);
  // const [currentList, setCurrentList] = useContext(StudentListsContext);

  function addStudent() {
    //  const selectedList = document.getElementById("listSelect").value;
    //  console.log(selectedList);
  }

  return (
    <div>
      <form onSubmit={addStudent}>
        <input type="text" />
        <button>Add Student</button>
      </form>
      Hello from EditLists!
    </div>
  );
}

export default EditLists;
