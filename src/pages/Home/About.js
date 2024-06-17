import React from "react";
import AboutBackground from "./Assets/about-background.png";
import AboutBackgroundImage from "./Assets/about-background-image.png";
//import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container" id = 'about'>
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" /> 
      </div>
      <div className="about-section-text-container">
        {/* {<p className="primary-subheading">About</p> */}
        <h1 className="primary-heading">
       Our vision
        </h1>
        <p className="primary-text">
        Desserta is committed to revolutionizing the management of postgraduate dissertations. We strive to make the journey from topic selection to publication seamless and impactful. Our user-centric approach ensures that every feature of our platform addresses the needs of the academic community, fostering a culture of excellence in research.
        </p>
        {/* <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default About;
