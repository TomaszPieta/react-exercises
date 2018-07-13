import React from "react";
import ReactDOM from "react-dom";
import Poll from './Poll';

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Poll />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
