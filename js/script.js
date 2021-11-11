"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
};

function rememberMyFilms() {
  for (let index = 0; index < 2; index++) {
    let a = prompt("Один из последних просмотренных фильмов?", "");
    let b = prompt("На сколько оцените его?", "");
    if (a != null && b != null && a != "" && b != "" && a.length <= 50) {
      personalMovieDB.movies[a] = b;
    } else {
      index--;
    }
  }
}

rememberMyFilms();

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    let answer = prompt(`Ваш любимый жанр под номером ${i + 1}`, "");
    personalMovieDB.genres[i] = answer;
  }
}

writeYourGenres();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель");
  } else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
  } else {
    alert("Произошла ошибка");
  }
}
detectPersonalLevel();

function showMyDB() {
  if (personalMovieDB.privat) {
    console.log(personalMovieDB);
  }
}
showMyDB();
