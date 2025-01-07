import React from "react";
import Footer from "../../../Shared/Footer/Footer";
import Header from "../../../Shared/Header/Header";
import PageTitle from "../../../Shared/PageTitle/PageTitle";
import Banner from "../Banner/Banner";
import Experts from "../Experts/Experts";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <PageTitle title="Home"></PageTitle>
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
      <Experts></Experts>
      <Footer></Footer>
    </div>
  );
};

export default Home;
