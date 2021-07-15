import { Button } from '@material-ui/core';
import MaterialTable from 'material-table';
import React, { Component } from 'react';
import { deleteData, createData, updateData } from '../../Helper/ActionGlobal';

export default class CTable extends Component {
   constructor(props) {
      super(props);

      this.state = {
         listAllData: false,
         attachment: [],
         showButtonFilesUpload: true
      }
   }

   async _handlerPostData(newRowDataInput) {

      const postDataBody = {
         url_to_image: newRowDataInput[1],
         product_name: newRowDataInput[0].product_name,
         purchase_price: newRowDataInput[0].purchase_price,
         selling_price: newRowDataInput[0].selling_price,
         stock: newRowDataInput[0].stock
      }

      const postTicketBodyArray = Object.values(postDataBody);
      const result = await createData(...postTicketBodyArray);

      if (result.status === 200) {

         this.setState({
            showButtonFilesUpload: true,
            attachment: []
         })
         alert("\nProduct data saved successfully!")

      } else {

         if (result.data.status.messages.user) {
            if (result.data.status.messages.user.product_name) {

               this.setState({
                  showButtonFilesUpload: true,
                  attachment: []
               })
               alert(`\nProduct data failed to upload!\n${result.data.status.messages.user.product_name}`)

               return
            }

            this.setState({
               showButtonFilesUpload: true,
               attachment: []
            })
            alert(`\nProduct data failed to upload!\n${result.data.status.messages.user}`)

         }
      }
   }

   async _handlerPutData(updateRowDataInput) {

      console.log("_handlerPutData@updateRowDataInput", updateRowDataInput);

      const putDataBody = {
         // url_to_image: updateRowDataInput.url_to_image,
         id: updateRowDataInput.id,
         product_name: updateRowDataInput.product_name,
         purchase_price: updateRowDataInput.purchase_price,
         selling_price: updateRowDataInput.selling_price,
         stock: updateRowDataInput.stock
      }

      const valuePutDataBody = Object.values(putDataBody);
      const result = await updateData(...valuePutDataBody);

      if (result.status === 200) {

         alert("\nProduct data updated successfully!")

      } else {

         if (result.data.status.messages.user) {
            if (result.data.status.messages.user.product_name) {

               alert(`\nProduct data failed to upload!\n${result.data.status.messages.user.product_name}`)

               return
            }

            alert(`\nProduct data failed to upload!\n${result.data.status.messages.user}`)

         }
      }
   }

   async _handlerDeleteDataById(id) {
      const result = await deleteData(id);

      if (result.status === 200) {
         alert("\nProduct data deleted successfully!")
      }
   }

   render() {

      const { listAllData, attachment, showButtonFilesUpload } = this.state;
      const tableRef = React.createRef();

      const columns = [
         {
            title: 'Product Image',
            field: 'url_to_image',
            filtering: false,
            editComponent: (rowData) => (
               <div>
                  {
                     showButtonFilesUpload && !rowData.rowData.id &&
                     <Button
                        variant="contained"
                        component="label"
                        style={{ fontSize: 9 }}
                     >
                        {"Upload Foto"}
                        <input type="file" style={{ display: "none" }} id="input" accept=".jpg, .png"
                           onChange={(e) => {
                              const fl = e.target.files[0];
                              const newAttachment = [...attachment]

                              this.setState({ showButtonFilesUpload: false, attachment: [] })
                              alert("\nImage uploaded successfully!")

                              fl && newAttachment.push(fl)
                              this.setState({ attachment: newAttachment[0] })
                           }}
                        />
                     </Button>
                  }
                  {
                     rowData.rowData.url_to_image &&
                     <img
                        src={rowData.rowData.url_to_image}
                        alt=""
                        style={{
                           width: "100%",
                           height: "100%",
                           maxHeight: 150,
                           maxWidth: 150,
                           rezizeMode: "contain"
                        }}
                     />
                  }
               </div>
            ),
            render: (rowData) =>
               <div style={{width: "100%"}}>
                  <img
                     src={rowData.url_to_image ? rowData.url_to_image : "data:image/png;base64,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"}
                     alt=""
                     style={{
                        width: rowData.url_to_image ? "100%" : 150,
                        height: rowData.url_to_image ? "100%" : 150,
                        maxHeight: rowData.url_to_image ? 150 : 150,
                        maxWidth: rowData.url_to_image ? 150 : 150,
                        marginLeft: rowData.url_to_image ? 8 : 0,
                        rezizeMode: "contain"
                     }}
                  />
               </div>
         },
         {
            title: 'Product Name',
            field: 'product_name',
            validate: rowData => {
               if (rowData.product_name === undefined || rowData.product_name === '') {
                  return 'Required';
               } else if (rowData.product_name.length < 3) {
                  return 'Product name should contain  at least  3 char';
               }
               return true
            }
         },
         {
            title: 'Purchase Price',
            field: 'purchase_price',
            type: 'numeric',
            validate: rowData => {
               if (rowData.purchase_price === undefined || rowData.purchase_price === '') {
                  return 'Required';
               }
               return true
            }
         },
         {
            title: 'Selling Price',
            field: 'selling_price',
            type: 'numeric',
            validate: rowData => {
               if (rowData.selling_price === undefined || rowData.selling_price === '') {
                  return 'Required';
               }
               return true
            }
         },
         {
            title: 'Stock',
            field: 'stock',
            type: 'numeric',
            validate: rowData => {
               if (rowData.stock === undefined || rowData.stock === '') {
                  return 'Required';
               }
               return true
            }
         }
      ];

      return (
         <div>
            <MaterialTable
               title="Product Table"
               tableRef={tableRef}
               data={query =>
                  new Promise((resolve, reject) => {

                     if (query.search.length > 0) {
                        let url = 'https://staging.rahmatsaputra.my.id/v0/nutech/product?'
                        url += 'q=' + query?.search

                        fetch(url)
                           .then(response => response.json())
                           .then(result => {

                              if (result.meta.http_status_code == 200) {
                                 this.setState({
                                    listAllData: result.data
                                 })
                                 resolve({
                                    data: result.data,
                                    page: result.current_page - 1,
                                    totalCount: result.total
                                 })
                              }

                              resolve()
                              return true
                           })

                     } else {

                        let url = 'https://staging.rahmatsaputra.my.id/v0/nutech/product?'
                        url += 'per_page=' + query.pageSize
                        url += '&page=' + (query.page + 1)

                        fetch(url)
                           .then(response => response.json())
                           .then(result => {

                              this.setState({
                                 listAllData: result.data
                              })

                              resolve({
                                 data: result.data,
                                 page: result.current_page - 1,
                                 totalCount: result.total
                              })
                           })
                     }
                  })
               }
               columns={columns}
               options={{
                  paging: false,
                  actionsColumnIndex: -1,
                  addRowPosition: 'first'
               }}
               editable={{
                  onRowAdd: (newRow) => new Promise((resolve, reject) => {
                     setTimeout(() => {
                        const newRowDataInput = [newRow];

                        newRowDataInput.push(attachment);
                        { this._handlerPostData(newRowDataInput) }

                        resolve();
                        tableRef.current && tableRef.current.onQueryChange();

                     }, 1000);
                  }),
                  onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
                     const index = selectedRow.tableData.id;
                     const updatedRows = [...listAllData];
                     const selectedId = updatedRows[index].id;

                     setTimeout(() => {
                        { this._handlerDeleteDataById(selectedId) }

                        resolve();
                        tableRef.current && tableRef.current.onQueryChange();

                     }, 500);
                  }),
                  onRowUpdate: (updatedRow, oldRow) => new Promise((resolve, reject) => {
                     //looking for id
                     const index = oldRow.tableData.id;
                     const updatedRows = [...listAllData];
                     const selectedId = updatedRows[index].id;

                     // filter mandatory field from updatedRow
                     const asArray = Object.entries(updatedRow);

                     const filteringData = asArray.filter(
                        ([key, value]) =>
                           key == "id" ||
                           key == "url_to_image" ||
                           key == "product_name" ||
                           key == "purchase_price" ||
                           key == "selling_price" ||
                           key == "stock"
                     )

                     const asObject = Object.fromEntries(filteringData, selectedId);

                     // if (!asObject.url_to_image) {

                     //    const newRowDataInput = [updatedRow];
                     //    newRowDataInput.push(attachment);

                     //    console.log("newRowDataInput", newRowDataInput);
                     //    console.log("attachmentUpdate", attachment);

                     // }

                     setTimeout(() => {
                        // const updateRowDataInput = [asObject];

                        // updateRowDataInput.push(attachment);
                        // console.log("updateRowDataInput", asObject);
                        { this._handlerPutData(asObject) }

                        resolve();
                        tableRef.current && tableRef.current.onQueryChange();

                     }, 1000);
                  })
               }}
            />
         </div >
      );
   }
}