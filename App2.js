// // const heading = React.createElement(
// //   "h1",
// //   { id: root },
// //   "Hello world from React!"
// // );
// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(heading);
// import React from "react";
// import ReactDOM from "react-dom";

// // const parent = React.createElement("div", { id: "parent" }, [
// //   React.createElement("div", { id: "child" }, [
// //     React.createElement("h1", {}, "I'm a h1 tag"),
// //     React.createElement("h2", {}, "I'm h2"),
// //   ]),
// //   React.createElement("div", { id: "child2" }, [
// //     React.createElement("h1", {}, "I'm h1"),
// //     React.createElement("h2", {}, "I'm h2"),
// //   ]),
// // ]);

// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(parent);

import React from "react";
import ReactDOM from "react-dom";

// React code
// const heading = React.createElement("h1", { id: "heading" }, "React");
// console.log(heading);

// JSX
const jsxHeading = <h1 id="heading">hey buddy!</h1>;

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
