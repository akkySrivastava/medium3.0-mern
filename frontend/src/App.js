import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";
import MyStories from "./components/MyStories";
import Lists from "./components/Lists";
import WriteStories from "./components/WriteStories/index";
import PrivateRoute from "./helpers/PrivateRoute";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import axios from "axios";
import { userId } from "./features/userIdSlice";

function App() {
  const dispatch = useDispatch();
  // const user = useSelector(selectUser);
  const [userDetails, setUserDetails] = React.useState();
  useEffect(() => {
    auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        setUserDetails(authUser?.providerData[0]);
        console.log(authUser);

        dispatch(
          login({
            providerData: authUser.providerData[0],
          })
        );
      }
    });
  }, [dispatch]);

  useEffect(() => {
    if (userDetails) {
      async function getUser() {
        await axios
          .get(`http://localhost:80/api/user/${userDetails?.email}`)
          .then(async (res) => {
            console.log(res.data);
            if (res.data.status) {
              dispatch(
                userId({
                  _id: res.data.data._id,
                })
              );
            }
            if (!res.data.status) {
              const confHeader = {
                headers: {
                  "Content-Type": "application/json",
                },
              };
              const body = {
                providerId: userDetails?.providerId,
                uid: userDetails?.uid,
                displayName: userDetails?.displayName,
                email: userDetails?.email,
                phoneNumber: userDetails?.phoneNumber,
                photoURL: userDetails?.photoURL,
              };
              await axios
                .post("http://localhost:80/api/user", body, confHeader)
                .then((res) => {
                  console.log(res.data);
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
  }, [userDetails]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/new-story"
            element={
              <PrivateRoute>
                <WriteStories />
              </PrivateRoute>
            }
          />
          <Route
            path="/me/lists"
            element={
              <PrivateRoute>
                <Lists />
              </PrivateRoute>
            }
          />
          <Route
            path="/me/stories"
            element={
              <PrivateRoute>
                <MyStories />
              </PrivateRoute>
            }
          />
          <Route path="/getting-started" element={<HomePage />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <LandingPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
