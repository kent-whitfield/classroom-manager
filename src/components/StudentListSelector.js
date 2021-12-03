import React, { useContext, useEffect, useState } from "react";
import { StudentListsContext } from "../StudentListsContext";

function StudentListSelector(props) {
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
    setListName("");

    setEditing(false);
  }

  // remove list
  function removeList() {
    const newList = studentLists.filter((list) => list.name !== currentList);
    setStudentLists(newList);
    if (studentLists.length === 0) {
      setCurrentList("");
    }
  }

  // test whether to disable Delete button
  function disableDelete() {
    let selectedList = studentLists.find((list) => list.name === currentList);
    return (
      (selectedList && selectedList.students.length > 0) ||
      studentLists.length < 1
    );
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
      <label htmlFor="listName">New list name: </label>
      <input
        id="listName"
        type="text"
        value={listName}
        onChange={handleTextChange}
      />
      <button type="submit">Save</button>
      <button type="button" onClick={() => setEditing(false)}>
        Cancel
      </button>
    </form>
  );

  const selectListTemplate = (
    <div>
      <label htmlFor="listSelect">Current list: </label>
      <select
        id="listSelect"
        disabled={studentLists.length < 1}
        onChange={handleSelectChange}
      >
        {optionList}
      </select>
      <button
        className={
          props.showButtons ? "select-buttons-show" : "select-buttons-hide"
        }
        disabled={disableDelete()}
        onClick={removeList}
      >
        Delete
      </button>
      <button
        className={
          props.showButtons ? "select-buttons-show" : "select-buttons-hide"
        }
        onClick={() => setEditing(true)}
      >
        Add new
      </button>
    </div>
  );

  return (
    <div className="list-selector">
      {isEditing ? addListTemplate : selectListTemplate}
    </div>
  );
}

export default StudentListSelector;
