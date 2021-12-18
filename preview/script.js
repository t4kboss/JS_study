"use strict";

const btns = document.querySelectorAll("button");
const overlay = document.querySelector(".overlay");
// btn.onclick = function () {
//   alert("Click");
// };
let i = 0;
const deleteElement = (e) => {
  console.log(e.currentTarget);
  console.log(e.type);
  //   i++;
  //   if (i == 1) {
  //     btn.removeEventListener("click", deleteElement);
  //   }
  //   e.target.remove;
};

btn.addEventListener("click", deleteElement);
overlay.addEventListener("click", deleteElement);

const link = document.querySelector("a");

link.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target);
});

btns.forEach((item) => {
  item.addEventListener("click", deleteElement, { once: true });
});
