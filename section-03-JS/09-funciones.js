
/*
function add(a, b) {
    console.log(`el total de esta suma es : ${a + b}`);
}
add(20, 10);


console.log("-------");
console.log("function with two params & return statement");
function addWithReturn(a, b) {
return a + b;
}

let x = function(num) {
    return num * num;
};
console.log(x(4));

// ARROW FUNCTIONS 

let exampleFunc = function(x,y) {
    return x * y
};

let exampleArrowFunc = (x, y) => x * y; // esto es la misma fucion de arriba


//ejemplos

console.log("------");
console.log("arrow functions - sin parametros");

let noArguments = () => console.log("Hello");
noArguments();

console.log("------");
console.log("arrow functions - 1 parametros");

let oneArguments = (x) => console.log(`Hello ${x}`);
oneArguments("Aleix");

console.log("------");
console.log("arrow functions - function expression");

let age = 18;
let welcome = age < 18 ? () => console.log("wu tang clan") : () => {
    console.log("C.R.E.A.M");
}
welcome(); 

console.log("------");
console.log("arrow functions - multiples linias y parametros");

let sum = (a, b) => {
    let result = a , b;
    return result;
}
let resultOfSum = sum(5, 89);
console.log(resultOfSum);*/

/*Crea una función que reciba tres argumentos: una string name, un numero age y un objeto livesIn.
Ten en cuenta que el objeto livesIn será un objeto que contiene dos keys: livesInCity y livesInTown.
Las dos tendrán un valor booleánico y siempre será una falsa y la otra verdadera.
Crea una función tipo flecha que retorne una string parecida a "Diego tiene 30 años y vive en la ciudad".
Según la key que sea true en el argumento livesIn vamos a retornar vive en la ciudad o vive en un pueblo.*/


function miFunction( name, age, livesIn) {
    if(livesIn.livesInCity === true) {
        return `${name} tiene ${age} años y vive en la ciudad`;
    } else {
        return `${name} tiene ${age} años y vive en el pueblo`;
    }
}
    console.log(miFunction("Abel", 25, {livesInCitu: true, livesInTown: false}));

    /*
    if (livesIn.livesInCity) 
    return `${name} tiene ${age} años y vive en la ciudad`;
    else return `${name} tiene ${age} años y vive en el pueblo`;*/

 