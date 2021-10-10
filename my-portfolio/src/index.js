import React from "react";
import ReactDOM from "react-dom";
import "./dist/scss/App.scss";
import App from "./App";
import AppContextProvider from "./Context/AppContext";

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
