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
