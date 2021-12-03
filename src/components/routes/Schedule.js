import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

function Schedule() {
  const [darkMode] = useContext(ThemeContext);

  return (
    <div>
      <h2>Weekly Schedule</h2>
      <div
        className={
          darkMode
            ? "sched-container sched-container-dark"
            : "sched-container sched-container-light"
        }
      >
        <p>
          This is where a teacher would enter their weekly schedule, so that if
          they had multiple classes, they could track which class list they
          would be using at different times of day. But I ran short of time, and
          the page I planned didn't really demonstrate any requirements that I
          haven't already covered elsewhere in the project, so it got cut.
        </p>
        <p>
          This page would have table or grid layout of a one-week schedule. Each
          day of week would contain an array of schedule block components with a
          start time, end time, and the list of students they are teaching
          during that time. The schedule blocks would render as an edit template
          when first added or when editing is selected, and otherwise render a
          display template.
        </p>
        <p>
          Future expansion would allow the teacher to select the subject they
          are teaching and enter the lesson they have planned, in order to add
          detail to the reporting on the student detail page.
        </p>
        <p>
          In an ideal world, it would have the option of syncing with other
          calendars such as the school's calendar of events, the teacher's
          personal calendar, or a stat holiday calendar.
        </p>
      </div>
    </div>
  );
}

export default Schedule;
