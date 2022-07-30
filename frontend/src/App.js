import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";
import MyStories from "./components/MyStories";
import OurStory from './components/OurStory'
import Membership from './components/Membership'
import Creators from './components/Creators'
import Lists from "./components/Lists";
import WriteStories from "./components/WriteStories/index";
import PrivateRoute from "./helpers/PrivateRoute";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import axios from "axios";
import { userId } from "./features/userIdSlice";
import ViewStory from './components/ViewStory'

function App() {
  const dispatch = useDispatch();
  // const user = useSelector(selectUser);
  const [userDetails, setUserDetails] =  useState()
  useEffect(() => {
    auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        console.log(authUser);
        dispatch(
          login({
            providerData: authUser.providerData[0],
          })
        );
        async function getUser() {
              await axios
                .get(`/api/user/${authUser?.email}`)
                .then(async (res) => {
                  console.log(res.data);
                  if (res.data.status) {
                    setUserDetails(res.data?.data)
                    dispatch(
                      userId(
                        res.data.data._id,
                      )
                    );
                  }
                  if (!res.data.status) {
                    const confHeader = {
                      headers: {
                        "Content-Type": "application/json",
                      },
                    };
                    const body = {
                      providerId: authUser?.providerId,
                      uid: authUser?.uid,
                      displayName: authUser?.displayName,
                      email: authUser?.email,
                      phoneNumber: authUser?.phoneNumber,
                      photoURL: authUser?.photoURL,
                    };
                    await axios
                      .post("/api/user", body, confHeader)
                      .then((res) => {
                        console.log(res.data);
                        setUserDetails(res.data?.data)
                        dispatch(
                          userId({
                            _id: res.data.data._id,
                          })
                        );
                      })
                      .catch((err) => {
                        console.log(err.response.data.message);
                      });
                  }
                });
        }

        getUser();
      }
    });
  }, [dispatch]);


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/getting-started" element={<HomePage />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/story/:id" element={<ViewStory userDetails = {userDetails} />} />
          <Route
            path="/new-story"
            element={
              <PrivateRoute>
                <WriteStories userDetails = {userDetails} />
              </PrivateRoute>
            }
          />
          <Route
            path="/me/lists"
            element={
              <PrivateRoute>
                <Lists userDetails = {userDetails} />
              </PrivateRoute>
            }
          />
          <Route
            path="/me/stories"
            element={
              <PrivateRoute>
                <MyStories userDetails = {userDetails} />
              </PrivateRoute>
            }
          />
          
          <Route
            path="/"
            element={
              <PrivateRoute>
                <LandingPage userDetails = {userDetails} />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
