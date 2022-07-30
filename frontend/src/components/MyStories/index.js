import React from "react";
import LandHeader from "../LandingPage/LandHeader";
import StoriesMain from "./StoriesMain";

const Index = ({userDetails}) => {
  return (
    <div>
      <LandHeader />
      <StoriesMain userDetails = {userDetails} />
    </div>
  );
};

export default Index;
