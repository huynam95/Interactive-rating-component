"use strict";

const btns = [...document.querySelectorAll(".btn-radio")];

const ratingEl = document.querySelector(".rating-component");
const submitEl = document.querySelector(".submitted-component");
const textEl = document.querySelector(".selected-text");

const formEl = document.querySelector(".form");

let activeNum;

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    btns.forEach((btn) => btn.classList.remove("active"));

    btn.classList.add("active");
  });
});

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!btns.some((btn) => btn.classList.contains("active"))) return;

  ratingEl.classList.remove("visible");
  ratingEl.classList.add("hidden");

  btns.forEach((btn) => {
    if (btn.classList.contains("active")) activeNum = +btn.textContent;
  });

  textEl.textContent = `You selected ${activeNum} out of 5`;

  submitEl.classList.remove("hidden");
  submitEl.classList.add("visible");
});
