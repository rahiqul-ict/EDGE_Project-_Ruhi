import React from "react";
import "./Expert.css";
import insta from "../../../images/button/ig.png";
import fb from "../../../images/button/Fb.png";
import github from "../../../images/button/github.png";

const Expert = ({ expert }) => {
  const { name, title, img } = expert;
  return (
    <div className="expert">
      <div className="expert-details">
        <img style={{ height: "250px" }} src={img} alt="" />
        <h5>{name}</h5>
        <p>{title}</p>
        <div>
          <img className="mx-2" style={{ height: "30px" }} src={fb} alt="" />
          <img className="mx-2" style={{ height: "30px" }} src={insta} alt="" />
          <img style={{ height: "45px" }} src={github} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Expert;
