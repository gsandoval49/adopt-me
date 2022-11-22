import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Paco" animal="Dog" breed="Chihuahua Mix" />
      <Pet name="Pablo" animal="Dog" breed="Chihuahua Mix" />
      <Pet name="Luna" animal="Dog" breed="Pug " />
    </div>
  );
};


render(<App />, document.getElementById("root"));
