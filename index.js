let postForm = document.querySelector('.postForm')
let btnget = document.querySelector('.btnget')

postForm.addEventListener('submit',(form)=>{
    form.preventDefault();
    let formData = new FormData(postForm);

    // let values = [...formData.entries()]
    // console.log(values);
        fetch("http://localhost/ipa/add.php",{
        method:"POST",
        body:formData
    }).then((response)=> {
        return response.json();
    })
    .then(data=> console.log(data))
} ) 
btnget.addEventListener('click',async(e)=>{
    e.preventDefault();
    let response =await fetch("http://localhost/ipa/read.php")
    let data = await response.json()
    console.log(data.data[1])
} )