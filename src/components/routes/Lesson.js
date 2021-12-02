import React, { useContext } from "react";
import { StudentListsContext } from "../../StudentListsContext";
import StudentListSelector from "../StudentListSelector";
import LessonStudent from "../LessonStudent";

function Lesson() {
  const { studentLists, setStudentLists, currentList } =
    useContext(StudentListsContext);

  const studentList = currentList
    ? studentLists.find((list) => list.name === currentList)
    : undefined;

  function addEvent(category, type, result, id) {
    let today = new Date().toDateString();
    let history = studentList.students.find(
      (student) => student.id === id
    ).history;

    let day = history.find((day) => day.date === today);
    if (!day) {
      day = {
        date: today,
        events: [],
      };
      history.push(day);
    }

    day.events.push({
      category: category,
      type: type,
      result: result,
    });

    setStudentLists(
      studentLists.map((list) => {
        if (list.name === currentList) {
          return {
            ...list,
            students: list.students.map((student) => {
              if (student.id === id) {
                return { ...student, history: history };
              }
              return student;
            }),
          };
        }
        return list;
      })
    );
  }

  const lessonStudents = studentList
    ? studentList.students.map((student) => {
        return (
          <LessonStudent
            key={student.id}
            name={student.name}
            id={student.id}
            addEvent={addEvent}
          />
        );
      })
    : [];

  return (
    <div>
      <h2>Lesson Mode page</h2>
      <StudentListSelector />
      {lessonStudents}
    </div>
  );
}

export default Lesson;
