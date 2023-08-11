import './App.css';
import Home from "./pages/Home";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Certification from "./pages/Certification";


function App() {
  return (
    <>
       <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home/>} />
          <Route path={"/AboutMe"} element={<AboutMe/>} />
          <Route path={"/Skills"} element={<Skills/>} />
          <Route path={"/Certification"} element={<Certification/>} />
          <Route path={"/Projects"} element={<Projects/>} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
    
  );
}

export default App;
