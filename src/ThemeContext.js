import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(() => {
    const local = localStorage.getItem("darkMode");
    return local ? JSON.parse(local) : false;
  });

  return (
    <ThemeContext.Provider value={[darkMode, setDarkMode]}>
      {props.children}
    </ThemeContext.Provider>
  );
};
