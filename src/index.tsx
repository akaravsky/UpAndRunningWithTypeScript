import * as React from "react";
import { render } from "react-dom";

type Salutation = {
  greeting: string;
  name?: string;
};

const App = () => {
  function greet({ greeting, name }: Salutation): string {
    return `${greeting}, John!`;
  }

  return <div>{greet({ greeting: "Function" })}</div>;
};

render(<App />, document.getElementById("app"));
