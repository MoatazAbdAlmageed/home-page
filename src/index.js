import React from "react";
import ReactDOM from "react-dom";
import Repos from "./components/Repos";
import VSCode from "./components/VSCode";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <Repos />
      <VSCode />
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
