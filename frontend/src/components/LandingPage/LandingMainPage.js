import React, { useState } from "react";
import LandingRecommendedPost from "./LandingRecommendedPost";
import "./css/LandingMainPage.css";
import WhoToFollow from "./WhoToFollow";
import { Link } from "react-router-dom";

const LandingMainPage = () => {
  const [tab, setTab] = useState(0);
  return (
    <div className="landing-main">
      <div className="landing-main-container">
        <div className="landing-main-left">
          <div className="landing-main-tabs">
            <div
              onClick={() => setTab(0)}
              className={`tab ${tab === 0 && "active"}`}
            >
              <span>FOLLOWING</span>
            </div>
            <div
              onClick={() => setTab(1)}
              className={`tab ${tab === 1 && "active"}`}
            >
              <span>RECOMMENDED FOR YOU</span>
            </div>
          </div>
          <div className="landing-write-story">
            <h6>Share your ideas with millions of readers.</h6>
            <Link to="/new-story">
              <button>Write on Medium</button>
            </Link>
          </div>
          {tab === 0 && (
            <>
              {/* <div className="follow"> */}
              {/* <h2>Who to follow</h2> */}
              <WhoToFollow />
              <WhoToFollow />
              <WhoToFollow />
              <WhoToFollow />
              <WhoToFollow />
              <WhoToFollow />
              {/* </div> */}
            </>
          )}
          {tab === 1 && (
            <div className="landing-recommended-posts">
              <LandingRecommendedPost />
              <LandingRecommendedPost />
              <LandingRecommendedPost />
              <LandingRecommendedPost />
              <LandingRecommendedPost />
              <LandingRecommendedPost />
            </div>
          )}
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
