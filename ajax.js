
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const myInput = document.querySelector('input[name="val"]');
const main = document.querySelector('.container');
const url1 = 'https://httpbin.org/get';
const url2 = 'https://httpbin.org/post';
btn1.onclick = async()=>{
    const val = myInput.value;
    const url = `${url1}?val=${val}`
    let response = await fetch(url);
    console.log(response.status); // 200
    console.log(response.statusText); // OK 
    if (response.status === 200) {
        let data = await response.json();
        adder(data.args.val)
        
    }
  
}

function adder(html){
    const div  = document.createElement('div')
    div.innerHTML=`${html}hi`
        main.append(div)
}