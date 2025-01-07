import React from "react";
import logo from "../../images/Navlogo.png";
import insta from "../../images/button/ig.png";
import fb from "../../images/button/Fb.png";
import youtube from "../../images/button/yt.png";
import github from "../../images/button/github.png";

const footerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  padding: "20px",
  backgroundColor: "#f5f5f5",
  color: "black",
  marginTop: "20px",
};

const sectionStyle = {
  flex: "1",
  padding: "15px",
  minWidth: "200px",
};

const logoStyle = {
  height: "80px",
  marginBottom: "10px",
};

const socialIconsStyle = {
  display: "flex",
  marginTop: "10px",
  marginLeft: "25px",
  gap: "10px",
};

const iconStyle = {
  height: "30px",
};

const iconStyleLast = {
  height: "40px",
};

const titleStyle = {
  marginBottom: "10px",
};

const linkStyle = {
  margin: "5px 0",
};

const inputStyle = {
  width: "100%",
  padding: "8px",
  marginBottom: "10px",
  border: "none",
  borderRadius: "4px",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const buttonHoverStyle = {
  backgroundColor: "#0056b3",
};

const Footer = () => {
  return (
    <div style={footerStyle}>
      <div style={sectionStyle}>
        <img style={logoStyle} src={logo} alt="Logo" />
        <div style={socialIconsStyle}>
          <img style={iconStyle} src={fb} alt="Facebook" />
          <img style={iconStyle} src={insta} alt="Instagram" />
          <img style={iconStyle} src={youtube} alt="YouTube" />
          <img style={iconStyleLast} src={github} alt="GitHub" />
        </div>
      </div>
      <div style={sectionStyle}>
        <h5 style={titleStyle}>Support</h5>
        <p style={linkStyle}>Contact Us</p>
        <p style={linkStyle}>FAQ</p>
        <p style={linkStyle}>Downloads</p>
        <p style={linkStyle}>Registration</p>
        <p style={linkStyle}>Sign Up</p>
      </div>
      <div style={sectionStyle}>
        <h5 style={titleStyle}>Doctor Bhai</h5>
        <p style={linkStyle}>About Doctor Bhai</p>
        <p style={linkStyle}>Doctor Bhai Team</p>
        <p style={linkStyle}>Newsroom</p>
        <p style={linkStyle}>Doctor Bhai Access</p>
      </div>
      <div style={sectionStyle}>
        <p>Stay up to date from Doctor Bhai</p>
        <input style={inputStyle} type="email" placeholder="Enter Your Email" />
        <button
          style={{ ...buttonStyle }}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = buttonStyle.backgroundColor)
          }
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Footer;
