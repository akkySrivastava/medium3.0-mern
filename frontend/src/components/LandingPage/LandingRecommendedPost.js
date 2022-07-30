import { Tooltip } from "antd";
import React from "react";
import "./css/LandingRecommendedPost.css";
import moment from "moment";
import { truncate } from "../../helpers/truncate";
import reactHtmlParser from "react-html-parser";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const LandingRecommendedPost = ({ data, userDetails }) => {

  const navigate = useNavigate()
  const addToList = async(id) => {
    const body = {
      userid: userDetails?._id
    }
    console.log(body)
    await axios.post(`/api/user/list/${id}`, 
                      body, 
                      ).then((res) => {
                        console.log('list added successfully')
                        navigate('/me/lists')
                    }).catch((err) => {
                      console.log(err.response.data.message)
                    })
  }
  return (
    <div className="landing-recommended-post">
      <div className="landing-recommended-post-container">
        <div className="landing-recommended-left">
          <div className="landing-top">
            <img src={data?.userDetails[0]?.photoURL} alt="logo" />
            <span>{data?.userDetails[0]?.displayName}</span>
          </div>
          <div className="landing-content">
            <Link to = {`/story/${data?._id}`}>{reactHtmlParser(data?.title)}</Link>
            
            {/* {truncate(reactHtmlParser(data?.title), 20)} */}
          </div>
          <div className="landing-footer">
            <span>
              {moment(data?.created_at).format("MMM DD")} · 6 min read
            </span>
            <div className="icons">
              <Tooltip title="Save">
                <span onClick={() => addToList(data?._id)}>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    class="px"
                  >
                    <path
                      d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                      fill="#292929"
                    ></path>
                  </svg>
                </span>
              </Tooltip>

              <span>
                <svg class="eh el py" width="25" height="25">
                  <path
                    d="M5 12.5c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41A1.93 1.93 0 0 0 7 10.5c-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41zm5.62 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.03.2-1.42.59-.39.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.43.59.56 0 1.03-.2 1.42-.59.39-.39.58-.86.58-1.41 0-.55-.2-1.02-.58-1.41a1.93 1.93 0 0 0-1.42-.59c-.56 0-1.04.2-1.43.59-.39.39-.58.86-.58 1.41z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="landing-recommended-right">
          <img
            width={50}
            src="https://media-public.canva.com/FzeL8/MAEva8FzeL8/1/tl.png"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingRecommendedPost;
