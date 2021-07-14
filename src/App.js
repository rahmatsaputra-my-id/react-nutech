import './App.css';
import CTable from './Component/CTable';
import React, { Component } from 'react';

export default class App extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div className="App">
            <h2>Programing Test Rahmat Saputra</h2>
            <CTable/>
         </div>
      );
   }
}