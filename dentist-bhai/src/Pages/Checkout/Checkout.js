import React from "react";
import { useForm } from "react-hook-form";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import "./Checkout.css";
const Checkout = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="Checkout mb-3">
      <PageTitle title="Checkout"></PageTitle>
      <h1 className="text-center">This is Checkout Section.</h1>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input-field"
            {...register("firstName")}
            placeholder="Enter Your Name"
          />{" "}
          <br />
          <br />
          <input
            className="input-field"
            {...register("firstName")}
            placeholder="Enter Your Number"
            required
          />{" "}
          <br />
          <br />
          <input
            className="input-field"
            {...register("firstName")}
            placeholder="Enter Your Email"
            required
          />{" "}
          <br />
          <br />
          <input
            className="input-field"
            {...register("firstName")}
            placeholder="Enter Your Address"
            required
          />{" "}
          <br />
          <br />
          <input
            className="input-field"
            {...register("firstName")}
            placeholder="Enter Your Name"
            required
          />{" "}
          <br />
          <br />
          <select
            className="input-field text-center w-100"
            {...register("gender")}
          >
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Other">Other</option>
          </select>
          <br />
          <br />
          <input
            type="submit"
            className="w-100 input-field text-dark fw-bold bg-info"
          />
        </form>
      </div>
    </div>
  );
};

export default Checkout;
