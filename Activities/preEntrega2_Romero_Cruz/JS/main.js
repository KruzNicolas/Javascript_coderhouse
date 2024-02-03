
while(true){
    let decision = parseInt(prompt(`Que desea hacer?\n1. Calcular el promedio de edad de 3 personas\n2. Usar el conversor de divisas?`))
    if (decision === 1){
        
        const nombres = []
        const edades = []
        let numero = 3
        
        do{
            let nombre = prompt(`Ingrese un nombre`)
            nombres.push(nombre)
            let edad = parseInt(prompt(`Ingrese la edad ${nombre}`))
            edades.push(edad)
        }while(nombres.length != numero && edades.length != numero)
        
        class datos{
            constructor(nombre, edad){
                this.nombre = nombre
                this.edad = edad
            }
        }
        
        let p1 = new datos(nombres[0], edades[0])
        let p2 = new datos(nombres[1], edades[1])
        let p3 = new datos(nombres[2], edades[2])

        let sumaEdades = edades.reduce((a, n) => (a += n, a), 0);
        
        let promedio = sumaEdades / edades.length
        
        document.write(`La edad promedio entre ${p1.nombre}, ${p2.nombre} y ${p3.nombre} es ${parseInt(promedio)} años`)
        
        break
    }
    else if (decision === 2){

        ////////////////////////////////////////////////////////////
        
        let monedaPrincipal = null
        
        let monedaSecundaria = null
            
        let valorAConvertir = null
            
        ///////////////////////////////////////////////////////////
        
        function COPToUSD (){
            return (valorAConvertir / 4063)
        }
        
        function USDToCOP (){
            return (valorAConvertir * 4063)
        }
        
        function COPToYEN (){
            return (valorAConvertir / 28)
        }
        
        function YENToCOP (){
            return (valorAConvertir * 28)
        }
        
        function YENToUSD (){
            return (valorAConvertir / 146)
        }
        
        function USDToYEN (){
            return (valorAConvertir * 146)
        }
        
        ///////////////////////////////////////////////////////////
        
        monedaPrincipal = prompt("Cual es la moneda que desea convertir? \nUSD \nCOP \nYEN")
        
        monedaPrincipal = monedaPrincipal.toUpperCase()
        
        
        
        if (monedaPrincipal == "USD"){
            monedaSecundaria = prompt("A que moneda quiere convertir? \nCOP \nYEN")
            monedaSecundaria = monedaSecundaria.toUpperCase()
        }
        
        else if (monedaPrincipal == "COP"){
            monedaSecundaria = prompt("A que moneda quiere convertir? \nUSD \nYEN")
            monedaSecundaria = monedaSecundaria.toUpperCase()
        }
        
        else if (monedaPrincipal == "YEN"){
            monedaSecundaria = prompt("A que moneda quiere convertir? \nCOP \nUSD")
            monedaSecundaria = monedaSecundaria.toUpperCase()
        }
        
        if(monedaPrincipal == "COP" && monedaSecundaria == "USD"){
            valorAConvertir =  parseInt(prompt("Valor a convertir?"))
            document.write(valorAConvertir + monedaPrincipal + " en " + monedaSecundaria + " es " + parseInt(COPToUSD()) + monedaSecundaria)
        
        }else if(monedaPrincipal == "USD" && monedaSecundaria == "COP"){
            valorAConvertir =  parseInt(prompt("Valor a convertir?"))
            document.write(valorAConvertir + monedaPrincipal + " en " + monedaSecundaria + " es " + parseInt(USDToCOP()) + monedaSecundaria)
        
        }else if(monedaPrincipal == "COP" && monedaSecundaria == "YEN"){
            valorAConvertir =  parseInt(prompt("Valor a convertir?"))
            document.write(valorAConvertir + monedaPrincipal + " en " + monedaSecundaria + " es " + parseInt(COPToYEN()) + monedaSecundaria)
        
        }else if(monedaPrincipal == "YEN" && monedaSecundaria == "COP"){
            valorAConvertir =  parseInt(prompt("Valor a convertir?"))
            document.write(valorAConvertir + monedaPrincipal + " en " + monedaSecundaria + " es " + parseInt(YENToCOP()) + monedaSecundaria)
        
        }else if(monedaPrincipal == "YEN" && monedaSecundaria == "USD"){
            valorAConvertir =  parseInt(prompt("Valor a convertir?"))
            document.write(valorAConvertir + monedaPrincipal + " en " + monedaSecundaria + " es " + parseInt(YENToUSD()) + monedaSecundaria)
        
        }else if(monedaPrincipal == "USD" && monedaSecundaria == "YEN"){
            valorAConvertir =  parseInt(prompt("Valor a convertir?"))
            document.write(valorAConvertir + monedaPrincipal + " en " + monedaSecundaria + " es " + parseInt(USDToYEN()) + monedaSecundaria)
        
        }else if (monedaPrincipal || monedaSecundaria !== String){
            document.write("Conversion no disponible")
        }

        break

        }
}    