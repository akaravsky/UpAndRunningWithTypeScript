import * as React from "react";
import { render } from "react-dom";

type Salutation = {
  greeting: string;
  name?: string;
};

const input = document.getElementById("input") as HTMLInputElement;
input.autofocus = true;

input.addEventListener("input", event => {
  //console.log(event.currentTarget.value) //error
  const i = event.currentTarget as HTMLInputElement;
  console.log(i.value);
});

function fill<IDontKnow>(arr: any[], val: IDontKnow): IDontKnow[] {
  return arr.map(() => val);
}

const res = fill([1, 2, 3], "a");

const App = () => {
  function greet({ greeting, name }: Salutation): string {
    return `${greeting}, John!`;
  }

  return (
    <React.Fragment>
      <div>{greet({ greeting: "Function" })}</div>
    </React.Fragment>
  );
};

render(<App />, document.getElementById("app"));
