import React, { useRef, useEffect } from "react";
import { Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/Navlogo.png";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/Checkout";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, error1] =
    useSendPasswordResetEmail(auth);

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  const handleSignUp = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  const handleResetPassword = async () => {
    const email = emailRef.current.value;
    const mail = await sendPasswordResetEmail(email);
    if (mail) {
      alert("Sent Email");
    }
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  };

  const formStyle = {
    alignItems: "center",
    width: "90%",
    maxWidth: "400px",
    marginBottom: "20px",
  };

  const linkStyle = {
    margin: "10px 0",
    fontWeight: "bold",
    textDecoration: "none",
    color: "#007bff",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  };

  const inputStyle = {
    maxWidth: "335px",
    padding: "10px",
    fontSize: "16px",
    marginBottom: "10px",
  };

  return (
    <div style={containerStyle}>
      <PageTitle title="Log In"></PageTitle>
      <h2 className="text-dark texts text-center fw-bold">Please Log In</h2>
      <Form onSubmit={handleSignUp} style={formStyle}>
        <Form.Group className="mb-3 email-field" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Email"
            required
            style={inputStyle}
          />
        </Form.Group>
        <Form.Group
          className="mb-3 password-field"
          controlId="formBasicPassword"
        >
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
            style={inputStyle}
          />
        </Form.Group>
        <button type="submit" style={buttonStyle}>
          Log In
        </button>
      </Form>
      <div>
        <Link to="/SignUp" style={linkStyle}>
          New to Dentist Bhai?
        </Link>
        <br />
        <Link onClick={handleResetPassword} to="" style={linkStyle}>
          Reset Password Here
        </Link>
      </div>
      <SocialLogin />
    </div>
  );
};

export default Login;
