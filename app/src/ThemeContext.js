import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();

export default function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);

    return <ThemeContext.Provider value={darkTheme}></ThemeContext.Provider>;
  }
}
