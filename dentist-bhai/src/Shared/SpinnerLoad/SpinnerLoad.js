import React from "react";
import { Spinner } from "react-bootstrap";

const SpinnerLoad = () => {
  return (
    <div
      style={{ height: "600px" }}
      className="w-100 d-flex justify-content-center align-items-center"
    >
      <Spinner animation="border" variant="info" />
    </div>
  );
};

export default SpinnerLoad;
