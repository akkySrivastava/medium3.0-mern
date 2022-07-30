import { Skeleton } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Stories from "../MyStories/Stories";

const ListMain = ({userDetails}) => {
  console.log(userDetails)
  const [readingList, setReadingList] = useState()
  const [loading, setLoading] = useState(false)
  useEffect(() => {

    async function getReadingList(){
      setLoading(true)
      await axios.get(`/api/user/get-list/${userDetails?._id}`).then((res) => {
        setLoading(false)
          console.log(res.data.data)
          let story = res.data?.data?.reverse()
          setReadingList(story)
      }).catch((err) => {
        setLoading(false)
      })
    }
      getReadingList()
  }, [userDetails])
  return (
    <div className="story-main">
      <div className="story-main-container">
        <div className="story-main-header">
          <h2>Your lists</h2>
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
          {readingList?.map((data) => (
            <Stories key={data?._id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListMain;
