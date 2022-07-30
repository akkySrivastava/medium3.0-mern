import React, { useEffect, useState } from "react";
import Stories from "./Stories";
import "./css/StoriesMain.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { Skeleton } from "antd";

const StoriesMain = ({userDetails}) => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (userDetails?._id) {
      async function getStories() {
        setLoading(true)
        await axios
          .get(`/api/stories/user/${userDetails?._id}`)
          .then((res) => {
            console.log(res.data);
            setStories(res.data.data.reverse());
            setLoading(false);
          })
          .catch((err) => {
            console.log(err.response.data.message);
            setLoading(false);
          });
      }

      getStories();
    }
  }, [userDetails]);
  return (
    <div className="story-main">
      <div className="story-main-container">
        <div className="story-main-header">
          <h2>Your stories</h2>
          <div className="header-buttons">
            <button>Import a story</button>
            <Link to="/new-story">
              <button>Write a story</button>
            </Link>
          </div>
        </div>
        <div className="stories-content">
          {[...Array(5)].map((_, index) => {
            return (
              <>
                {loading && (
                  <Skeleton.Button
                    style={{
                      height: "100px",
                      margin: "10px 0",
                    }}
                    active={true}
                    size={"lage"}
                    shape={"default"}
                    block={true}
                    key={index}
                  />
                )}
              </>
            );
          })}
          {
            stories?.length === 0 && `No stories found`
          }
          {stories?.map((data) => (
            <Stories key={data?._id} data={data} />
          ))}

          {/* <Stories />
          <Stories />
          <Stories />
          <Stories />
          <Stories />
          <Stories />
          <Stories /> */}
        </div>
      </div>
    </div>
  );
};

export default StoriesMain;
