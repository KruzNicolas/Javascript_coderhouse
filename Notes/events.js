
// 1. First form to react events, adding a EventListener

document.addEventListener('DOMContentLoaded', () => {
    console.log(`Cargo el documento`);
});

document.addEventListener('click', () => {
    console.log(`Hiciste click`);
});

// 2. Second form to react events, using quearyselector and .onclick

let boton = document.querySelector('#btn');

function reaccionAlClick(){
    document.querySelector('#res').textContent = "Click en el boton"
}

boton.onclick = reaccionAlClick

// Or

boton.onclick = function reaccionAlClick(){
    document.querySelector('#res').textContent = "Click en el boton"
}

// 3. Third form to react events, Using code js code in HTML

/* 
<body>
    <button id='btnPrincipal' onclick="alert('Hola coder')"> </button>
    <button id='btnSecundario' onclick="respuestaClick()"> Click </button>
    <div id="res"></div>
</body> 
*/

function respuestaClick(){
    document.querySelector('#res').innerHTML = "<strong> Hola </strong>"
    // or
    res.innerHTML = "<strong> Hola </strong>"
}



///////////////////////////////////////////////////////////////////////////
/* 
<body>
    <ul>
        <li> Item 1 </li>
        <li> Item 2 </li>
        <li> Item 3 </li>
        <li> Item 4 </li>
        <li> Item 5 </li>
    </ul>
</body> 
*/

const lis = document.querySelectorAll("li");
for (let li of lis){
    li.addEventListener("click", (evt) => {
        console.log(evt.target.textContent)
    })
}

const lnk = document.querySelector('#lnk');
lnk.addEventListener('click', evt => {
    evt.preventDefault();       //In links and forms
    console.log(`Ver en la consola`)
});