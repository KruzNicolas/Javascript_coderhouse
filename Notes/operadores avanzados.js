
// Sugar Syntax

++ Operator

let num = 10

// Base

num = num + 1

// First simpliflication

num += 1

// Second simplification

num ++ 

// Operador ternario only for if...else

let temperatura = 31

if (temperatura >30){
    alert(`Dia caluroso!`)
} else{
    alert(`Dia agradable`)
}

condicion ? caso1 : caso2 // Tiene un return

temperatura > 30 ? alert(`Dia caluroso!`) : alert(`Dia agradable`)

highScore = score >= highScore ? score : highScore; // Si score es mayor o igual a higshcore entonces pon score, sino highscore

// Operador logico and &&

// Si autenticado es true devuelve Bienvenido y Bye pero sino solo Bye

const autenticado = true;

autenticado && console.log(`Bienvenido`);
console.log(`Bye`);

// Operador Logico or ||

// Si la izquierda es true rotarna eso, sino retorna Falsy

console.log( 0 || "Falsy")  // Falsy
console.log( 40 || "Falsy")  // 40
console.log( null || "Falsy")  // Falsy
console.log( undefined || "Falsy")  // Falsy
console.log( "Hola Mundo" || "Falsy")  // Hola Mundo
console.log( "" || "Falsy")  // Falsy
console.log( NaN || "Falsy")  // Falsy
console.log( true || "Falsy")  // true
console.log( false || "Falsy")  // Falsy

// Operador nullish calescing

/* 
Nullish
null
undefined 
*/

console.log( 0 ?? "Nullish")  // 0
console.log( 40 ?? "Nullish")  // 40
console.log( null ?? "Nullish")  // Nullish
console.log( undefined ?? "Nullish")  // Nullish

// Acceso condicional a un objeto

// Si el objeto es null nos da un error, pero con el operador ? nos permite que no nos salte un error 

const usuario = null

console.log( usuario.nombre || "El usuario no existe" )
// Error: "No se pueden leer propiedades de NULL"

console.log( usuario?.nombre || "El usuario no existe")
// "El usuario no existe"

// Destructuracion de objetos

// Introduce elementos de un objeto a una variable

let producto = {
    nombre: "TV",
    precio: 500.,
    disponible: true,
    colores: ['Rojo', 'Verde', 'Azul'],
    informacion: {
        peso: "7kg",
        altura: "45 cm"
    }
}

let {nombre, precio, colores, informacion:{peso}} = producto;

console.log(nombre);
console.log(precio);
console.table(colores);
console.log(peso);

let pokemon = {
    nombre: "Lucario",
    tipo: "Figthing",
}

let {nombre: nombrePokemon} = pokemon

console.log(nombrePokemon)

// Se le pone otro nombre al nombre porque no se puede repetir nombres de variables o constantes

const play = {
    nombre: "PS5",
    precio: 1500,
    img: "imagen1.jpg"
}

function sumarIva({precio}){
    let conIva = precio * 1.21
    console.log(conIva)
}

sumarIva(play)

window.addEventListener('click', ({x, y}) => {
    console.log(x, y)
})

// Destructuracion de Arrays

const meses1 = ["Enero", "Febrero", "Marzo", "Abril"];

const meses2 = ["Mayo", "Junio", "Julio", "Agosto"];

let [a, b, c] = meses1

console.log(a);
console.log(b);
console.log(c);

// Spread

console.log(...meses)

const meses = [...meses1, ...meses2]
console.log(meses)