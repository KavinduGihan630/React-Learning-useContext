import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Index from "./pages/Index";
import { userContext } from "./userContext";

function App() {
  const [value, setValue] = useState("hello from context");
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <userContext.Provider value={{ value, setValue }}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </userContext.Provider>
      </div>
    </Router>
  );
}

export default App;
