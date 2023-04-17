// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((movies) => {
      return movies.director;
    })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
      }
      let SpielbergDramaMovies = moviesArray.filter(movie => {
        return movie.genre.includes("Drama") && movie.director === "Steven Spielberg";
      });
      if (SpielbergDramaMovies.length === 0) {
        return 0;
      }
      return SpielbergDramaMovies.length;
    }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0
    }
    let firstcount = moviesArray.reduce((acc,elem) => {
        if(elem.score !== undefined){
            return acc + elem.score;
        }
        else return acc
    },0)
    let finalCount = firstcount / moviesArray.length;
    let finalCount2Dec = finalCount.toFixed(2);
    return Number(finalCount2Dec);
    
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter(movie => {
        return movie.genre.includes("Drama")});
    let firstcount = dramaMovies.reduce((acc,elem) => {
            if(elem.score !== undefined){
                return acc + elem.score;
            }
            else return acc
        },0)
        let finalCount = firstcount / dramaMovies.length;
    let finalCount2Dec = finalCount.toFixed(2);
    if (dramaMovies.length === 0) {
        return 0;
      }
      return Number(finalCount2Dec);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let clone = JSON.parse(JSON.stringify(moviesArray));
    return clone.sort((elem1, elem2) => {
        if(elem1.year > elem2.year){
            return 1
        }
        else if(elem1.year < elem2.year){
            return -1
        }
        else {
            if (elem1.title > elem2.title) {
                return 1;
            } else if (elem1.title < elem2.title) {
                return -1;
            } else {
                return 0;
            }
        }
    })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let clone = JSON.parse(JSON.stringify(moviesArray));
    let allMoviesTitles = clone.map((movies) => {
        return movies.title;
    })
    let allTitlesAlpha = allMoviesTitles.sort((elem1, elem2) => {
        return elem1.localeCompare(elem2);
    });
    
   return allTitlesAlpha.slice(0,20);
   
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let clone = JSON.parse(JSON.stringify(moviesArray));
    return clone.map((movie) => {
        const durationParts = movie.duration.split(' ');
        let totalMinutes = 0;
        for (let part of durationParts) {
          if (part.includes('h')) {
            totalMinutes += parseInt(part) * 60;
          } else {
            totalMinutes += parseInt(part);
          }
        }
        return { ...movie, duration: totalMinutes };
      });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null;
      }
      
      let years = [];
      moviesArray.forEach((element) => {
        let year = element.year;
        let score = element.score;
        if (!years[year]) {
          years[year] = { totalScore: 0, count: 0 };
        }
        years[year].totalScore += score;
        years[year].count++;
      });
      
      let bestYear = null;
      let bestYearScore = null;
      
      for (let year in years) {
        let avgScore = years[year].totalScore / years[year].count;
        if (bestYear === null || avgScore > bestYearScore ||
            (avgScore === bestYearScore && year < bestYear)) {
          bestYear = year;
          bestYearScore = avgScore;
        }
      }
     
      return `The best year was ${bestYear} with an average score of ${bestYearScore.toFixed(1)}`;
    }

// No entiendo bien porque "should return the correct answer to a single element array" sigue en rojo en jasmine.