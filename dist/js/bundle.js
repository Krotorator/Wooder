(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/* const anime = require("animejs");

let title = document.querySelector(".header__title");
let title1 = document.querySelector(".product__title");
let dots = document.querySelectorAll(".digit__dot");
let dotsWrap = document.querySelector(".digit__text-wrap");
title.innerHTML = title.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

title1.innerHTML = title1.textContent.replace(/\S/g, "<span class='letter1'>$&</span>");

console.log(title);

// title.innerText.split("").forEach(element => {
//     element = `<span class="aaa">${element}</span>`;
//     newTitle.push(element);
// });

anime.timeline({ loop: true }).add({
    targets: ".header__title",
    translateX: [500, 0],
    width: ["800px", "547px"],
    easing: "linear",
    duration: 1200
});

anime({
    targets: ".header__title .letter",
    margin: ["70px", "0px"],

    duration: 1200,
    easing: "linear",
    loop: true
});
 */
"use strict";

},{}]},{},[1]);
