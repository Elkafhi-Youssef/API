 const axios = require('axios')
 
 axios({
    url:'/todos',
    baseURL:'https://jsonplaceholder.typicode.com/',
    method:'get'
 })
 .then((response)=>{
     console.log(response.data);
 })
 .catch((er)=>{
     console.log(err);
    })
    .then(()=>{
        console.log("End http request");
    })