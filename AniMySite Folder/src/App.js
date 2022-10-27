import "./App.css";
import Navbar from "../../src/Navbar";
import RoutingPages from "./RoutingPages";
import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      <Router>
        <div className={darkMode ? "dark-mode" : "light-mode"}>
          <Navbar />
          <div className="container">
            <div className="switch-checkbox">
              <label className="switch">
                <input
                  type="checkbox"
                  onChange={() => setDarkMode(!darkMode)}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          <RoutingPages />
        </div>
      </Router>
    </div>
  );
}

export default App;
