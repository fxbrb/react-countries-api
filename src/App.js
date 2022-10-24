import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* Renvoie sur l'accueil si l'url ne correspond a rien */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
