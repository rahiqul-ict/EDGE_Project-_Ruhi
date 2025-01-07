import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { name, price, img, description } = service;
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/Checkout");
  };
  return (
    <div className="single-item shadow-lg mb-3 mx-auto">
      <div>
        <img style={{ height: "50px" }} className="mt-2" src={img} alt="" />
        <h4 className="mt-3"> {name}</h4>
        <h5 className="mt-2"> $ {price}</h5>
        <p className="mt-2"> {description}</p>
        <button onClick={handleCheckout} className="btn btn-info">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Service;
