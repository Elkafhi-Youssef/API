// let data;
// async function get(){
//     const response  =await fetch("https://www.breakingbadapi.com/api/characters")
//      data  = await response.json()
//     console.log(data)
//     document.querySelector('#content').innerHTML +=  data[1].name;
//     document.querySelector('#content img').src =data[1].img
//     document.querySelector('#select select').innerHTML= 
//     `
//     ${
//         data.map(actor =>`  <option value="${actor.name}">${actor.name}</option>`)
//     }
   
//     `
// }
// const select  =document.querySelector('#select select')
// function sel(){
//     let val =select.value;
//     console.log("is here");
    
//     data.filtter(actor =>{

//         if(val ==actor.name){

//             console.log("is here2");
//         }
//     })
    

// }

// get()


const myPromise = new Promise((resolve, reject) => {

if (Math.random()* 100 < 50) resolve("Good");
else reject("Bad");
});

myPromise.then(
(resolved) => console.log(resolved),
(rejected) => console.log(rejected)
);
