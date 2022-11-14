

// texto comentado //

/* la consola

en la console de la inspeccionar podemos interactuar */

console.log("Abel");

// .log() mustra un mensaje en la consola web, en este caso tipo string //

console.log(document); // manipulacion del DOM //
console.log(document.domain);
console.log(document.URL); 
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all); //nodo de colecciones HTML//  
console.log(document.all[8]); // apuntamos a la posicion numero 8 del documento //                                                                            
/*console.log(document.all[8].textContent = "Wu tang clan");*/
/*console.log(document.all[8].innertext = "Wu tang clan");*/
console.log(document.all[8].innerHTML = "Wu tang clan");

console.log(document.links); 
console.log(document.images);

// metodos, funciones nativas de JS ---> instance methods //

// tabla --> syntax = console.table() //

//console.table(['Barcelona', 'Berlin', 'Tokyo', 'Liverpool']);// //es lo mismo que con console.log, pero se ve mejor//

console.table(['Barcelona' ,' Berlin', 'Ciudad de México', 'Praga', 'Crackovia']);s