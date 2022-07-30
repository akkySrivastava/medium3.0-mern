import React from "react";
import LandHeader from "./LandHeader";
import LandingMainPage from "./LandingMainPage";

const Index = ({userDetails}) => {
  return (
    <div>
      <LandHeader />
      <main>
        <LandingMainPage userDetails = {userDetails} />
      </main>
    </div>
  );
};

export default Index;
