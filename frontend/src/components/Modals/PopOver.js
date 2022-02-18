import { Popover } from "antd";
import React from "react";

const PopOver = () => {
  return (
    <Popover
      content={<a onClick={this.hide}>Close</a>}
      title="Title"
      trigger="click"
      visible={this.state.visible}
      onVisibleChange={this.handleVisibleChange}
    >
      {/* <Button type="primary">Click me</Button> */}
    </Popover>
  );
};

export default PopOver;
