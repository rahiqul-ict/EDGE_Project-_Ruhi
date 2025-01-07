import React from "react";
import banner from "../../../images/Banner.png";

const Banner = () => {
  const bannerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    flexWrap: "wrap",
    textAlign: "center",
  };

  const bannerDetailsStyle = {
    margin: "20px",
    flex: "1 1 300px",
  };

  const imgDivStyle = {
    flex: "1 1 300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const imgStyle = {
    maxWidth: "100%",
    height: "auto",
  };

  const text0Style = {
    fontWeight: "bold",
    fontSize: "24px",
  };

  const text1Style = {
    fontSize: "36px",
    marginTop: "10px",
  };

  const text2Style = {
    fontSize: "18px",
    marginTop: "20px",
  };

  return (
    <div style={bannerStyle}>
      <div style={bannerDetailsStyle}>
        <h2 style={text0Style}>WELCOME TO MY CLINIC</h2>
        <h1 style={text1Style}>My Clinic is The Best</h1>
        <h1 style={text1Style}>Dental Clinic.</h1>
        <p style={text2Style}>
          With Dentist Bhai's Clinic, a bright smile is right around the corner.
          Dentist Bhai's Clinic is your go-to neighborhood dentist in
          Mymensingh. When it comes to your teeth and oral health, you need to
          have a fantastic team beside you. At Dentist Bhai's Clinic, that is
          what you will get!!!
        </p>
      </div>
      <div style={imgDivStyle}>
        <img src={banner} alt="Banner" style={imgStyle} />
      </div>
    </div>
  );
};

export default Banner;
