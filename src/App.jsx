import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StopWatch from "./Components/MiniProjects/StopWatch";
import DigitalClock from "./Components/MiniProjects/DigitalClock";

const App = () => {
  const [darkMod, setDarkMod] = useState(false);

  useEffect(() => {
    if (darkMod) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMod]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-[#2C2C2C] dark:text-white transition-colors duration-1000">
      <Router>
        <Navbar darkMod={darkMod} setDarkMod={setDarkMod} />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/stopwatch" element={<StopWatch />} />
          <Route path="/digitalClock" element={<DigitalClock />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
