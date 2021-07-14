import Axios from "axios";


// export const getAllData = async () => {
//    try {
//       const baseUrl = "https://staging.rahmatsaputra.my.id";

//       const url = baseUrl + "/v0/nutech/product";
//       const result = await Axios.get(url);
//       //   return await AxiosAdapter.post(url, body, config);
//       return result;

//    } catch (error) {
//       console.log('ActionGlobal.web@postTicketZendeskWidget', error.message);
//       return false;
//    }
// };

export const postData = async (url_to_image, product_name,purchase_price,selling_price,stock) => {
   // console.log("ActionGlobal.js@postData>Top", url_to_image, product_name, purchase_price, selling_price, stock);
   try {
      const baseUrl = "https://staging.rahmatsaputra.my.id";
      const config = {
         headers: {
            "Content-Type": "multipart/form-data; boundary=MultipartBoundry;"
         },
      };

      var formData = new FormData();

      formData.append("url_to_image", url_to_image);
      formData.append("product_name", product_name);
      formData.append("purchase_price", purchase_price);
      formData.append("selling_price", selling_price);
      formData.append("stock", stock);

      const url = baseUrl + "/v0/nutech/product";
      const result = await Axios.post(url, formData, config);

      return result;
   } catch (error) {
      console.log('ActionGlobal.js@postData', error.response);
      return error.response;
   }
};

//  export const updateData = async ( fullName, email, subject, description, customerName, attachmentToken) => {
//    try {
//      const config = {
//        headers: {
//          "Authorization": "Bearer " + actZendesk
//        },
//      };

//      const body = {
//        ticket: {
//          ticket_form_id: "360003061114" ,
//          subject: subject,
//          comment: {
//            body: description,
//            uploads: attachmentToken
//          },
//          custom_fields: 
//            [
//              { id: 360036659793, value: fullName },
//              { id: 360036659813, value: email },
//              { id: 360036659793, value: customerName }
//            ]
//          ,
//          collaborators: [email, { name: fullName, email: email }]
//        }
//      };
//      const url = baseUrlZendesk + "api/v2/tickets.json";
//      return await AxiosAdapter.post(url, body, config);
//    } catch (error) {
//      console.log('ActionGlobal.web@updateData', error.message);
//      return false;
//    }
//  };

export const deleteData = async (id) => {

   try {
      const baseUrl = "https://staging.rahmatsaputra.my.id";
      const url = baseUrl + "/v0/nutech/product/" + id;
      const result = await Axios.delete(url);

      return result
   } catch (error) {
      console.log('ActionGlobal.js@deleteData', error.response);
      return error.response;
   }
};