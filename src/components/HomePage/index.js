import React from "react";
import HomeHeader from "./HomeHeader";
import MainPage from "./MainPage";
import RecommededPosts from "./RecommededPosts";
import "antd/dist/antd.css";

function Index() {
  return (
    <div>
      <HomeHeader />
      <main
        style={
          {
            //   width: "100%",
            //   display: "flex",
            //   flexDirection: "column",
          }
        }
      >
        <MainPage />
        <RecommededPosts />
      </main>
    </div>
  );
}

export default Index;
