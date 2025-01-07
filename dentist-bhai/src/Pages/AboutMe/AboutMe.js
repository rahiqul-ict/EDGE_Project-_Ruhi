import React from "react";
import mine from "../../images/Mine.png";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import "./About.css";
const AboutMe = () => {
  return (
    <div className="About">
      <div>
        <img style={{ height: "300px" }} src={mine} alt="" />
      </div>

      <div className="text-div">
        <h2>Hi There, I'm</h2>
        <h5>Shadman Shakib</h5>
        <p>
          I Want To Be A Professional Full Stack Web Developer Within 2023. I
          Continuously Working Hard To Reac My Goal. In Sha Allah I Will Be
          Succesfull.
        </p>
      </div>
      <PageTitle title="About Me"></PageTitle>
    </div>
  );
};

export default AboutMe;
