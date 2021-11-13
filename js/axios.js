// importar CND axios en html para poder utilizar la libreria
// 3 maneras de acceder
axios.get('https://jsonplaceholder.typicode.com/posts/4')
    //.then((data) => console.log(data))

    //para acceder a una propiedad determinada,luego .data.la propiedad a la que quiero acceder
    //.then((data)=>console.log(data.data.title))

    //para acceder a una propiedad determinada con destructuring agragamos {} dentro de la funcion,luego .data.la propiedad a la que quiero acceder
    .then(({ data }) => 
      //console.log(data.body))
      document.write(data.body))

