"use strict";

const btns = [...document.querySelectorAll(".btn")];

const ratingEl = document.querySelector(".rating-component");
const submitEl = document.querySelector(".submitted-component");
const textEl = document.querySelector(".selected-text");

const submitBtnEl = document.querySelector(".submit");

let activeNum;

const submitted = function () {
  if (!btns.some((btn) => btn.classList.contains("active"))) return;

  ratingEl.classList.add("hidden");
  btns.forEach((btn) => {
    if (btn.classList.contains("active")) activeNum = +btn.textContent;
  });

  textEl.textContent = `You selected ${activeNum} out of 5`;

  submitEl.classList.remove("hidden");
};

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    btns.forEach((btn) => btn.classList.remove("active"));

    btn.classList.add("active");
  });
});

submitBtnEl.addEventListener("click", submitted);
