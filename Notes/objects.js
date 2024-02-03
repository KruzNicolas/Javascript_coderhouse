let pikachu = {
    type: "Electro",
    hp: 100,
    ad: 25,
}

// 'type' is a property, and 'Electro' is a value

console.log(pikachu.hp);
alert(pikachu.hp);
console.log(pikachu["hp"]);
alert(pikachu["hp"]);

// This is the method used to access an object with properties

//////////////////////////////////////////////////////////////

let x = 5;
let y = x;

console.log(x) // 5
console.log(y) // 5

y = 10;

console.log(x) // 5
console.log(y) // 10

console.log("----------------------------------------------------------")

let obj1 = {
    x: 5
}

let obj2 = obj1;

console.log(obj1.x) // 5
console.log(obj2.x) // 5

obj2.x = 10;

console.log(obj1.x) // 10
console.log(obj2.x) // 10

// Primitive types copy by value:

// String
// Number
// Boolean

// Objects copy by memory reference

//////////////////////////////////////////////////////////////

function Pokemons(name, type, hp, ad){
    this.name = name;
    this.type = type;
    this.hp = hp;
    this.ad = ad; 

    this.class = function(){
        console.log(this.name + " is " + this.type + " type.")
    }
}

let rattata = new Pokemons("Rattata", "Normal", 60, 10);
let lucario = new Pokemons("Lucario", "Figthing", 120, 35);
let gardevoir = new Pokemons("Gardevoir", "Psychic", 100, 45);

console.log(rattata);
console.log(lucario);
console.log(gardevoir);

lucario.class();

//////////////////////////////////////////////////////////////

class Producto {
    constructor(nombre, precio, stock, img){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.img = img;
        this.disponible = true;
    }
    sinStock(){
        this.disponible = false;
        this.stock = 0;
    }
}

let nombre = prompt("Nombre del producto")
let precio = Number(prompt("Precio del producto"))
let stock = Number(prompt("Stock del producto"))
let image = prompt("Imagen del producto")

const p1 = new prompt(nombre, precio, stock, image);

console.log(p1)

// Class with self method like alert