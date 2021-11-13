
const peticion = async () => {
    // sin destucturing
    //const data = await axios.get('https://jsonplaceholder.typicode.com/posts/8')
    
    // con destructuring
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/8')
    //console.log(data)
    return data;
}
const data = peticion().then(console.log)