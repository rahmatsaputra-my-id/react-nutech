import axios from "axios";


export const getAllData = async ( fullName, email, subject, description, customerName, attachmentToken) => {
   const baseUrl = "https://jsonplaceholder.typicode.com"
   try {
   //   const config = {
   //     headers: {
   //       "Authorization": "Bearer " + actZendesk
   //     },
   //   };
 
   //   const body = {
   //     ticket: {
   //       ticket_form_id: "360003061114" ,
   //       subject: subject,
   //       comment: {
   //         body: description,
   //         uploads: attachmentToken
   //       },
   //       custom_fields: 
   //         [
   //           { id: 360036659793, value: fullName },
   //           { id: 360036659813, value: email },
   //           { id: 360036659793, value: customerName }
   //         ]
   //       ,
   //       collaborators: [email, { name: fullName, email: email }]
   //     }
   //   };

     const url = baseUrl + "/posts";
     const result = await axios.get(url);
     return result;
   //   return await AxiosAdapter.post(url, body, config);
   } catch (error) {
     console.log('ActionGlobal.web@postTicketZendeskWidget', error.message);
     return false;
   }
 };

//  export const getDataById = async ( fullName, email, subject, description, customerName, attachmentToken) => {
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
//      console.log('ActionGlobal.web@postTicketZendeskWidget', error.message);
//      return false;
//    }
//  };

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

// export const postData = async ( fullName, email, subject, description, customerName, attachmentToken) => {
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
//      console.log('ActionGlobal.web@postData', error.message);
//      return false;
//    }
//  };