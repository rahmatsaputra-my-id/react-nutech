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

      if (readAllData) {
         this.setState({
            listAllData: readAllData.data.data
         });
         console.log("CTable@_handlerGetAllData", readAllData.data.data);
      }
   }

   render() {
      const { listAllData } = this.state;

      return (
         <div className="App">
            <h2> PT Nutech Programing Test Rahmat Saputra</h2>
            <CTable
               listAllData={listAllData}
            />
         </div>
      );
   }
}