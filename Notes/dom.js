let item;

item = window       // BOM - Browser Object Model
item = document     // DOM - Document Object Model

item = document.body; // Get the body of HTML

const formulario =  document.getElementById('formulario')       // Return 1 element

const encabezado = document.querySelector('.contenido-hero h1') // Return 1 element

const encabezados = document.querySelectorAll('.card img')      // Return many elements

const header = document.getElementsByClassName('header')        // Return HTMLCollection in Array format

const p = document.getElementsByTagName('p');                   // Return HTMLCollection in Array format 

for(let parrafo of p){
    console.log(parrafo.textContent)
    parrafo.textContent = "Buenas noches";      // Change every p for "Buenas noches"
}

const subtitulo = document.querySelector('h2')

subtitulo.innerHTML // Adding HTML element
subtitulo.innerText // Adding text

const main = document.querySelector("main")

let h2 = document.createElement('h2');
h2.textContent = "La mejor comision"
main.appendChild(h2); // Adding HTML element

let nAme = "Riley"
let age = 25

console.log(`My name is ${nAme} and i'm ${age} year old`)