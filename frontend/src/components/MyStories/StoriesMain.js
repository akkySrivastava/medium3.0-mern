import React from "react";
import Stories from "./Stories";
import "./css/StoriesMain.css";
import { Link } from "react-router-dom";

const StoriesMain = () => {
  return (
    <div className="story-main">
      <div className="story-main-container">
        <div className="story-main-header">
          <h2>Your stories</h2>
          <div className="header-buttons">
            <button>Import a story</button>
            <Link to="/new-story">
              <button>Write a story</button>
            </Link>
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
