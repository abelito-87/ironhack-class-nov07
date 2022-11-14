
//datos primtivos
/*
// numeros
console.log(8);
console.log(8.5);
// nan === not a number
let f = 'Hello';
console.log(8 / f); // nan
// strings
console.log('Wu tang clan is for the children');
console.log('8');

// booleanos --- tipos de datos verdaderos o falsos
console.log(true);
console.log(false);

// null value
console.log(null); // se trata como valor falso, "esta vacio"

//undefined

let Abel = undefined;
let Abel = "";
console.log(Abel);
console.log(typeof Abel);

// symbol
let barcelona = Symbol('borne');
console.log(typeof barcelona);
console.log(Symbol('borne') === Symbol('borne')); // tipo de dato unico

//datos no primtivos
// Arrays 

/*console.log(['this is my cool table of a Funk artistas']);
console.log("Mix of primitve dataTypes")
console.table([
    "Daft punk",
    5,
    "Marc Rebillet",
    false,
    "Anderson Paak",
    "Silk Sonic";
    "Los amigos invisibles"
    undefined,
])*/

// objects

/*
console.log("'this is my cool table of a Funk artistas'");
console.log("Mix of primitve dataTypes");
console.table([
    "AyaxYProk",
    8,
    "Roberto Iniesta",
    false,
    "Violadores del Verso",
    true,
    "Richi Hawting",
    9,
    "SFDK",
    undefined,
    ]);

// objectos --- ejemplo syntax initializm = {} ---- ejemplo syntax context = { key: "value"}

console.log("My Bio");
console.table({
    firstName: "Abel",
    lastName: "Manjon",
    ocuppation: "undefined",
    hobbies: ["music","films","parties"],

    skills: {
        music: "Fantastico",
        films: 0,
        parties: ["fiesta de dia", "fiesta de noche"],
    },
})

// visor de JSON 
// ejemplo de array de objetos

console.table([
     {
        movie:"wolf of wallstreet",
        genre:["drama","action","comedy"],
        director: ["Martin Scorsese"],
        location: "NYC",
        actors:["Jonah Hill","Margot Robie","Leo Dicaprio"],
        year: 2010,
    },
    {
        movie:"fight Club",
        genre:["drama","noir","comedy","action"],
        director: ["David Fischer"],
        location: "Los Angeles",
        actors:["Brad Pitt","Edward Norton","Helena Bonham Carter"],
        year: 1999,
    },
    {
        movie:"",
        genre:[],
        director: [],
        location: "",
        year: 2016,
    },
])

const movies = console.table(
    {
       movie:"wolf of wallstreet",
       genre:["drama","action","comedy"],
       director: ["Martin Scorsese"],
       location: "NYC",
       actors:["Jonah Hill","Margot Robie","Leo Dicaprio"],
       year: 2010,
   },
   {
       movie:"fight Club",
       genre:["drama","noir","comedy","action"],
       director: ["David Fischer"],
       location: "Los Angeles",
       actors:["Brad Pitt","Edward Norton","Helena Bonham Carter"],
       year: 1999,
   },
   {
       movie:"",
       genre:[],
       director: [],
       location: "",
       year: 2016,
   },
);
*/
//console.log(movies[0].actors[1]);//

/*console.log(
    "mis actores favoritos son" + movies[0].actors[1]
    );*/

   
    /*console.log(
        `mis actores favoritos son" ${movies[0].actors[1]}`
        );*/

       /* objeto  ejercicio
        name 
        lastName
        secondname
        ciudades en que he vivido
        edad
        data neixement
        boolean value-- toman alcohol
        dentro array-- objeto 
        console.log(
        `user drink alcohol" ${movies[0].actors[1]}`
        );

        array objeto 3 objetos. 
        libros preferidos
        Genero
        autor
        año
        isbn 
        my favourite book is: 
        ---- codigo de barras*/
        

        const table = console.table({
            name: "Abel",
            lastName: "Manjon",
            secondName: "Simarro",
            cities: ["Barcelona","Santes Creus","Cambrils"],
            dob: 19-07-1987,
            drinkAlcohol: (('yes') === Symbol('no'))
             });

            let array = [
                {
                    bookName:"Apocalipsis Z",
                    genre:["terror"],
                    autor: ["Manel Loureiro"],
                    isbn: 9788499890586,
                    year: 2016,
                },
                {
                    bookName:"maldito kharma",
                    genre:["Humor"],
                    autor: ["David safier"],
                    isbn: 9783463405087,
                    year: 2009,
                },
                {
                    bookName:"el clan del oso cavernario",
                    genre:["novela historica"],
                    autor: ["Jean M. Auel"],
                    isbn: 9780517542026,
                    year: 2016,
                },
            ];

            console.log(`my favourite book is ${array[2].bookName}`);

        

