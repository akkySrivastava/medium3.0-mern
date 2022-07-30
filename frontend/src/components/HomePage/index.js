import React, { useEffect } from "react";
import HomeHeader from "./HomeHeader";
import MainPage from "./MainPage";
import RecommededPosts from "./RecommededPosts";
import "antd/dist/antd.css";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";

function Index() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/", {
        replace: true,
      });
    }
  }, [navigate, user]);

  const signInPopup = async () => {
    await signInWithPopup(auth, provider);
  };
  return (
    <div>
      <HomeHeader signInPopup={signInPopup} />
      <main
        style={
          {
            //   width: "100%",
            //   display: "flex",
            //   flexDirection: "column",
          }
        }
      >
        <MainPage signInPopup={signInPopup} />
        <RecommededPosts />
      </main>
    </div>
  );
}

export default Index;
