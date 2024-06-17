import React from "react";
import Resource from "./Assets/1.png";
import collab from "./Assets/2.png";
import progress from "./Assets/3.png";
import search from "./Assets/4.png"

const Work = () => {
  const workInfoData = [
    {
      image: Resource,
      title: "Resouce Library",
      text: "Offers access to academic materials and research resources." 
    },
    {
      image: collab,
      title: "Collaborative Tools",
      text: "Facilitates effective supervision and communication during dissertation process.",
    },
    {
      image: progress,
      title: "Progress Tracker",
      text: "Enables students and guides to track progress of dissertation research.",
    },
    {
      image: search,
      title: "Search Tool",
      text: "Allows students to browse and select dissertation topics from list of available options using seach feature.",
    },

  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">Features</h1>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
