import MaterialTable from 'material-table';
import React, { Component } from 'react';

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
            title: 'Product Image',
            field: 'url_to_image',
            render: (row) =>
               <img
                  src={row.url_to_image}
                  alt=""
                  style={{
                     width: 40,
                     height: 40,
                     marginLeft: 8
                  }}
               />
         },
         {
            title: 'Product Name',
            field: 'product_name'
         },
         {
            title: 'Purchase Price',
            field: 'purchase_price'
         },
         {
            title: 'Selling Price',
            field: 'selling_price'
         },
         {
            title: 'Stock',
            field: 'stock'
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
                  }
               }
               editable={{
                  onRowAdd: (newRow) => new Promise((resolve, reject) => {
                     const updatedRows = [
                        ...listAllData,
                        newRow
                     ];
                     alert(`name: , surname:`);
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