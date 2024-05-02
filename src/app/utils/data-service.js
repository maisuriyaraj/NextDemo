import axios from "axios";

export const  postRequest =   (url,payload={},headers={}) => {
   return new Promise((resolve,reject)=>{
        try {
            axios.post(url,payload,{headers:headers}).then((response)=>{
                console.log(response);
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        } catch (error) {
            console.log(error);
        }
   })
}

export const  getRequest =   (url,payload={},headers={}) => {
    return new Promise((resolve,reject)=>{
         try {
             axios.get(url,payload,{headers:headers}).then((response)=>{
                 console.log(response);
                 resolve(response)
             }).catch(error => {
                 reject(error)
             })
         } catch (error) {
             console.log(error);
         }
    })
 }