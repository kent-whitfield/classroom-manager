import React, { useState, createContext, useEffect } from "react";

export const StudentListsContext = createContext([]);

export const StudentListsProvider = (props) => {
  const [studentLists, setStudentLists] = useState(() => {
    const local = localStorage.getItem("studentLists");
    return local ? JSON.parse(local) : [];
  });
  const [currentList, setCurrentList] = useState("");

  useEffect(() => {
    localStorage.setItem("studentLists", JSON.stringify(studentLists));
  }, [studentLists]);

  return (
    <StudentListsContext.Provider
      value={{ studentLists, setStudentLists, currentList, setCurrentList }}
    >
      {props.children}
    </StudentListsContext.Provider>
  );
};
