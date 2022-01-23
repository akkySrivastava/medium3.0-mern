import React from "react";
import Stories from "./Stories";
import "./css/StoriesMain.css";

const StoriesMain = () => {
  return (
    <div className="story-main">
      <div className="story-main-container">
        <div className="story-main-header">
          <h2>Your stories</h2>
          <div className="header-buttons">
            <button>Import a story</button>
            <button>Write a story</button>
          </div>
        </div>
        <div className="stories-content">
          <Stories />
          <Stories />
          <Stories />
          <Stories />
          <Stories />
          <Stories />
          <Stories />
          <Stories />
        </div>
      </div>
    </div>
  );
};

export default StoriesMain;
