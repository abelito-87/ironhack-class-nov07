// Iteration 1: Names and Input
//
/*
let hacker1 = "Ana Isabel";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Kase O"
console.log(`The navigator's name is ${hacker2}`); // ${} plantillas 

// Iteration 2: Conditionals


if (hacker1.lenght > hacker2.lenght) {
    console.log(`The driver has the longest name, it has ${hacker1.length}`);
} else if (hacker1.lenght < hacker2.lenght) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops

let reservedName = "";
for (let i = 0 ; i < hacker1.length; i++) {
    reservedName += hacker1[i].toUpperCase() + " ";
}
console.log(reservedName);


let reverseName = "";
for (let i = hacker1.length -1; i >= 0; i--) {
    reverseName += hacker1[i].toUpperCase() + " ";
}
console.log(reverseName);

// Iteracion Usando metodo nativo
// const reverseNameSimplified = hacker1.split("").reverse().join("");
// console.log(reverseNameSimplified);

//condicional sencillo dentro de la funcion

function ordenLexicoGrafico(string1, string2) {
    if (string1 > string2) {
        console.log("the drivers name goes first");
    } else if (string1 < string2) {
        console.log("you navigator goes first definetly");
    } else {
        console.log("what? you both have a same name");
    }
}
ordenLexicoGrafico(hacker1, hacker2);

//LAB BONUS TIME

 let lorem = `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
 Voluptatem at saepe reiciendis pariatur tempore quos placeat minus non consequuntur rem adipisci necessitatibus deserunt ad quibusdam nesciunt,
 illo, veniam voluptatum! Perferendis!
 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
 Voluptatem at saepe reiciendis pariatur tempore quos placeat minus non consequuntur rem adipisci necessitatibus deserunt ad quibusdam nesciunt,
 illo, veniam voluptatum! Perferendis!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
 Voluptatem at saepe reiciendis pariatur tempore quos placeat minus non consequuntur rem adipisci necessitatibus deserunt ad quibusdam nesciunt,
 illo, veniam voluptatum! Perferendis!`

 let trimmedLorem = lorem.trim();

 let etCount = 0;
 for(key of trimmedLorem) {
    if(key === "et") etCount +=1;
 }
console.log(`la cantidad de palabras et: ${etCount + 1}`);
*/

//BONUS 2 
 /*
let text = "Amor, Roma";
let backWardsText = "";

for(let i = text.length - 1; i > 0; i--) {
    backWardsText += text[i]
}

if(text.toLowerCase() === backWardsText.toLowerCase()) {
    console.log(`${text} is a palindrome`);
} else {
    console.log(`${text} is not a palindrome`);
}

// ejemplo ejercicio de santiago

let phraseToCheck = "amor roma"
let phraseToCheckPalindrome= phraseToCheck.split("").reverse().join("")

if (phraseToCheck.toLowerCase()==phraseToCheckPalindrome.toLocaleLowerCase()) {
    console.log("THE STRING IS A PALINDROME");
} else {
    console.log("THE STRING IS NOT A PALINDROME");
}
console.log(phraseToCheckPalindrome) */

// SWITCH STATEMENTS

// ejemplo sencillo
/*
let switchExample1 = 2;
switch(switchExample1) {
    case 1: 
    switchExample1 ="one";
    break;
    case 2:
    switchExample1 = "two";
    break;
    case 3: 
    switchExample1 = "not found";
    break; 
}

console.log(`The value is ${switchExample1}`);



let switchExample2 = 1;
switch(switchExample2) {
    case "1": 
    switchExample2 ="one";
    break;
    case 2:
    switchExample2 = "two";
    break;
    default: 
    switchExample2 = "not found";
    break; 
}

console.log(`The value is ${switchExample2}`);

// Ejemplo calculadora

let result;

const operator = prompt("enter operator (either + -, *, or /):");

const calcNum1 = parseFloat(prompt("enter 1st number:"));
const calcNum2 = parseFloat(prompt("enter 2nd number:"));

switch (operator) {
    case  "+":
        result = calcNum1 + calcNum2;
        console.log(`${calcNum1} + ${calcNum2} = ${result}`);
        break;
        case  "-":
        result = calcNum1 - calcNum2;
        console.log(`${calcNum1} - ${calcNum2} = ${result}`);
        break;
        case  "*":
        result = calcNum1 * calcNum2;
        console.log(`${calcNum1} * ${calcNum2} = ${result}`);
        break;
        case  "/":
        result = calcNum1 / calcNum2;
        console.log(`${calcNum1} / ${calcNum2} = ${result}`);
        break
        default:
        console.log("els resultado es");
}

console.log(4*4);*/

// Paises Switch
/*
const countryOfOrigin = prompt("What country where you born?");

switch (countryOfOrigin) {
    case  "Venezuela":
    case "Colombia":
    case " Ecuador":
    alert(`cool ${countryOfOrigin} is located in South America`);  
    break;  
    case  "Spain":
    case "France":
    case " Portugal":
    alert(`cool ${countryOfOrigin} is located in Europa`);
    break;
    default:
}*/

/* ESTE EJERCICIO ESTA MAL!!!!
const countryOfOrigin = prompt(("What country where you born?").toLocaleLowerCase());
const country;

for (let i = countryOfOrigin.length -1; i >= 0; i--) {
    country += countryOfOrigin[i].toLocaleLowerCase(); + " ";


switch (countryOfOrigin) {
    case  "venezuela":
    case "colombia":
    case " ecuador":
    alert(`cool ${countryOfOrigin} is located in South America`);  
    console.log();(`cool ${countryOfOrigin} is located in South America`); 
    break;  
    case  "spain":
    case "france":
    case " portugal":
    alert(`cool ${countryOfOrigin} is located in Europa`);
    console.log();(`cool ${countryOfOrigin} is located in South America`);
    break;
    default:
    console.log();(`you ${countryOfOrigin} are not from any of these countries`);
}
}*/

// LOOPS
// ejemplos
/*
//for loop - simple
console.log("-----");
console.log("for loop- simple");

const forLoopExample = 10;
//bucleamos con for loop - desde 1 = 1 hasta 10 [i === index -""]

for( let i = 1; i <= forLoopExample; i++) {
    console.log("js is legit");
}

console.log("-----");
console.log("for loop- array");

const cities = ["barcelona", "tokyo", "berlin", "helsinki"];
for(let i = 0; i < cities.length; i ++){
    console.log(`${cities[i]}`);
}


console.log("-----");
console.log("for loop- array mixto");

const mixedArray = [6, 12, "miami", 1 , true, "barcelona", "200", "helsinki", 8,88];
function sum(arrayProperty) {
    let mixedSum = 0;
    for(let i; i < arrayProperty.length; i++) {
        if(typeof arrayProperty[i] === "string") {
            str = arrayProperty[i].split("");
            for(let i = 0 ; i < str.length; i++) {
                mixedSum += str[i].length;
            }
        }else if (arrayProperty[i] === true){
            mixedSum += 1;
        }else{
            mixedSum += arrayProperty[i];
        }
    }
    return mixedSum;
}
console.log(sum(mixedArray));

console.log("-----");
console.log("for loop- array objetos");
*/

const miArray = ["Boney M", 5, "Bob Marley", false, "Madona", "Buenafuente"];
for(let i; i < miArray.length; i++) {
   // return miArray[i];
}

console.log(`${miArray}`);
console.log(`${miArray[2]} is so famous, I love them`);


/*
console.log("-------------------");
console.log("WHILE LOOP - Array objetos");
// WHILE LOOP - Array objetos
const miArray = [
  { name: "Diego", age: 30, group: "A" },
  { name: "Jarko", age: 25, group: "B" },
  { name: "Aleix", age: 20, group: "A" },
  { name: "Marcos", age: 15, group: "C" },
  { name: "Octavio", age: 25, group: "B" },
];
// Podemos almacenar la longitud del array en una variable y utilizar esta variable en la condición de un bucle while para romper el bucle.
let lengthOfWhileObjectExample = whileLoopArrayOfObjectsExample.length;
// También, crear una variable count para acceder a los elementos del objeto en el array.
let count2 = 0;
while (lengthOfWhileObjectExample--) {
  console.log(`. ${whileLoopArrayOfObjectsExample[count2].age}`);
  count2++;
}*/