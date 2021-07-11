import './App.css';
import CTable from './Component/CTable';
import React, { Component } from 'react';
import { getAllData } from './Helper/ActionGlobal';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allData: false,
    }
  }

  componentDidMount() {
    this._handlerGetAllData();
  }

  async _handlerGetAllData() {
    const readAllData = await getAllData();
    this.setState({
      listAllData: readAllData.data
    });
    console.log("CTable@_handlerGetAllData", readAllData.data);
  }

  render() {
    const { listAllData } = this.state;

    return (
      <div className="App">
        <h2> PT Nutech Programing Test</h2>
        <CTable
          listAllData={listAllData}
        />
      </div>
    );
  }
}