import React, { useState, createContext, useEffect } from "react";

export const StudentListsContext = createContext([]);

export const StudentListsProvider = (props) => {
  const [studentLists, setStudentLists] = useState(() => {
    const local = localStorage.getItem("studentLists");
    return local ? JSON.parse(local) : [];
  });
  const [currentList, setCurrentList] = useState(() => {
    const current = localStorage.getItem("currentList");
    return current ? JSON.parse(current) : "";
  });

  useEffect(() => {
    localStorage.setItem("studentLists", JSON.stringify(studentLists));
  }, [studentLists]);

  useEffect(() => {
    localStorage.setItem("currentList", JSON.stringify(currentList));
  }, [currentList]);

  return (
    <StudentListsContext.Provider
      value={{ studentLists, setStudentLists, currentList, setCurrentList }}
    >
      {props.children}
    </StudentListsContext.Provider>
  );
};
