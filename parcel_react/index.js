import React from "react";
import ReactDOM from "react-dom/client";

const elem = React.createElement("h1", null, "Hello World");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(elem);