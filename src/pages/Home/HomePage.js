import Home from "./Home";
import About from './About'
import Work from './Work'
import Contact from './Contact'
import Footer from './Footer'
import "./HomePage.css";
 

import React from "react";
import BannerBackground from "./Assets/home-banner-background.png";
import BannerImage from "./Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";



function HomePage() {
  return (
    <div className="App">
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
      <About/>
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
