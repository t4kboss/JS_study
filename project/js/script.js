/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};

const adv = document.querySelectorAll(".promo__adv img");
const genre = document.querySelector(".promo__genre");
const bg = document.querySelector(".promo__bg");
const movieList = document.querySelector(".promo__interactive-list");
const formBtn = document.querySelector("button");
const check = document.querySelector("#check");
console.log(typeof check);

const formVal = document.querySelector(".adding__input");
movieDB.movies.sort();
formBtn.addEventListener("click", addFilm);

function removeFilm(e) {
  movieDB.movies.forEach((el, i) => {
    let elUp = `${i + 1}. ${el.toUpperCase()}`;
    if (elUp === e.target.parentNode.textContent.trim()) {
      movieDB.movies.splice(i, 1);
      movieList.innerHTML = "";
      filmList();
    }
  });
}

function addFilm(e) {
  e.preventDefault();
  if (check.checked === true) {
    if (formVal.value != "" && formVal.value != null) {
      if (formVal.value.length > 21) {
        movieDB.movies.push(
          formVal.value.toUpperCase().substring(0, 21) + "..."
        );
        formVal.value = "";
        movieList.innerHTML = "";
        filmList();
      } else {
        movieDB.movies.push(formVal.value.toUpperCase());
        formVal.value = "";
        movieList.innerHTML = "";
        filmList();
      }
      console.log("Добавляем любимый фильм");
    }
  } else {
    if (formVal.value != "" && formVal.value != null) {
      if (formVal.value.length > 21) {
        movieDB.movies.push(
          formVal.value.toUpperCase().substring(0, 21) + "..."
        );
        formVal.value = "";
        movieList.innerHTML = "";
        filmList();
      } else {
        movieDB.movies.push(formVal.value.toUpperCase());
        formVal.value = "";
        movieList.innerHTML = "";
        filmList();
      }
    }
  }
  check.checked = false;
}

adv.forEach((i) => {
  i.remove();
});

genre.textContent = "Драма";
bg.style.backgroundImage = "url(img/bg.jpg)";

movieList.innerHTML = "";

function filmList() {
  let newList = movieDB.movies.map((item) => item.toUpperCase());
  newList.sort();
  movieDB.movies = newList;
  newList.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${film}
             <div class="delete"></div>
        </li>
        `;
  });
  const del = document.querySelectorAll(".delete");
  del.forEach((item) => {
    item.addEventListener("click", removeFilm);
  });
}
filmList();
