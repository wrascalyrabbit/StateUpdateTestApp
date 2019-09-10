import React from "react";
import { Button } from "@material-ui/core";

const ComponentTwo = props => {
  const { setState } = props;

  const updateTitle = e => {
    var newJO = {
      job_object: {
        id: 1,
        hostname: "ASAHOU102",
        schema: {},
        formData: { hostname: "ASAHOU102", mgmt_ip: "2.2.2.2" }
      }
    };
    setState(prevState => {
      return { ...prevState, job_object: newJO };
    });
  };

  return (
    <Button variant="contained" color="primary" onClick={updateTitle}>
      Set Title
    </Button>
  );
};

export default ComponentTwo;
