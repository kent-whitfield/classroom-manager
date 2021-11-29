import React, { useContext, useEffect, useState } from "react";
import { StudentListsContext } from "../StudentListsContext";

function StudentListSelector() {
  const { studentLists, setStudentLists, currentList, setCurrentList } =
    useContext(StudentListsContext);

  const [isEditing, setEditing] = useState(false);
  const [listName, setListName] = useState("");

  function handleSelectChange(e) {
    setCurrentList(e.target.value);
  }

  function handleTextChange(e) {
    setListName(e.target.value);
  }

  // handle submit to add new list
  function handleSubmit(e) {
    e.preventDefault();

    const newStudentList = {
      name: listName,
      students: [],
    };
    setStudentLists([...studentLists, newStudentList]);
    setCurrentList(listName);

    setEditing(false);
  }

  // remove list
  function removeList() {
    const newList = studentLists.filter((list) => list.name !== currentList);
    setStudentLists(newList);
  }

  useEffect(() => {
    let select = document.getElementById("listSelect");
    if (select) {
      select.value = currentList;
    }
  }, [currentList]);

  // set list currently selected in combo box after render
  useEffect(() => {
    let select = document.getElementById("listSelect");
    if (select) {
      setCurrentList(select.value);
    }
  }, [setCurrentList, studentLists]);

  const optionList = studentLists.map((studentList) => {
    return (
      <option key={studentList.name} value={studentList.name}>
        {studentList.name}
      </option>
    );
  });

  const addListTemplate = (
    <form onSubmit={handleSubmit}>
      <input type="text" value={listName} onChange={handleTextChange} />
      <button type="submit">Save</button>
      <button type="button" onClick={() => setEditing(false)}>
        Cancel
      </button>
    </form>
  );

  const selectListTemplate = (
    <div>
      <select
        id="listSelect"
        disabled={studentLists.length < 1}
        onChange={handleSelectChange}
      >
        {optionList}
      </select>
      <button disabled={studentLists.length < 1} onClick={removeList}>
        Delete
      </button>
      <button onClick={() => setEditing(true)}>Add new</button>
    </div>
  );

  return isEditing ? addListTemplate : selectListTemplate;
}

export default StudentListSelector;
