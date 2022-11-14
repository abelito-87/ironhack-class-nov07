// condicionales 
// if 
// if ... else 
// else ... if


// JS -- if

//if () {
    // body del condicional
//}

// evalua las condiciones dentro del parentesis si es verdadera, si es falta no se ejecuta i "salta".

// ejemplo -- check que el num, sea positivio o mayor que (para poner un numero)
const number = prompt("enter a number: ");
/*
if (number > 0) {
    console.log("este numero es positivo");

}*/

// if else 
/*
if (number > 0) {
    console.log("este numero es positivo");
}
else {
    console.log("este numero es negativo");
}

console.log("es un caso en base a la condicion inicial");*/

// else if --> para varias condiciones

/*const drinkingAge = parseInt(prompt("Want to buy beer? - let me see your ID"));

if (drinkingAge < 18) {
    console.log("I'm sorry son, but you are too young to be buying alcohol");
} else if (drinkingAge === 18) {
    console.log("You just turned 18, what type of beer would you want to enjoy");
} else if (drinkingAge >= 18 && drinkingAge < 40) {
    console.log("Enjoy your night, but one drink at time");
} else if (drinkingAge >= 40) {
    console.log("Enjoy your night, remember that the hangover is real!");
}*/

const edad = parseInt(prompt("descuentos"))

if(edad <= 5) {
    console.log("entradas gratis");
} else if(edad < 15) {
    console.log("tienes un 20% de descuento");
} else if( edad >= 15 && edad >= 60) {
    console.log("no tienes descuento");
} else if (edad > 60) {
    console.log("tienes un 40% de descuento");
}