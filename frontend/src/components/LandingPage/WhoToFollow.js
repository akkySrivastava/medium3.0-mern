import React from "react";
import Avatar from "react-avatar";

const WhoToFollow = () => {
  return (
    <div className="follow-content">
      <Avatar
        size="50"
        round={true}
        src="https://miro.medium.com/fit/c/48/48/1*tPfbBeQ23qMKUptWlw1FaQ.jpeg"
      />
      <div className="info">
        <h3>Paul Greenberger</h3>
        <span>New York Times</span>
      </div>
      <button>Follow</button>
    </div>
  );
};

export default WhoToFollow;
