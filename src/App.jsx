import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

const App = () => {
  const [darkMod, setDarkMod] = useState(false);

  useEffect(() => {
    if (darkMod) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMod]);

  return (
    <div>
      <Navbar darkMod={darkMod} setDarkMod={setDarkMod} />

      <Hero />
    </div>
  );
};

export default App;
