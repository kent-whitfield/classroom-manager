import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-container">
      <div>
        <Link to="/">Welcome</Link>
      </div>
      <div>
        <Link to="/schedule">Weekly Schedule</Link>
      </div>
      <div>
        <Link to="/lesson">Lesson Mode</Link>
      </div>
      <div>
        <Link to="/detail">Student Details</Link>
      </div>
      <div>
        <Link to="/lists">Class Lists</Link>
      </div>
      <div>
        <Link to="/documentation">Documentation</Link>
      </div>
    </div>
  );
}

export default Navbar;
