import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { StudentListsContext } from "../../StudentListsContext";
import StudentListElement from "../StudentListElement";
import StudentListSelector from "../StudentListSelector";

function EditLists() {
  const { studentLists, setStudentLists, currentList } =
    useContext(StudentListsContext);

  const [newName, setNewName] = useState("");

  const studentList = currentList
    ? studentLists.find((list) => list.name === currentList)
    : undefined;

  const students = studentList
    ? studentList.students.map((student) => {
        return (
          <StudentListElement
            key={student.id}
            id={student.id}
            name={student.name}
            removeStudent={removeStudent}
            editStudent={editStudent}
          />
        );
      })
    : [];

  function handleNameChange(e) {
    setNewName(e.target.value);
  }

  function addStudent() {
    const newStudent = {
      id: nanoid(),
      name: newName,
      history: [],
    };
    const newList = {
      name: studentList.name,
      students: [...studentList.students, newStudent],
    };
    const newStudentLists = studentLists.map((list) => {
      if (list.name === currentList) {
        return newList;
      }
      return list;
    });

    setStudentLists(newStudentLists);
  }

  function removeStudent(id) {
    const newList = {
      name: studentList.name,
      students: studentList.students.filter((student) => student.id !== id),
    };
    const newStudentLists = studentLists.map((list) => {
      if (list.name === currentList) {
        return newList;
      }
      return list;
    });

    setStudentLists(newStudentLists);
  }

  function editStudent(id, newName) {
    const newStudentLists = studentLists.map((list) => {
      if (list.name === currentList) {
        return {
          ...list,
          students: list.students.map((student) => {
            if (student.id === id) {
              return { ...student, name: newName };
            }
            return student;
          }),
        };
      }
      return list;
    });
    setStudentLists(newStudentLists);
  }

  return (
    <div>
      <h2>Edit Class Lists</h2>
      <StudentListSelector showButtons={true} />
      <form onSubmit={addStudent}>
        <label htmlFor="newName">Add new student: </label>
        <input
          id="newName"
          type="text"
          onChange={handleNameChange}
          value={newName}
          disabled={!currentList}
        />
        <button
          type="submit"
          disabled={newName.trim().length < 1 || studentLists.length < 1}
        >
          Add
        </button>
      </form>
      <ul class="list-student-container">{students}</ul>
    </div>
  );
}

export default EditLists;
