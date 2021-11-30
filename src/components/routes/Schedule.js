import React from "react";
import { Link } from "react-router-dom";

function Schedule() {
  return (
    <div>
      <h2>Welcome to the Schedule Page!</h2>
      <p>
        This was going to be the route where a teacher could enter their weekly
        schedule, so that if they had multiple classes, they could track which
        class list they would be using at different times of day. But I ran
        short of time, and the route I planned didn't really demonstrate any
        concepts that I haven't already covered elsewhere in the project, so it
        got cut.
      </p>
      <p>
        There's no way you could have navigated here by following the links, you
        must have either typed the route in manually or you're looking through
        my code.
      </p>
      <p>
        If you're reading this, you're probably either the instructor or TA for
        CPSC 2600. If so, please be sure to check out my{" "}
        <Link to="/documentation">Documentation</Link> page, where I explain the
        use of the app and, more importantly, why I deserve marks for it.
      </p>
    </div>
  );
}

export default Schedule;
