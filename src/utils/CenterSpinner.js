import React from "react";
import { Spinner } from "react-bootstrap";

function CenterSpinner() {
  return (
    <div className="mt-5  text-center">
      <Spinner animation="border" variant="primary" />
    </div>
  );
}

export default CenterSpinner;
