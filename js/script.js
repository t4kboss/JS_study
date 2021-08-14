"use strict";

let header = {
  class: "red",
  width: "auto",
  changeColor: function (e) {
    e.target.classList.toggle("header");
  },
};

document.addEventListener("click", header.changeColor);

const user = "Ivan";
alert(`Hello, ${user}`);
