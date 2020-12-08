import React from "react";
import { Header } from "./header/header";
import Hero from "./sections/hero"
import Skills from "./sections/skills"

const App = () => (
  <div className="app">
    <Header /> 
    <Hero /> 
    <Skills /> 
  </div>
);

export default App;
