import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">Schedule</Link>
      {" | "}
      <Link to="/lesson">Lesson Mode</Link>
      {" | "}
      <Link to="/detail">Student Details</Link>
      {" | "}
      <Link to="/lists">Class Lists</Link>
    </div>
  );
}

export default Navbar;
