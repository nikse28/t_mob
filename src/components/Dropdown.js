import React from "react";
import { Select } from "antd";
const dropdown = () => {

    // handleChange=(e)=>{
    //     console.log("Drop Down Select",e);
    // }
  return (
    <div>
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
    </div>
  );
};

export default dropdown;
