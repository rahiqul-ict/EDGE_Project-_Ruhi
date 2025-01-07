import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import google from "../../images/button/google.png";
import "./SocialLogin.css";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (user) {
    navigate("/");
  }
  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-3 mb-3">
        <div
          style={{ height: "2px" }}
          className=" bg-danger rounded style-line"
        ></div>

        <div
          style={{ height: "2px" }}
          className=" bg-danger rounded style-line"
        ></div>
        <div>
          <div className="btnss">
          
            <Link
              onClick={() => signInWithGoogle()}
              className="w-25 mb-3 btns "
            >
              <img
                style={{ height: "20px" }}
                className="bg-dark rounded mx-1"
                src={google}
                alt=""
              />
              Google Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialLogin;
