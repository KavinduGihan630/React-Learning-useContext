import React, { useState } from "react";
import FunctionContextComponent from "./FunctionContextComponent";
import ClassContextComponent from "./ClassContextComponent";
import ThemeProvider from "./ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <button onClick={toggleTheme}>Toggle theme</button>
        <FunctionContextComponent />
        <ClassContextComponent />
      </ThemeProvider>
    </>
  );
}

export default App;
