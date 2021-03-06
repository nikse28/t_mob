import React, { Component } from 'react';
import { Table,Icon, Menu,Dropdown,Input, Button, Popconfirm, Form ,Select} from 'antd';

const EditableContext = React.createContext();
const { Option } = Select;
const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  state = {
    editing: false,
  };

  toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus();
      }
    });
  };

  save = e => {
    const { record, handleSave } = this.props;
    this.form.validateFields((error, values) => {
      if (error && error[e.currentTarget.id]) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  };


  renderCell = form => {

    this.form = form;
    const { children, dataIndex, record, title } = this.props;
    const { editing } = this.state;
    const menu = (
      <Menu>
        <Menu.Item key="1">1st menu item</Menu.Item>
        <Menu.Item key="2">2nd menu item</Menu.Item>
        <Menu.Item key="3">3rd menu item</Menu.Item>
      </Menu>
    );
    return editing ? (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          rules: [
            {
              required: true,
              message: `${title} is required.`,
            },
          ],
          initialValue: record[dataIndex],
        })(
          <Dropdown overlay={menu}>
          <span style={{ userSelect: "none" }}>hover on Me</span>
        </Dropdown>    
        )}
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onClick={this.toggleEdit}
      >
        {children}
      </div>
    );
  };
  

  render() {
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editable ? (
          <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
        ) : (
          children
        )}
      </td>
    );
  }
}

class EditableTable extends React.Component {
    
  handleFieldChange(e){
    console.log('e',e);
    console.log('e val',e);
    
  }
  onSaveTransactionRow(e,key) {
    console.log('EE',e.value);
    console.log('Key',key);
  }
  onDeleteTransactionRow(e,keya) {
    console.log('key',keya);
    console.log(e)
    this.setState({})
  }
  constructor(props) {
    super(props);
    console.log('PROP PROP',props);
    this.columns = [
      {
        title: 'Parameter',
        dataIndex: 'name',
        width: '30%',
        render:()=>{
          return(
            <Select style={{width:120}}  onChange={this.handleFieldChange}>
              <Option value={"val1"}>
              SAKDL
              </Option>
              <Option value={'val2'}>
              QWNKSJA
              </Option>
            </Select>
          )
        }
      },
      {
        title: 'Operator',
        dataIndex: 'age',
        
        render:()=>{
          return(
            <Select style={{width:120}}>
              <Option value="EQUAL">{"="}</Option>
                    <Option value="NOTEQUAL">{"!="}</Option>
                    <Option value="LTE">{"<="}</Option>
                    <Option value="GTE">{">="}</Option>
                    <Option value="LT">{"<"}</Option>
            </Select>
          )
        }
      },
      {
        title: 'Value',
        dataIndex: 'address',
        
        render:()=>{
          return(
            <Input/>
          )
        }
      },
      {
        title: 'Notes',
        dataIndex: 'Notes',
        render:()=>{
          return(
            <Input/>
          )
        }
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        
        render: (text, record) => {
          return(
            <div>
              <Icon style={{fontSize:18,color:"black"}} type="save" /> |
              <Icon style={{fontSize:18,color:"black"}} onClick={e => this.onDeleteTransactionRow(e, record.key)} type="delete"/>
            </div>
          )
        }

      },
    ];

    this.state = {
      dataSource: [
        {
          key: '0',
          name: 'Edward King 0',
          age: '32',
          address: 'London, Park Lane no. 0',
          
        },
        
      ],
      count: 1,
    };
  }

  handleDelete = key => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  };

  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: 32,
      address: `London, Park Lane no. ${count}`,
      render:()=>{
        return(
          <Select><Option>AHSDasnd</Option> </Select>
        )
      }
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };

  handleSave = row => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    this.setState({ dataSource: newData });
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div>
        <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
          Add a row
        </Button>
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
        />
      </div>
    );
  }
}

export default EditableTable;