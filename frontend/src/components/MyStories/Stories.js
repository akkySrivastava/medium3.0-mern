import { Tooltip } from "antd";
import React from "react";
import "./css/Stories.css";
import reactHtmlParser from "react-html-parser";
import moment from "moment";
import { Link } from "react-router-dom";

const Stories = ({ data }) => {
  return (
    <><Link to = {`/story/${data?._id}`}>
    <div className="stories">
      <div className="stories-top">
        <h4>{reactHtmlParser(data?.title)}</h4>
        <p>
          Hello Coding Aliens, How are you doing guys? Welcome back to another
          blog. But this time something interesting and unique...
        </p>
        <div className="footer">
          <span>
            Published on {moment(data?.created_at).format("MMM DD YYYY")} · 3
            min read
          </span>
          <Tooltip title="Share">
            <span>
              <svg width="25" height="25" class="eh">
                <g fillRule="evenodd">
                  <path d="M15.6 5a.42.42 0 0 0 .17-.3.42.42 0 0 0-.12-.33l-2.8-2.79a.5.5 0 0 0-.7 0l-2.8 2.8a.4.4 0 0 0-.1.32c0 .12.07.23.16.3h.02a.45.45 0 0 0 .57-.04l2-2V10c0 .28.23.5.5.5s.5-.22.5-.5V2.93l2.02 2.02c.08.07.18.12.3.13.11.01.21-.02.3-.08v.01"></path>
                  <path d="M18 7h-1.5a.5.5 0 0 0 0 1h1.6c.5 0 .9.4.9.9v10.2c0 .5-.4.9-.9.9H6.9a.9.9 0 0 1-.9-.9V8.9c0-.5.4-.9.9-.9h1.6a.5.5 0 0 0 .35-.15A.5.5 0 0 0 9 7.5a.5.5 0 0 0-.15-.35A.5.5 0 0 0 8.5 7H7a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h11a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"></path>
                </g>
              </svg>
            </span>
          </Tooltip>

          <span>
            <svg class="la" width="25" height="25">
              <path
                d="M5 12.5c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41A1.93 1.93 0 0 0 7 10.5c-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41zm5.62 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.03.2-1.42.59-.39.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.43.59.56 0 1.03-.2 1.42-.59.39-.39.58-.86.58-1.41 0-.55-.2-1.02-.58-1.41a1.93 1.93 0 0 0-1.42-.59c-.56 0-1.04.2-1.43.59-.39.39-.58.86-.58 1.41z"
                fillRule="evenodd"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </div></Link>
    </>
    
  );
};

export default Stories;
