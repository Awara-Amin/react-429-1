import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

const citrus = ["Lim", "Lemon", "Orange"];
// const fruits = ["Apple", "Banana", "Coconut"];
//  to combine these two arrays
// const fruits = ["Apple", "Banana", "Coconut", ...citrus];

const fruits = ["Apple", ...citrus, "Banana", "Coconut", ...citrus];

console.log(fruits);

const fullName = {
  fName: "James",
  lName: "Bond"
};

const user = {
  // .fullName,
  ...fullName,
  id: 1,
  username: "jamesbond007"
};

console.log(user);
