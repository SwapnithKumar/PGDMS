import React from "react";
import BannerBackground from "./Assets/home-banner-background.png";
import BannerImage from "./Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h4 className="primary-heading">
            PG DISSERTATION MANAGEMENT SYSTEM
          </h4>
          <p className="primary-text">
          -Mastering Dissertations, Simplifying Success.
          </p>
          <button className="secondary-button">
            View Journals <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
