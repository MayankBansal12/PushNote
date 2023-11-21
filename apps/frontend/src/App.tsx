import * as React from "react";
import "./index.css";
import { CounterButton, NewTabLink } from "ui";

function App() {
  return (
    <div className="container">
      <h1 className="title">
        Admin <br />
        <span>Kitchen Sink</span>
      </h1>
      <CounterButton />
      <p className="text-blue-500 font-bold">
        Text
      </p>
    </div>
  );
}

export default App;
