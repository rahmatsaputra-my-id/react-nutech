import MaterialTable from 'material-table';
import React, { Component } from 'react';
import { getAllData } from '../../Helper/ActionGlobal';

export default class CTable extends Component {
   constructor(props) {
      super(props);

      this.state = {
         page: 0,
      }
   }

   render() {

      const columns = [
         {
            title: 'ID',
            field: 'id',
            editable: false
         },
         {
            title: 'UserID',
            field: 'userId',
            editable: false
         },
         {
            title: 'Title',
            field: 'title'
         },
         {
            title: 'Body',
            field: 'body'
         }
      ];
      const { page } = this.state;
      const { listAllData } = this.props;

      return (
         <div>
            <MaterialTable
               title="Material Table"
               data={listAllData}
               columns={columns}
               options={{
                  search: true,
                  paging: true,
                  filtering: false,
                  exportButton: true,
                  actionsColumnIndex: -1,
                  addRowPosition: 'first'
               }}
               page={page}
               onChangePage={
                  (event, page) => {
                     this.setState({
                        ...this.state,
                        page
                     })
                  }}
               editable={{
                  onRowAdd: (newRow) => new Promise((resolve, reject) => {
                     const updatedRows = [
                        ...listAllData,
                        newRow
                     ];
                     setTimeout(() => {
                        this.setState({
                           allData: updatedRows
                        })
                        resolve();
                     }, 500);
                     console.log("onRowAdd", newRow);
                  }),
                  onRowDelete: selectedRow => new Promise((resolve, reject) => {
                     const index = selectedRow.tableData.id;
                     const updatedRows = [...listAllData];
                     updatedRows.splice(index, 1)
                     setTimeout(() => {
                        this.setState({
                           allData: updatedRows
                        })
                        resolve();
                     }, 500);
                     console.log("onRowDelete", updatedRows);
                  }),
                  onRowUpdate: (updatedRow, oldRow) => new Promise((resolve, reject) => {
                     const index = oldRow.tableData.id;
                     const updatedRows = [...listAllData];
                     updatedRows[index] = updatedRow
                     setTimeout(() => {
                        this.setState({
                           allData: updatedRows
                        })
                        resolve();
                     }, 500);
                     console.log("onRowUpdate", updatedRows);
                  })
               }}
            />
         </div >
      );
   }
}