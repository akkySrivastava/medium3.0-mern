import axios from "axios";
import React, { useEffect, useState } from "react";
import "./css/RecommendedPost.css";
import reactHtmlParser from 'react-html-parser'
import moment from "moment";
import { Link } from "react-router-dom";

const RecommededPosts = () => {
  const [stories, setStories] = useState();
  useEffect(() => {
    async function getStories() {
      await axios
        .get("/api/stories")
        .then((res) => {
          // console.log(res.data.data);
          setStories(res.data.data?.slice(0, 9));
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    }
    getStories();
  }, []);
  return (
    <div className="post">
      <div className="post-container">
        <div className="post-top">
          <svg
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none"
            className="ip y"
          >
            <path fill="#fff" d="M0 .8h28v28H0z"></path>
            <g opacity="0.8" clipPath="url(#trending_svg__clip0)">
              <path fill="#fff" d="M4 4.8h20v20H4z"></path>
              <circle cx="14" cy="14.79" r="9.5" stroke="#000"></circle>
              <path
                d="M5.46 18.36l4.47-4.48M9.97 13.87l3.67 3.66M13.67 17.53l5.1-5.09M16.62 11.6h3M19.62 11.6v3"
                stroke="#000"
                strokeLinecap="round"
              ></path>
            </g>
            <defs>
              <clipPath id="trending_svg__clip0">
                <path
                  fill="#fff"
                  transform="translate(4 4.8)"
                  d="M0 0h20v20H0z"
                ></path>
              </clipPath>
            </defs>
          </svg>
          <span>TRENDING ON MEDIUM</span>
        </div>
        <div className="rcm-post-wrapper">
          <div className="rcm-post-container">
            <div className="rcm-posts">
              {
                stories?.map((data, index) => (
                  <Link to = {`/story/${data?._id}`}>
                    <React.Fragment key={index}>
                        <div className="rcm-post">
                      <div className="rcm-post-left">
                        <span>{index + 1}</span>
                      </div>
                      <div className="rcm-post-right">
                        <div className="rcm-post-content">
                          <div className="top">
                            <img
                              src={data?.userDetails[0]?.photoURL}
                              alt="logo"
                            />
                            <span>{data?.userDetails[0]?.displayName} Blog</span>
                          </div>
                          <div className="content">
                            <p>
                              {reactHtmlParser(data?.title)}
                            </p>
                          </div>
                          <div className="footer">
                            <span>{moment(data?.created_at).format('DD MM, YYYY')} · 2 min read </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    </React.Fragment>
                  </Link>
                
              ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommededPosts;
