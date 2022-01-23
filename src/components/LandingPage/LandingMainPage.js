import React from "react";
import LandingRecommendedPost from "./LandingRecommendedPost";
import "./css/LandingMainPage.css";
import WhoToFollow from "./WhoToFollow";

const LandingMainPage = () => {
  return (
    <div className="landing-main">
      <div className="landing-main-container">
        <div className="landing-main-left">
          <div className="landing-main-tabs">
            <div className="tab">
              <span>FOLLOWING</span>
            </div>
            <div className="tab active">
              <span>RECOMMENDED FOR YOU</span>
            </div>
          </div>
          <div className="landing-write-story">
            <h6>Share your ideas with millions of readers.</h6>
            <button>Write on Medium</button>
          </div>
          <div className="landing-recommended-posts">
            <LandingRecommendedPost />
            <LandingRecommendedPost />
            <LandingRecommendedPost />
            <LandingRecommendedPost />
            <LandingRecommendedPost />
            <LandingRecommendedPost />
          </div>
        </div>
        <div className="landing-main-right">
          <div className="recommended-topics">
            <h2>Recommended topics</h2>
            <div className="topic">
              <span>Technology</span>
              <span>Money</span>
              <span>Business</span>
              <span>Productiviy</span>
              <span>Psychology</span>
              <span>Mindfulness</span>
              <span>Art</span>
            </div>
          </div>
          <div className="follow">
            <h2>Who to follow</h2>
            <WhoToFollow />
            <WhoToFollow />
            <WhoToFollow />
            <WhoToFollow />
            <WhoToFollow />
            <WhoToFollow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingMainPage;
