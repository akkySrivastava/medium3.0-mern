import React from "react";
import Stories from "../MyStories/Stories";

const ListMain = () => {
  return (
    <div className="story-main">
      <div className="story-main-container">
        <div className="story-main-header">
          <h2>Your lists</h2>
          <div className="header-buttons">
            <button>New list</button>
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

export default ListMain;
