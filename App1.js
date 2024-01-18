import React from "react";
import ReactDOM from "react-dom";

// React Element
// const heading = React.createElement("h1", { id: "heading" }, "React");
// console.log(heading);

// JSX
// const heading = <h1 id="heading">hey buddy!</h1>;

// console.log(heading);

//React Componets
const elem = <span>React-element</span>;
const Title = () => (
  <h1 className="head">
    {elem}
    Namste react
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    {/* <title></title> ={<title />}  {Title()}*/}
    {Title()}
    <h1 className="heading">Namste-React functional component</h1>
  </div>
);

// Render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
