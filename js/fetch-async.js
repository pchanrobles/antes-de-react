// puedo tener un async sin un await pero nunca una await sin antes un async

const peticion = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/8')
    //convertir a json
    const data = await response.json()
    //console.log(response)

    return data;
};
const data = peticion().then(console.log)
