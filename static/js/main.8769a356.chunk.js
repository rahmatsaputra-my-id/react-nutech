(this["webpackJsonpreact-nutech"]=this["webpackJsonpreact-nutech"]||[]).push([[0],{366:function(t,e,a){},367:function(t,e,a){},447:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(14),s=a.n(c),u=(a(366),a(175)),o=a(176),i=a(196),p=a(195),l=(a(367),a(348)),d=a(54),g=a.n(d),h=a(119),m=a(83),f=a(320),b=a(232),A=a.n(b),v=a(201),O=a.n(v),j=function(){var t=Object(m.a)(g.a.mark((function t(e,a,n,r,c){var s,u,o;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,"https://staging.rahmatsaputra.my.id",s={headers:{"Content-Type":"multipart/form-data; boundary=MultipartBoundry;"}},(u=new FormData).append("url_to_image",e),u.append("product_name",a),u.append("purchase_price",n),u.append("selling_price",r),u.append("stock",c),"https://staging.rahmatsaputra.my.id/v0/nutech/product",t.next=12,O.a.post("https://staging.rahmatsaputra.my.id/v0/nutech/product",u,s);case 12:return o=t.sent,t.abrupt("return",o);case 16:return t.prev=16,t.t0=t.catch(0),console.log("ActionGlobal.js@createData",t.t0.response),t.abrupt("return",t.t0.response);case 20:case"end":return t.stop()}}),t,null,[[0,16]])})));return function(e,a,n,r,c){return t.apply(this,arguments)}}(),y=function(){var t=Object(m.a)(g.a.mark((function t(e,a,n,r,c){var s,u,o,i;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,"https://staging.rahmatsaputra.my.id",s={headers:{"Content-Type":"multipart/form-data; boundary=MultipartBoundry;"}},(u=new FormData).append("product_name",a),u.append("purchase_price",n),u.append("selling_price",r),u.append("stock",c),u.append("_method","PATCH"),o="https://staging.rahmatsaputra.my.id/v0/nutech/product/"+e,t.next=12,O.a.post(o,u,s);case 12:return i=t.sent,t.abrupt("return",i);case 16:return t.prev=16,t.t0=t.catch(0),console.log("ActionGlobal.web@updateData",t.t0.response),t.abrupt("return",!1);case 20:case"end":return t.stop()}}),t,null,[[0,16]])})));return function(e,a,n,r,c){return t.apply(this,arguments)}}(),w=function(){var t=Object(m.a)(g.a.mark((function t(e){var a,n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,"https://staging.rahmatsaputra.my.id",a="https://staging.rahmatsaputra.my.id/v0/nutech/product/"+e,t.next=5,O.a.delete(a);case 5:return n=t.sent,t.abrupt("return",n);case 9:return t.prev=9,t.t0=t.catch(0),console.log("ActionGlobal.js@deleteData",t.t0.response),t.abrupt("return",t.t0.response);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}(),C=a(36),D=function(t){Object(i.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(u.a)(this,a),(n=e.call(this,t)).state={listAllData:!1,attachment:[],showButtonFilesUpload:!0},n}return Object(o.a)(a,[{key:"_handlerPostData",value:function(){var t=Object(m.a)(g.a.mark((function t(e){var a,n,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={url_to_image:e[1],product_name:e[0].product_name,purchase_price:e[0].purchase_price,selling_price:e[0].selling_price,stock:e[0].stock},n=Object.values(a),t.next=4,j.apply(void 0,Object(h.a)(n));case 4:if(200!==(r=t.sent).status){t.next=10;break}this.setState({showButtonFilesUpload:!0,attachment:[]}),alert("\nProduct data saved successfully!"),t.next=17;break;case 10:if(!r.data.status.messages.user){t.next=17;break}if(!r.data.status.messages.user.product_name){t.next=15;break}return this.setState({showButtonFilesUpload:!0,attachment:[]}),alert("\nProduct data failed to upload!\n".concat(r.data.status.messages.user.product_name)),t.abrupt("return");case 15:this.setState({showButtonFilesUpload:!0,attachment:[]}),alert("\nProduct data failed to upload!\n".concat(r.data.status.messages.user));case 17:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"_handlerPutData",value:function(){var t=Object(m.a)(g.a.mark((function t(e){var a,n,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("_handlerPutData@updateRowDataInput",e),a={id:e.id,product_name:e.product_name,purchase_price:e.purchase_price,selling_price:e.selling_price,stock:e.stock},n=Object.values(a),t.next=5,y.apply(void 0,Object(h.a)(n));case 5:if(200!==(r=t.sent).status){t.next=10;break}alert("\nProduct data updated successfully!"),t.next=15;break;case 10:if(!r.data.status.messages.user){t.next=15;break}if(!r.data.status.messages.user.product_name){t.next=14;break}return alert("\nProduct data failed to upload!\n".concat(r.data.status.messages.user.product_name)),t.abrupt("return");case 14:alert("\nProduct data failed to upload!\n".concat(r.data.status.messages.user));case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"_handlerDeleteDataById",value:function(){var t=Object(m.a)(g.a.mark((function t(e){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(e);case 2:200===t.sent.status&&alert("\nProduct data deleted successfully!");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.state,a=e.listAllData,n=e.attachment,c=e.showButtonFilesUpload,s=r.a.createRef(),u=[{title:"Product Image",field:"url_to_image",filtering:!1,editComponent:function(e){return Object(C.jsxs)("div",{children:[c&&!e.rowData.id&&Object(C.jsxs)(f.a,{variant:"contained",component:"label",style:{fontSize:9},children:["Upload Foto",Object(C.jsx)("input",{type:"file",style:{display:"none"},id:"input",accept:".jpg, .png",onChange:function(e){var a=e.target.files[0],r=Object(h.a)(n);t.setState({showButtonFilesUpload:!1,attachment:[]}),alert("\nImage uploaded successfully!"),a&&r.push(a),t.setState({attachment:r[0]})}})]}),e.rowData.url_to_image&&Object(C.jsx)("img",{src:e.rowData.url_to_image,alt:"",style:{width:100,height:100}})]})},render:function(t){return Object(C.jsx)("img",{src:t.url_to_image?t.url_to_image:"data:image/png;base64,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",alt:"",style:{width:(t.url_to_image,100),height:(t.url_to_image,100),marginLeft:t.url_to_image?8:0}})}},{title:"Product Name",field:"product_name",validate:function(t){return void 0===t.product_name||""===t.product_name?"Required":!(t.product_name.length<3)||"Product name should contain  at least  3 char"}},{title:"Purchase Price",field:"purchase_price",type:"numeric",validate:function(t){return void 0!==t.purchase_price&&""!==t.purchase_price||"Required"}},{title:"Selling Price",field:"selling_price",type:"numeric",validate:function(t){return void 0!==t.selling_price&&""!==t.selling_price||"Required"}},{title:"Stock",field:"stock",type:"numeric",validate:function(t){return void 0!==t.stock&&""!==t.stock||"Required"}}];return Object(C.jsx)("div",{children:Object(C.jsx)(A.a,{title:"Product Table",tableRef:s,data:function(e){return new Promise((function(a,n){if(e.search.length>0){var r="https://staging.rahmatsaputra.my.id/v0/nutech/product?";r+="q="+(null===e||void 0===e?void 0:e.search),fetch(r).then((function(t){return t.json()})).then((function(e){return 200==e.meta.http_status_code&&(t.setState({listAllData:e.data}),a({data:e.data,page:e.current_page-1,totalCount:e.total})),a(),!0}))}else{var c="https://staging.rahmatsaputra.my.id/v0/nutech/product?";c+="per_page="+e.pageSize,c+="&page="+(e.page+1),fetch(c).then((function(t){return t.json()})).then((function(e){t.setState({listAllData:e.data}),a({data:e.data,page:e.current_page-1,totalCount:e.total})}))}}))},columns:u,options:{paging:!1,actionsColumnIndex:-1,addRowPosition:"first"},editable:{onRowAdd:function(e){return new Promise((function(a,r){setTimeout((function(){var r=[e];r.push(n),t._handlerPostData(r),a(),s.current&&s.current.onQueryChange()}),1e3)}))},onRowDelete:function(e){return new Promise((function(n,r){var c=e.tableData.id,u=Object(h.a)(a)[c].id;setTimeout((function(){t._handlerDeleteDataById(u),n(),s.current&&s.current.onQueryChange()}),500)}))},onRowUpdate:function(e,n){return new Promise((function(r,c){var u=n.tableData.id,o=Object(h.a)(a)[u].id,i=Object.entries(e).filter((function(t){var e=Object(l.a)(t,2),a=e[0];e[1];return"id"==a||"url_to_image"==a||"product_name"==a||"purchase_price"==a||"selling_price"==a||"stock"==a})),p=Object.fromEntries(i,o);setTimeout((function(){t._handlerPutData(p),r(),s.current&&s.current.onQueryChange()}),1e3)}))}}})})}}]),a}(n.Component),x=function(t){Object(i.a)(a,t);var e=Object(p.a)(a);function a(t){return Object(u.a)(this,a),e.call(this,t)}return Object(o.a)(a,[{key:"render",value:function(){return Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)("h2",{children:"Programing Test Rahmat Saputra"}),Object(C.jsx)(D,{})]})}}]),a}(n.Component),k=function(t){t&&t instanceof Function&&a.e(6).then(a.bind(null,851)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,c=e.getLCP,s=e.getTTFB;a(t),n(t),r(t),c(t),s(t)}))};s.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(x,{})}),document.getElementById("root")),k()}},[[447,1,3]]]);
//# sourceMappingURL=main.8769a356.chunk.js.map