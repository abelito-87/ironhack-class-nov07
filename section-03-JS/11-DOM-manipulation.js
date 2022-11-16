

// 1º - Crea un <p></p> dentro de un tag de tipo <div id="insert-p"></div>
/*
const createElement = document.createElement("div");
console.log(createElement);
console.log(document.querySelector("#create p").firstElementChild);*/



// 2º - Crea un <div id="nested"></div> desde código


// 1 - Crea un botón que, al ser pulsado, introduzca en el dom un <p>Texto insertado</p>

const button = document.querySelector("#master");
const addFunction = () => button.classList.add("click!!");
button.addEventListener("click", addFunction);


// 2 - Crea un elemento de color verde y un botón para togglear el color de verde a rojo.