import React from "react";
import { BrowserRouter as Router, } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavMobile from "./components/NavMobile";
import "./dist/scss/App.scss";
import "./dist/scss/Nav.scss";
import "./dist/scss/Resume.scss";
import "./dist/scss/Skills.scss";
import "./dist/scss/LandingSection.scss";
import "./dist/scss/AboutMe.scss";
import "./dist/scss/Project.scss";
import "./dist/scss/Form.scss";
import AppContextProvider from "./Context/AppContext";

function App() {
  return (
    <>
      <AppContextProvider>
        <NavMobile/>
        <Router>
            <HomePage />
        </Router>
      </AppContextProvider>
    </>
  );
}
export default App;
