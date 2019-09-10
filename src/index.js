import React, { useState } from "react";
import ReactDOM from "react-dom";
import ComponentTwo from "./Components/comp_two";
import ComponentOne from "./Components/comp_one";

const App = () => {
  const [state, setState] = useState({
    title: "StateUpdateTestApp",
    job_object: { id: 1, schema: {}, formData: {}, uiSchema: {} }
  });
  return (
    <React.Fragment>
      <ComponentOne state={state} />
      <ComponentTwo setState={setState} />
    </React.Fragment>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
