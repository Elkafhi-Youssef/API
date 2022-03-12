let postForm = document.querySelector('.postForm')

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