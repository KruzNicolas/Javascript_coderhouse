

function render(pokemons) {
    document.getElementById('poke').setAttribute('src', pokemons.sprites.front_default)
}

async function getPokemon(id) {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        const data = await res.json()
        return data
    } catch(err){
        console.error(err)
    }
}

async function sun (){
    sol = await getPokemon(791)
    render(sol)
}

async function moon (){
    luna =  await getPokemon(792)
    render(luna)
}


let button = document.getElementById('button');
let navbar = document.querySelector('.navbar')

let darkMode = localStorage.getItem('darkMode')
darkMode = darkMode == "true"

if(darkMode == true){
    document.body.classList.add('darkMode')
    navbar.setAttribute(`data-bs-theme`, `dark`)
    localStorage.setItem('darkMode', true)
    sun()
}else if(darkMode == false){
    document.body.classList.remove('darkMode')
    navbar.removeAttribute("data-bs-theme")
    localStorage.setItem('darkMode', false)
    moon()
}

button.addEventListener('click', (evt) =>{
    evt.target.checked;
    document.body.classList.toggle('darkMode')
    if(document.body.classList.contains('darkMode') == true){
        localStorage.setItem('darkMode', true)
        navbar.setAttribute(`data-bs-theme`, `dark`)
        sun()
    }
    else{
        localStorage.setItem('darkMode', false)
        navbar.removeAttribute("data-bs-theme")
        moon()
    }
})