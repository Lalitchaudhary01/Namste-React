import React from "react";
import ReactDOM from "react-dom";

// React code
const heading = React.createElement("h1", { id: "heading" }, "Namaste-react");
console.log(heading);

//JSX
const jsxHeading = <h1 id="heading">Namaste-React</h1>;
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
