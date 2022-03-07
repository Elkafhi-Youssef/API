let data 
const API = "https://www.breakingbadapi.com/api/characters"
async function get(){
    const response  =await fetch(API)
      data  = await response.json()
     printData(data)
    }




    function printData(data){
 
       
        // document.querySelector('#content img').src =data[1].img
        document.querySelector('#select select').innerHTML= 
        `
        ${
            data.map(actor =>`  <option value="${actor.name}">${actor.name}</option>`)
         }
         
         `
     }
get()
function getch(value){
    data.forEach(element => {
        if(value == element.name){
           document.querySelector('#content img').src =element.img 
        }
        
    });
   
}

 


// const myPromise = new Promise((resolve, reject) => {

// if (Math.random()* 100 < 50) resolve("Good");
// else reject("Bad");
// });

// myPromise.then(
// (resolved) => console.log(resolved),
// (rejected) => console.log(rejected)
// );
