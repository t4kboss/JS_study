"use strict";

const box = document.getElementById("box");
const btns = document.getElementsByTagName("button");
const circles = document.getElementsByClassName("circle");
const hearts = document.querySelectorAll(".heart");
const oneHeart = document.querySelector(".heart");
const wrapper = document.querySelector(".wrapper");

// box.style.backgroundColor = "blue";
// box.style.width = "500px";

box.style.cssText = "background-color: blue ; width: 500px";

btns[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = "red";

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = "green";
// }

hearts.forEach((item) => {
  item.style.backgroundColor = "pink";
});

const div = document.createElement("div");
// const text = document.createTextNode("Hilroy was here");

div.classList.add("black");
wrapper.prepend(div);
// wrapper.appendChild(div);

// hearts[0].before(div);
// wrapper.insertBefore(div, hearts[1]);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = "<h1> world</h1>";

// div.textContent = "Hello";

div.insertAdjacentHTML("afterend", "<h2>Hello</h2>");
