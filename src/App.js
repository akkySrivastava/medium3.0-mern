import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LandHeader from "./components/LandingPage";
import MyStories from "./components/MyStories";
import Lists from "./components/Lists";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/me/lists" element={<Lists />} />
          <Route path="/me/stories" element={<MyStories />} />
          <Route path="/getting-started" element={<HomePage />} />
          <Route path="/" element={<LandHeader />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
