// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(moviesArray) {
 const arrayDirectors = [];
 moviesArray.forEach(element => {
    arrayDirectors.push(element.director); 
 });
 return arrayDirectors;
};


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
 let num = 0;
 if(moviesArray.length === 0) {
    num = 0;
 } else {
    let aux = moviesArray.filter(element => element.director === 'Steven Spielberg');
    if(aux.length === 0){
        num = 0;
    }else{
        aux.forEach(e => {
            if(e.genre.includes('Drama')){
                num++;
            }
        })
    }
 }
 return num;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
   let scoreArray = 0;
    moviesArray.forEach(element => {
        if(element.score){
            scoreArray += element.score; 
        }
    });
    if(scoreArray > 0){
       return parseFloat((scoreArray / moviesArray.length).toFixed(2));
    }else{
        return 0;
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaScore = 0;
    let dramaCount = 0;
    moviesArray.forEach(element => {
        if(element.genre.includes("Drama")){
            dramaCount++;
            dramaScore += element.score;
        }
    });
    if(dramaCount ==0){
        return 0;
    }else{
        return parseFloat((dramaScore / dramaCount).toFixed(2));
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let arrayOrder = [];
    moviesArray.forEach(element => {
        arrayOrder.push(element.year); 
    }); 
    return arrayOrder;
}






// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
