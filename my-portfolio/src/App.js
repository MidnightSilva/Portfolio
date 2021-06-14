import React from "react";
import HomePage from "./pages/HomePage";
import Nav from "./components/Nav";
import "./dist/scss/App.scss";
import "./dist/scss/Nav.scss";
import "./dist/scss/Resume.scss";
import "./dist/scss/Skills.scss";
import "./dist/scss/LandingSection.scss";
import "./dist/scss/AboutMe.scss";
import "./dist/scss/Project.scss";
import "./dist/scss/Form.scss";

function App() {
  return (
    <>
      
        <Nav />
       <HomePage />            
    </>
  );
}
export default App;
