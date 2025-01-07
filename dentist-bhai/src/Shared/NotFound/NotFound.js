import React from "react";
import "./NotFound.css";
import img from "../../images/NotFound.png";
const NotFound = () => {
  return (
    <div className="mt-5 NotFound">
      <img className="w-100" style={{height:'700px'}} src={img} alt="" />
    </div>
  );
};

export default NotFound;
