import React from "react";
import LandHeader from "../LandingPage/LandHeader";
import ListMain from "./ListMain";

const Index = ({userDetails}) => {
  return (
    <div>
      <LandHeader />
      <ListMain userDetails = {userDetails} />
    </div>
  );
};

export default Index;
