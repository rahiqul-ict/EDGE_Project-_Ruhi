import React from "react";
import "./Blogs.css";
import img from "../../images/authen vs autho.png";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const Blogs = () => {
  return (
    <div className="Blog">
      <PageTitle title="Blogs"></PageTitle>
      <h5 className="mx-5 mt-5">
        (Q.) Difference between authorization and authentication?
      </h5>
      <p className="mx-5">
        (A.) <img style={{ height: "400px" }} src={img} alt="" />
      </p>
      <h5 className="mx-5 mt-3">(Q.) Why are you using firebase?</h5>
      <p className="mx-5 mt-3 text-justify">
        (A.) The Firebase Realtime Database lets you build rich, collaborative
        applications by allowing secure access to the database directly from
        client-side code. Data is persisted locally, and even while offline,
        realtime events continue to fire, giving the end user a responsive
        experience.
      </p>
      <h5 className="mx-5 mt-3">
        (Q.) What other options do you have to implement authentication?
      </h5>
      <p className="mx-5 mt-3">
        (A.) Usually, authentication by a server entails the use of a user name
        and password. Other ways to authenticate can be through cards, retina
        scans, voice recognition, and fingerprints.
      </p>
      <h5 className="mx-5 mt-3">
        (Q.) What other services does firebase provide other than
        authentication?
      </h5>
      <p className="mx-5 mt-3">
        (A.)The core features of Firebase include NoSQL databases, real-time
        queries, scalable hosting, data storage, file storage, REST APIs,
        authentication, machine learning, and analytics.
      </p>
    </div>
  );
};

export default Blogs;
