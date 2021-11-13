
const evaluar = ()=>{
    const edad = prompt('Cual es tu edad?')
if(edad < 18){
    alert('No puedes entrar a este sitio')
    return 
}alert('Sigue viendo lo que quieras')
}

setTimeout(evaluar, 4000)


// evaluar()