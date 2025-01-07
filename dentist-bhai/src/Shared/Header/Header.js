import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../images/Navlogo.png";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import "./Header.css";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const [isOpen, setIsOpen] = useState(false);

  const logout = () => {
    signOut(auth);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="header">
      <img src={logo} alt="Logo" />
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <Link className="link" to="/Blogs" onClick={() => setIsOpen(false)}>
          Blogs
        </Link>
        <Link className="link" to="/About" onClick={() => setIsOpen(false)}>
          About
        </Link>
        <Link className="link" to="/Checkout" onClick={() => setIsOpen(false)}>
          Checkout
        </Link>
        <Link className="link" to="/Login" onClick={() => setIsOpen(false)}>
          Login
        </Link>
        {user ? (
          <Link
            className="link"
            to=""
            onClick={() => {
              logout();
              setIsOpen(false);
            }}
          >
            Sign Out
          </Link>
        ) : (
          <Link className="link" to="/SignUp" onClick={() => setIsOpen(false)}>
            Sign Up
          </Link>
        )}
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? (
          <FaTimes className="text-black" />
        ) : (
          <FaBars className="text-black" />
        )}
      </div>
    </nav>
  );
};

export default Header;
