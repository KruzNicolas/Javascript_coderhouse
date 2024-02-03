while(true){
    let decision = prompt("Que desea hacer? \n1.Calcular el promedio de edad de 3 personas \n2.Usar el conversor de divisas?")
    if (decision == 1){

        ///////////////////////////////////////////////////////////
        
        let nombreUno = null
        
        let edadUno = null
        
        let nombreDos = null
        
        let edadDos = null
        
        let nombreTres = null
        
        let edadTres = null
        
        ///////////////////////////////////////////////////////////
        
        nombreUno = prompt("Ingresar nombre")
        
        edadUno = parseInt(prompt("Ingresar la edad de " + nombreUno))
        
        nombreDos = prompt("Ingresar nombre")
        
        edadDos = parseInt(prompt("Ingresas la edad de " + nombreDos))
        
        nombreTres = prompt("Ingersar nombre")
        
        edadTres = parseInt(prompt("Ingresar la edad de " + nombreTres))
        
        let edadSuma = edadUno + edadDos + edadTres
        
        let promedioEdad = () => edadSuma / 3 
        
        document.write("La edad promedio entre " + nombreUno + ", " + " " + nombreDos + " y " + nombreTres + " es " + parseInt(promedioEdad()) + " años.")

        break
    }
    else if (decision == 2){

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
        


