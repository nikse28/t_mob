import React from "react";
import { Select } from "antd";

const dropdown = () => {
  const handleChangeCity = e => {
    console.log("E", e);
  };

  const { Option } = Select;
  const sourceObj = [
    {
      id: 1,
      sources: "New Delhi"
    },
    {
      id: 2,
      sources: "Mumbai"
    },
    {
      id: 3,
      sources: "Goa"
    }
  ];

  return (
    <div>
      <Select style={{ width: 120 }} onChange={handleChangeCity}
        placeholder="Select Source"
      >
        {sourceObj.map(res => {
          return (
            <Option value={res.sources} key={res.id}>
              {res.sources}
            </Option>
          );
        })}
      </Select>
    </div>
  );
};

export default dropdown;
