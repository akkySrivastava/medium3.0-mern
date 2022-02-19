import { Avatar } from "antd";
import React from "react";
import { truncate } from "../../helpers/truncate";
// import Avatar from "react-avatar";

const WhoToFollow = ({ data }) => {
  return (
    <div className="follow-content">
      <Avatar
        size={40}
        // round={true}
        src={data?.photoURL}
      />
      <div className="info">
        <h3>{truncate(String(data?.displayName), 15)}</h3>
        <span>@{String(data?.email).split("@")[0]}</span>
      </div>
      <button
        style={{
          marginLeft: "auto",
        }}
      >
        Follow
      </button>
    </div>
  );
};

export default WhoToFollow;
