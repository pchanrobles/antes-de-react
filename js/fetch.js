//Arquitectura rest

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((response)=>
     response.json()
    //console.log(response)
)
.then((data)=>{
    console.log(data)
})

