
// Functions with parameters

function sumarOmultiplicar(fn){
    console.log(fn)
    return fn(10, 20);
}

let resta = sumarOmultiplicar(function (a,b){
    return a - b;
})

console.log(resta);

function sumar(a, b){
    return a + b;
}

let suma = sumarOmultiplicar (sumar)
console.log(suma)

function multiplicar(a, b){
    return a * b;
}

let multi = sumarOmultiplicar(multiplicar)
console.log(multi);

// Functions return functions

function obtenerClientes(){
    return function(){
        console.log("Andres Orozco")
    }
}

const fn = obtenerClientes();
console.log(fn);
console.log(fn());

/////////////////////////////////////////////////////////////////

const numeros = [3, 6, 25, 66]

function doble (num){
    return num*2
}

numeros.forEach(doble)

// Is used to iterate over elements in an array or array-like object and execute a provided function once for each element

const por2 = numeros.map(doble);
console.log(por2)
const mas100 = numeros.map(function(num){
    return num + 100;
})
console.log(mas100)

// Is used to transform elements in an array. It creates a new array by applying a provided function to each element in the original array, in order.

const carrito = [
    {producto: 'Zapatos', precio: 100},
    {producto: 'Camisa', precio: 40},
    {producto: 'Medias', precio: 10},
];

const precioImpuesto = carrito.map(item => item.producto + " " + item.precio);
console.log(precioImpuesto)

const existe = carrito.some((item) => item.producto ==='Zapatos')
console.log(existe);

// Is used to check if at least one element in an array satisfies a given condition or passes a provided test.

const indice = carrito.findIndex((item) => item.producto === 'Camisa');
console.log(indice);

// Is used to find the index of the first element in an array that satisfies a given condition or passes a provided test

// Same thing //

let res = carrito.reduce((total, item) => total + item.precio, 0);
console.log(res);

let total = 0
carrito.forEach((item) => total += item.precio)
console.log(total)

// Same thing //

let resultado = carrito.filter(item => item.precio > 50);
console.log(resultado);

// Is used to create a new array containing all elements from an existing array that satisfy a given condition or pass a provided test

const resu = carrito.find(item => item.producto === 'Medias');
console.log(resu)

// Is used to find the first element in an array that satisfies a given condition or passes a provided test

// Math

let resultados;

resultados = Math.PI;

resultados = Math.round(2.2); // 2 Redondea hacia donde este mas cerca
resultados = Math.round(2.5); // 3 Redondea hacia donde este mas cerca
resultados = Math.ceil(2.0001); // 3 Redondea hacia arriba
resultados = Math.floor(2.999); // 2 Redondoea hacia abajo

resultados = Math.pow(8, 3) // Potencia A a la B, osea 8 a la 3

resultados = Math.min(2, 5, 7, 3, 1); // Saca el numero minimo pero se debe ingresar numeros 
resultados = Math.max(2, 5, 7, 3, 1); // Saca el numero maximo pero se debe ingresar numeros 

resultados = Math.random();