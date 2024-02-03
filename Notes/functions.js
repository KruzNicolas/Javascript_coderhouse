    // Core functions. These functions are default functions that the browser has

alert();
prompt();
parseInt(); 

    // window() Can you see all the commands the browser has

function doSomething(){
    console.log("Jumping");
} 

    // Create a function

console.log(doSomething);

    // With this, you can only see items that contain a function

doSomething(); 

    // Invoke or Call a function to perform

let run = function (){
    console.log("Running 10.000Km");
}

run();

    // Call a function without name

(function(){
    console.log("IIFE");
}) 

    // IIFE = Immediately invoked function expression 

function doSomething(){
    console.log("Jumping");
}

let running = function (){
    console.log("Running 10.000Km");
}

    // The difference between these two functions is that the first one can be called before you create it, while the second one needs to be created before you can call it

function doSomething(x){    //Parameter
    console.log("The value of x is " + x);
}

doSomething(); //Undefined
doSomething("Hi"); // Hi            //Arguments
doSomething(1); // 1

    // The scope of 'x' only works within the function and does not extend outside of it

let calcular_iva = (monto_bruto, cliente) => (monto_bruto * 1.21) - monto_bruto

let total = calcular_iva(1000, "Pedro")
console.log(total)

    // Arrow functions can create shorter functions in a single line of code