
function setURL(evt){
    evt.preventDefault()
    url = evt.target.dataset.pagina + '.html'
    pedirPagina(url)
}

function pedirPagina(url){
    fetch(url)
    .then((res) => {
        return res.text
    })
    .then((pagina) => {
        document.querySelector('main').innerHTML = pagina
    })
    .catch((err) => {
        console.log("Hubo un error")
    })
}

// --------------------------------------------------- \\

function render(pokemone) {
    document.querySelector('#pokemon').textContent = pokemone.name
    document.querySelector('#imagen').setAttribute(`src`, pokemone.sprites.front_shiny)
}

async function getPokemon(id) {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        const data = await res.json()
        return data
    } catch(err){
        alert(err)
    }
}

async function inicio (){
    const inicial = await getPokemon(25)
    render (inicial)
}

const busqueda = document.querySelector(`#search`)
busqueda.addEventListener('change', async() => {
    const pokemon = await getPokemon(busqueda.value.toLowerCase())
    render(pokemon)
})