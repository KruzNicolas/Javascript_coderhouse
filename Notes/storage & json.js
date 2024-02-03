
<img src="uwndadw.png"></img>

const img = document.querySelector('img');

img.src = "idnwaid.png" // No Recommended way by JavaScript
img.setAttribute('src', 'jdaiwd.png') // Recommended way by JavaScript

localStorage.setItem('Key', 'Value');

localStorage.setItem('Bienvenida', 'Hola coder');
localStorage.setItem('esValido', true);
localStorage.setItem('unNumero', 11);
localStorage.setItem('alumnos', ["David", "Andres", "Nicolas"]);
localStorage.setItem('object', JSON.stringify({Name: "Lucario", Type: "Figthing"})) // Convert from [object Object] to String

sessionStorage.setItem('Bienvenida', 'Hola coder');
sessionStorage.setItem('Key', 'Value');

localStorage.getItem('Bienvenida')

// All dates of local or session Storage are Strings

let mensaje = localStorage.getItem('Bienvenida');
let bandera = localStorage.getItem('esValido');
let numero = localStorage.getItem('unNumero');
let alumnos = localStorage.getItem('alumnos');
let object = JSON.parse(localStorage.getItem('object')) // Convert a Sting from localStorage to Object again

bandera = bandera == 'true' // Convert to Boolean

numero = Number(numero); // Convert to Numero

alumnos = alumnos.split(",") // Convert to Array

for(let i=0; i<localStorage.length; i+=1){
    let key = localStorage.key(i)
    console.log(`La clave es ${key}`)
} // Iterate through local storage

