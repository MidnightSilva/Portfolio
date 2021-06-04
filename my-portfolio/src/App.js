import React from "react";
import HomePage from "./pages/HomePage";
import Nav from "./components/Nav";
import "./CSS/App.css";
import "./CSS/Nav.css";
import "./CSS/AboutMe.css";
import "./CSS/Project.css";
import "./CSS/form.css";

function App() {
  return (
    <>
      <Nav />
      <HomePage />
    </>
  );
}
export default App;
