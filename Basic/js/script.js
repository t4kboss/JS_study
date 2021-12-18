"use strict";

// const personalMovieDB = {
//   count: 0,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
//   start: function () {
//     personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

//     while (
//       personalMovieDB.count == "" ||
//       personalMovieDB.count == null ||
//       isNaN(personalMovieDB.count)
//     ) {
//       personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
//     }
//   },
//   rememberMyFilms: function () {
//     for (let index = 0; index < 2; index++) {
//       let a = prompt("Один из последних просмотренных фильмов?", "");
//       let b = prompt("На сколько оцените его?", "");
//       if (a != null && b != null && a != "" && b != "" && a.length <= 50) {
//         personalMovieDB.movies[a] = b;
//       } else {
//         index--;
//       }
//     }
//   },
//   writeYourGenres: function () {
//     for (let i = 1; i <= 3; i++) {
//       let genre = prompt(`Ваш любимый жанр под номером ${i}`);
//       if (genre === "" || genre == null) {
//         console.log("Не ввели данные");
//         i--;
//       } else {
//         personalMovieDB.genres[i - 1] = genre;
//       }
//     }
//     personalMovieDB.genres.forEach((item, i) => {
//       console.log(`Любимый жанр #${i + 1} - это ${item}`);
//     });
//   },
//   detectPersonalLevel: function () {
//     if (personalMovieDB.count < 10) {
//       alert("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//       alert("Вы классический зритель");
//     } else if (personalMovieDB.count > 30) {
//       alert("Вы киноман");
//     } else {
//       alert("Произошла ошибка");
//     }
//   },
//   showMyDB: function (hidden) {
//     if (!hidden) {
//       console.log(personalMovieDB);
//     }
//   },
//   toggleVisibleMyDb: function () {
//     if (personalMovieDB.privat) {
//       personalMovieDB.privat = false;
//     } else {
//       personalMovieDB.privat = true;
//     }
//   },
// };
// personalMovieDB.writeYourGenres();

const p = document.querySelectorAll("p");
console.log(p);

function loadScript(src) {
  const script = document.createElement("script");
  script.src = src;
  script.async = false;
  document.body.appendChild(script);
}
loadScript("js/test.js");
loadScript("js/some.js");
