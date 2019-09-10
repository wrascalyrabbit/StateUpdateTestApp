import React from "react";

const ComponentOne = props => {
  const { state } = props;
  const { title, job_object } = state;

  var ss = JSON.stringify(state);

  return (
    <div>
      <h1>{title}</h1>
      {ss}
    </div>
  );
};

export default ComponentOne;
