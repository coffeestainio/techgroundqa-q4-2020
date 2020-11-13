// Practica
// Enviar un screenshot utilziando los 4 tipos de for
// descritos abajo

// for (i = 10 ; i > 0 ; i--)
//     console.log('Valor', i)

objeto = {
    lado: 2,
    tamano: 1
}

for (atributo in objeto){
    console.log(atributo,':',  objeto[atributo])
}
    // loop 

array = ['a', 2]

for (elemento of array){
    console.log(elemento)
}
    // lopp

// while (a ==b) {

//     // se ejecuta mientras se cumpla la condicion
// }