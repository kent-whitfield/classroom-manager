import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import Switch from "react-switch";

function ToggleSwitch(props) {
  const [darkMode, setDarkMode] = useContext(ThemeContext);

  function handleChange() {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  }

  return (
    <label>
      <Switch
        onChange={handleChange}
        checked={darkMode}
        offColor="#87CEFA"
        checkedIcon={
          <div
            style={{ paddingLeft: "4px", position: "relative", top: "-2px" }}
          >
            {"\u263c"}
          </div>
        }
        uncheckedIcon={
          <div
            style={{ paddingLeft: "7px", position: "relative", top: "-2px" }}
          >
            {"\u263e"}
          </div>
        }
      />
    </label>
  );
}

export default ToggleSwitch;
