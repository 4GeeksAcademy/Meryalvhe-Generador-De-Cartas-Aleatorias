/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#number").innerHTML = cardNumberRandom();
  let palosuperior = (document.querySelector(
    ".palo"
  ).innerHTML = cardPaloRandom());
  document.querySelector("#paloBotton").innerHTML = palosuperior;
  click();
  setInterval(timeOut, 2000);
};

function cardNumberRandom() {
  let cardNumber = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let cardNumberAleatory = Math.floor(Math.random() * cardNumber.length);

  return cardNumber[cardNumberAleatory];
}

function cardPaloRandom() {
  let cardSimbol = ["♦", "♥", "♠", "♣"];

  let cardPaloAleatory = Math.floor(Math.random() * cardSimbol.length);

  color(cardPaloAleatory);

  return cardSimbol[cardPaloAleatory];
}

function color(element) {
  let simbolColor = "";
  if (element == 0 || element == 1) {
    simbolColor = "red";
  } else {
    simbolColor = "black";
  }

  let cardTop = document.querySelector(".palo");
  let cardBotton = document.querySelector("#paloBotton");
  cardTop.style.color = simbolColor;
  cardBotton.style.color = simbolColor;
}

function click() {
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#number").innerHTML = cardNumberRandom();
    let palosuperior = (document.querySelector(
      ".palo"
    ).innerHTML = cardPaloRandom());
    document.querySelector("#paloBotton").innerHTML = palosuperior;
  });
}

function timeOut() {
  document.querySelector("#number").innerHTML = cardNumberRandom();
  let palosuperior = (document.querySelector(
    ".palo"
  ).innerHTML = cardPaloRandom());
  document.querySelector("#paloBotton").innerHTML = palosuperior;
}
