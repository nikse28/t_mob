import React, { Component } from "react";
import { Select, Input ,Button } from "antd";
import sourceData from "../../data/SourceData";
import recordData from "../../data/RecordData";
import entityData from "../../data/EntityData";
import MapTable from "./MapTable";

class ReconRules extends Component {

  /* load data from external file */
  sourceData = sourceData;
  recordData = recordData;
  entityData = entityData;

  filterRecord = [];
  filterEntityData = [];
  mappingRuleTable = [{ id: "", "name ": " " }];
  count = 0;
  constructor(props) {
    super(props);
    this.state = {
    };
  }



  /* Handle source change DropDown*/
  handleSourceChange = e => {
    this.filterRecord = [];
    recordData.filter(data => {
      if (e === data.sourceId) {
        this.filterRecord.push(data);
      }
    });
    this.setState({});
  };

  /* Add Rule  Table Dynamically */
  handleAddRule = () => {
    console.log("works");
    this.mappingRuleTable.push({ id: this.count++, "name ": "John" });
    this.setState({ })
  };

  /* handle Record Change Dropdown*/

  handleRecordChange=(e)=> {
    console.log('ERTO',e);
    this.filterEntityData = [];
    this.entityData.filter(data => {
      if (e === data.recordId) {
        console.log('Entity data...',data);
        this.filterEntityData.push(data);
      }
    });

  }

  render() {
    const { Option } = Select;
    const { TextArea } = Input;
    return (
      <div style={{ padding: 20 }}>
        Source :
        <Select
          style={{ width: 120 }}
          onChange={this.handleSourceChange}
          placeholder="Select Source"
        >
          {this.sourceData.map(res => {
            return (
              <Option value={res.sourceId} key={res.sourceId}>
                {res.sourceName}
              </Option>
            );
          })}
        </Select>
        <span style={{ marginLeft: 2 }}>Record Type:</span>
        <Select
          style={{ width: 120 }}
          onChange={this.handleRecordChange}
          placeholder="Select Record"
        >
          {this.filterRecord.map(res => {
            return (
              <Option value={res.recordId} key={res.recordId}>
                {res.recordName}
              </Option>
            );
          })}
        </Select>
        <br />
        <p>Notes:</p>
        <TextArea style={{ width: 350 }} id="notes" name="notes" />
        <br />
        <br />
        <Button onClick={this.handleAddRule}>+ Add Rule</Button>
        <br />
        <br />
        <br />
        <p><b>Transaction Selection Rule</b></p>
        {this.mappingRuleTable.map(res => {
          return(
            <div key={res.id}>
                  <MapTable parameterData={this.filterEntityData}/>
              </div>
          )
        })}
      </div>
    );
  }
}

export default ReconRules;
