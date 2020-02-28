import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import './index.css';

export default function Index() {
  document.title = "Router Example";

  return (
    <App />
  )
}

ReactDOM.render(<Index />, document.getElementById("root"));
