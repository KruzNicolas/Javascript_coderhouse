
// Sincronica //

// Se ejecuta el codigo de forma lineal, Solo se puede hacer una peticion a la vez

// Asincronica //

// Se pueden mandar varias peticiones al tiempo 

// Promesas or promise //

// Es un evento a futuro

const loadImage = (src) => {
    return new Promise((resolve, reject) => {
        const img = document.createElement('img')
        img.width = '200'
        img.onload = () => {
            resolve(img)
        }
        img.onerror = (err) => {
            reject(err)
        }
        img.setAttribute('src', src)
    })
}

loadImage('https://i.pinimg.com/736x/e8/04/06/e80406ed790ed2cf6053234937f28f84.jpg')
    .then((resImg) => {
        console.log('La imagen se ha cargado correctamente', resImg)
        document.body.appendChild(resImg)
    })
    .catch((err) => {
        console.error(`Ha ocurrido un error al cargar la imagen`, err)

    })
    .finally(() => {
        console.log(`That's all`)
    })