import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/Navlogo.png";
import "./SignUp.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SocialLogin from "../../Pages/SocialLogin/SocialLogin";
import PageTitle from "../PageTitle/PageTitle";

const SignUp = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    createUserWithEmailAndPassword(email, password);
    console.log("Form Submitted", name, email, password);

    if (password !== confirmPassword) {
      return alert(error);
    }
  };

  const handleSignUpChanges = () => {
    if (user) {
      navigate("/Login");
    }
  };

  return (
    <div className="SignUp">
      <PageTitle title="Sign Up"></PageTitle>
      <img className="mt-5 mb-4" src={logo} alt="" />
      <h2 className="text-dark texts text-center fw-bold">Please Sign Up</h2>

      <Form onSubmit={handleSignUp} className="w-25 mb-4 mx-auto mt-4">
        <Form.Group className="mb-3 name-field " controlId="formBasicEmail">
          <Form.Control ref={nameRef} type="text" placeholder="Name" required />
        </Form.Group>
        <Form.Group className="mb-3 email-field" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Email"
            required
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
          />
        </Form.Group>
        <Form.Group
          className="mb-3 confirmPassword-field"
          controlId="formBasicPassword"
        >
          <Form.Control
            ref={confirmPasswordRef}
            type="password"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>
        <button onClick={handleSignUpChanges} className="buttons w-100">
          Sign Up
        </button>
      </Form>
      <div>
        <Link
          className="pe-auto link-style fw-bolder text-decoration-none"
          to="/Login"
        >
          Already have an account?
        </Link>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default SignUp;
