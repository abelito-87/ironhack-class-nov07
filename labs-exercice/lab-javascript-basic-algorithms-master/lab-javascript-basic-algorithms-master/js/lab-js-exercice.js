 // Iteration 1: Names and Input


let hacker1 = "Ana Isabel";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Kase O"
console.log(`The navigator's name is ${hacker2}`);

console.log("-------------------------------");
// Iteration 2: Conditionals


if (hacker1.lenght > hacker2.lenght) {
    console.log(`The driver has the longest name, it has ${hacker1.length}`);
} else if (hacker1.lenght < hacker2.lenght) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
console.log("-------------------------------");

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
console.log("-------------------------------");

//BONUS TIME 1 


let lorem =   "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ad voluptatum beatae quisquam autem nisi ullam nihil a veniam nam pariatur dolores temporibus animi atque, quidem sapiente veritatis quae adipi et. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ad voluptatum beatae quisquam autem nisi ullam nihil a veniam nam pariatur dolores temporibus animi atque, quidem sapiente veritatis quae adipi et. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ad voluptatum beatae quisquam autem nisi ullam nihil a veniam nam pariatur dolores temporibus animi atque, quidem sapiente veritatis quae adipi et"

