
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
btn2.onclick =()=>{
    const val = myInput.value;
    const fd = new FormData();
    fd.append('val',val)
    fd.append('id',1)
    fetch(url2,{
        method:'POST',
        body:fd
    }
    ).then((response)=>response.json())
    .then((data)=>{
        console.log(data.form)
        adder(`POST${data.form.val}`)
    })

}
function adder(html){
    const div  = document.createElement('div')
    div.innerHTML=`${html}`
        main.append(div)
    }