
//async se convierte en promesa
// const saludo = async () => {
//     return('hola mundo')
// }

// saludo().then((res) => console.log(res))


const peticion = async () => {
    setTimeout(() => {
        const datos = {

            userId: 1,
            id: 4,
            title: "eum et est occaecati",
            body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit"

        }
        console.log(datos)
    }, 1000) // esperar 1 segundo

}
peticion().then(console.log())