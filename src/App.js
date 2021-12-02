import React, { useContext } from "react";
import ThemeSwitch from "./components/ThemeSwitch";
import Navbar from "./components/NavBar";
//import StudentListSelector from "./components/StudentListSelector";

// Contexts
import { ThemeContext } from "./ThemeContext";
import { StudentListsProvider } from "./StudentListsContext";

// Routes
import { Route, Routes } from "react-router-dom";
import Welcome from "./components/routes/Welcome";
import Schedule from "./components/routes/Schedule";
import Lesson from "./components/routes/Lesson";
import StudentDetail from "./components/routes/StudentDetail";
import EditLists from "./components/routes/EditLists";
import Documentation from "./components/routes/Documentation";
import Error from "./components/routes/Error";

function App() {
  const [darkMode] = useContext(ThemeContext);

  return (
    <div className={darkMode ? "todoapp-dark" : "todoapp-light"}>
      <div className="toggle-wrapper">
        <ThemeSwitch />
      </div>
      <h1>Classroom Manager</h1>
      <Navbar />
      <StudentListsProvider>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/lesson" element={<Lesson />} />
          <Route path="/detail" element={<StudentDetail />} />
          <Route path="/lists" element={<EditLists />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route element={Error} />
        </Routes>
      </StudentListsProvider>
    </div>
  );
}

export default App;
