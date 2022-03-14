 const axios = require('axios')
 
 axios({
    url:'/todos/',
    baseURL:'https://jsonplaceholder.typicode.com/',
    method:'get',
    params :{
        id:1
    }
 })
 .then((response)=>{
     console.log(response.data);
     // data predefine for access to it
 })
 .catch((er)=>{
     console.log(err);
    })
    .then(()=>{
        console.log("End http request");
    })


    //---------------------------aliase