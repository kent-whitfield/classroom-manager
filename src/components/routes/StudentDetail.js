import React, { useState, useContext, useEffect } from "react";
import { StudentListsContext } from "../../StudentListsContext";
import StudentListSelector from "../StudentListSelector";
import { nanoid } from "nanoid";
import HistoryDay from "../HistoryDay";

function StudentDetail() {
  const { studentLists, currentList } = useContext(StudentListsContext);

  const [filter, setFilter] = useState({
    text: "",
    dataFilter: () => true,
  });

  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setSelected(null);
  }, [currentList]);

  function handleFilterChange(e) {
    if (e.target.value) {
      setFilter({
        text: e.target.value,
        dataFilter: (student) =>
          student.name.toUpperCase().includes(e.target.value.toUpperCase()),
      });
    } else {
      setFilter({
        text: "",
        dataFilter: () => true,
      });
    }
  }

  const studentList = currentList
    ? studentLists.find((list) => list.name === currentList)
    : undefined;

  const filteredList = studentList
    ? studentList.students.filter(filter.dataFilter).map((student) => {
        return (
          <li key={nanoid()} onClick={() => setSelected(student)}>
            {student.name}
          </li>
        );
      })
    : [];

  function historyList() {
    if (!selected || !selected.history) return;

    return selected.history.map((day) => {
      return <HistoryDay key={nanoid()} day={day} />;
    });
  }

  function detailPane() {
    if (!selected) return <h3>No student selected</h3>;
    return (
      <div>
        <h3>
          {selected.name} - {studentList.name}
        </h3>
        <hr />
        <h4>History</h4>
        {historyList()}
      </div>
    );
  }

  return (
    <div>
      <h2>Student Details page</h2>
      <StudentListSelector />
      <div className="detail-flex">
        <div className="detail-flex-left">
          <div>
            <label htmlFor="filterList">Filter list: </label>
            <input
              id="filterList"
              type="text"
              value={filter.text}
              onChange={handleFilterChange}
            />
          </div>
          <ul>
            {filteredList.length > 0
              ? filteredList
              : "no students matching selection"}
          </ul>
        </div>
        <div>{detailPane()}</div>
      </div>
      <p>
        This is where the teacher can select a single student from any class
        list to view details about that student. It displays a history of
        interactions with the student, such as when the student has volunteered
        by raising their hand in class, and when they have been called on, when
        they have asked question, etc. This information may be used for review,
        or at the end of the term when writing report cards.
      </p>
      <p>
        The data on this page could be made more meaningful by including the
        subject and the current list when tracking participation on the lesson
        page. This would allow for more detailed analysis of the data, such as:
      </p>
      <ul>
        <li>
          &lt;name&gt; participates often in math class, but less in language
          arts.
        </li>
        <li>
          &lt;name&gt; does not volunteer often, but usually knows the answer
          when called on.
        </li>
        <li>
          &lt;name&gt; took particular interest in &lt;lesson&gt; and asked
          insightful questions.
        </li>
      </ul>
      <p>
        This concept could be expanded to track disruptions in class in order to
        develop a timeline and look for patterns in the behavior. It could also
        track conflicts between students, which the teacher could use to
        minimize future escalations.
      </p>
    </div>
  );
}

export default StudentDetail;
