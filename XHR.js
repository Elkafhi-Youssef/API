// class  for do requests for post or get data from API
 const request = new XMLHttpRequest()
 // open calling 
 /*
 HTTP method
 GET :GET data 
 POST :Create data
 PUT :Update data
 Delete :Delete data
 */
 request.open('GET','http://jsonplaceholder.typicode.com/posts',true)
//  3 param just for do anything sync or async 

const posts =  document.querySelector('#posts')
request.onload =  function (){
    const data = JSON.parse(this.responseText)
    let output =''
    for(post of data){
        output+=
        `<li>
        </h3>
        ${post.title}
        <h3>
        </li>
        `
    }
    output+=''
  
    posts.innerHTML=output;
    console.log(data)
    
}
request.send()

