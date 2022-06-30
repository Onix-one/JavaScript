"use strict";

//Task 001
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilmOne = prompt('Один из последних просмотренных фильмов?', ''),
      filmRateOne = prompt('На сколько оцените его?', ''),
      lastFilmTwo = prompt('Один из последних просмотренных фильмов?', ''),
      filmRateTwo = prompt('На сколько оцените его?', '');


personalMovieDB.movies[lastFilmOne] = filmRateOne;
personalMovieDB.movies[lastFilmTwo] = filmRateTwo;

console.log(personalMovieDB);