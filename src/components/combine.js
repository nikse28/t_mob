import React, { Component } from "react";
import { Select, Input } from "antd";
import Dropdown from "./Dropdown";
import Button from "./Button";
import MapTable from "./Maptable";

class Combine extends Component {
  cityName;
  recordName;
  count = 0;
  dynamic = [{ id: "1", "name ": "JOhn" }];
  sourceObj = [
    {
      id: 1,
      sources: "Source1"
    },
    {
      id: 2,
      sources: "Source2"
    },
    {
      id: 3,
      sources: "Source3"
    }
  ];

  recordObj = [
    {
      id: 1,
      sources: "Record 1"
    },
    {
      id: 2,
      sources: "Record 2"
    },
    {
      id: 3,
      sources: "Record 3"
    }
  ];
  constructor(props) {
    super(props);
    this.state = {
      notes: "",
      dynamic: [{ id: "1", "name ": "JOhn" }]
    };
  }
  handleChangeCity = e => {
    console.log("E", e);
    this.cityName = e;
  };
  handleRecord = e => {
    console.log(e);
    this.recordName = e;
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("$$$", e);
    console.log("Change value", this.state);
  };

  handleRule = e => {
    console.log("handle rule", e);
    console.log("this.count+1;", this.count++);
    this.dynamic.push({ id: this.count++, "name ": "John" });
    this.setState({});
  };

  handleChange = e => {
    this.setState({
      notes: e.target.value,
      sources: this.cityName,
      record: this.recordName
    });

    console.log("handleChange", e.target.value);
  };
  render() {
    const { TextArea } = Input;
    const { Option } = Select;
    return (
      
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <Select
            style={{ width: 120 }}
            onChange={this.handleChangeCity}
            placeholder="Select Source"
          >
            {this.sourceObj.map(res => {
              return (
                <Option value={res.sources} key={res.id}>
                  {res.sources}
                </Option>
              );
            })}
          </Select>

          <Select
            style={{ width: 120 }}
            onChange={this.handleRecord}
            placeholder="Select Record"
          >
            {this.recordObj.map(res => {
              return (
                <Option value={res.sources} key={res.id}>
                  {res.sources}
                </Option>
              );
            })}
          </Select>

          <TextArea
            rows={4}
            id="notes"
            name="notes"
            onChange={this.handleChange}
          />
          {/* <button type="submit"> + Add </button> */}
        </form>
        <br />
        <button onClick={this.handleRule}> Add Rule </button>
        <br/> <br/>
        {this.dynamic.map(res => {
          return (
            <div key={Math.random()}>
              <Dropdown/>
              <br/>   
              {/* <MapTable/> */}
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Combine;
