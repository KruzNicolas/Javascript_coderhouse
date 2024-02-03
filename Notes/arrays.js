const allThings = ["Hi", 4, true, "Yes", {Name: "Nicolas", age:21}, ["Other array", true, "yes"]];

const days = ["Monday", "Tuesday", "Wednesday"];
const dias = new Array("Lunes", "Martes", "Miercoles", "Jueves", "Viernes");

dias[5] = "Sabado";
dias[dias.length] = "Domingo";

console.log(dias);
console.table(dias);
console.log(dias.length);
console.log(dias[2]);

for(let i=0; i<dias.length; i+=1){
    console.log(dias[i])
}

const numbers = [];

// Modify the original Array

numbers.push(1);            // Adding an element to the end
numbers.push(2);            // Adding an element to the end
numbers.unshift(0);         // Adding an element to the beginning
numbers.pop();              // Delete the last element of the array
numbers.shift();            // Delete the first element of the array
numbers.reverse();          // Reverse

// No modify the original array

numbers.splice(1, 3);       // Delete elements from the start and count how many were removed
console.log(numbers.join(' - ')); // Join all the elements of an array into a single string and return that string, is no destructive
const date = numbers.concat(days); // Unite two arrays into one without modifying the original arrays
console.log(numbers.indexOf(2));   // Give the position of the argument
console.log(numbers.includes(3));  // State whether the argument is true or false





const fruits = ['apple', 'banana', 'cherry', 'date'];
// Remove 'banana' (index 1)
fruits.splice(1, 1);
// Resulting array: ['apple', 'cherry', 'date']

// Remove 'cherry' and 'date' (index 1, deleteCount 2)
fruits.splice(1, 2);
// Resulting array: ['apple']

// Replace 'apple' with 'grape' (index 0, deleteCount 1, item1 'grape')
fruits.splice(0, 1, 'grape');
// Resulting array: ['grape', 'cherry', 'date']

// Add 'kiwi' and 'lemon' at index 1 (no elements removed)
fruits.splice(1, 0, 'kiwi', 'lemon');
// Resulting array: ['grape', 'kiwi', 'lemon', 'cherry', 'date']



// Examples

const listaCompra = [];
let cantidad = 5;

do{
    let dato = prompt("Añadir a la lista")
    listaCompra.push(dato.toUpperCase());
    console.log(listaCompra.length);
} while(listaCompra.length != cantidad){
}

const listaFinal = listaCompra.concat(["Papas", "Tarjea de lol 10 USD"]);

console.table(listaCompra);
console.table(listaFinal);

// Iterate through an array

const obj1 = {id: 1, nombre: "Pan", precio: 2000};
const listaDeCompras = [obj1, {id: 2, nombre:"Queso", precio:5000}];
listaDeCompras.push({id:3, nombre: "Chocoramo", precio:2300});

// 1.

for(let i=0; i<listaDeCompras.length; i+=1){
    alert(listaDeCompras[i].nombre + " - " + listaDeCompras[i],precio)
}

// 2.

for(const producto of listaDeCompras){
    alert(producto.nombre + " - " + producto.precio)
}

