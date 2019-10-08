const anime = require("animejs");
require("waypoints/lib/noframework.waypoints.min");

anime
    .timeline({ easing: "easeOutExpo" })
    .add({
        targets: ".nav__item",
        translateY: ["200%", "0%"],
        opacity: ["0", ".7"],
        delay: anime.stagger(200)
    })
    .add(
        {
            targets: ".logo",
            translateY: ["-40%", "0"],
            opacity: ["0", "1"]
        },
        "-=700"
    )
    .add(
        {
            targets: ".menu",
            translateX: ["-200%", "0"],
            opacity: ["0", "1"]
        },
        "-=800"
    )
    .add(
        {
            targets: ".header__title",
            translateX: ["40%", "0%"],
            opacity: ["0", "1"]
        },
        "-=1000"
    )
    .add(
        {
            targets: ".digit__dot",
            translateY: ["600px", "0%"],
            opacity: ["0", "1"],
            delay: anime.stagger(200)
        },
        "-=1200"
    )
    .add(
        {
            targets: ".digit__text-wrap",
            opacity: ["0", "1"]
        },
        "-=1500"
    )
    .add(
        {
            targets: ".header__btn",
            translateY: ["50%", "0%"],
            opacity: ["0", "1"]
        },
        "-=800"
    )
    .add(
        {
            targets: ".mouse",
            translateY: ["50%", "0%"],
            rotate: ["90", "90"],
            opacity: ["0", "1"]
        },
        "-=1000"
    );

const waypoint1 = new Waypoint({
    element: document.querySelector(".product__furniture .product__img-wrap"),
    handler: direction => {
        anime({
            targets: ".product__furniture .product__img-wrap",
            translateY: ["50%", "0"],
            easing: "easeOutExpo",
            opacity: ["0", "1"]
        });
        anime({
            targets: ".product__furniture .product__card",
            translateX: ["-50%", "0"],
            easing: "easeOutExpo",
            opacity: ["0", "1"]
        });
    },
    offset: "100%"
});

const waypoint2 = new Waypoint({
    element: document.querySelector(".product__decor .product__img-wrap"),
    handler: direction => {
        anime({
            targets: ".product__decor .product__img-wrap",
            translateY: ["50%", "0"],
            easing: "easeOutExpo",
            opacity: ["0", "1"]
        });
        anime({
            targets: ".product__decor .product__card",
            translateX: ["50%", "0"],
            easing: "easeOutExpo",
            opacity: ["0", "1"]
        });
    },
    offset: "100%"
});

const waypoint3 = new Waypoint({
    element: document.querySelector(".videos"),
    handler: direction => {
        anime({
            targets: ".videos__card",
            easing: "easeOutExpo",
            translateY: ["50%", "0%"],
            opacity: ["0", "1"],
            delay: anime.stagger(150)
        });
    },
    offset: "100%"
});

const waypoint4 = new Waypoint({
    element: document.querySelector(".weDo__description"),
    handler: direction => {
        anime({
            targets: ".weDo__description h2",
            easing: "easeOutExpo",
            translateY: ["20%", "0%"],
            opacity: ["0", "1"],
            delay: 100
        });
    },
    offset: "100%"
});
const waypoint5 = new Waypoint({
    element: document.querySelector(".weDo__description"),
    handler: direction => {
        anime({
            targets: ".weDo__text",
            easing: "easeOutExpo",
            translateY: ["20%", "0%"],
            opacity: ["0", "1"],
            delay: 300
        });
    },
    offset: "100%"
});
const waypoint6 = new Waypoint({
    element: document.querySelector(".weDo__description"),
    handler: direction => {
        anime({
            targets: ".weDo__btn",
            easing: "easeOutExpo",
            translateY: ["20%", "0%"],
            opacity: ["0", "1"],
            delay: 500
        });
    },
    offset: "100%"
});

const waypoint7 = new Waypoint({
    element: document.querySelector(".about .about__img-wrap"),
    handler: direction => {
        anime({
            targets: ".about .about__img-wrap",
            translateY: ["50%", "0"],
            easing: "easeOutExpo",
            opacity: ["0", "1"]
        });
        anime({
            targets: ".about .about__card",
            translateX: ["20%", "0"],
            easing: "easeOutExpo",
            opacity: ["0", "1"]
        });
    },
    offset: "100%"
});

const waypoint8 = new Waypoint({
    element: document.querySelector("footer"),
    handler: direction => {
        anime({
            targets: "footer span",
            translateY: ["50%", "0"],
            easing: "easeOutExpo",
            opacity: ["0", "1"]
        });
        anime({
            targets: "footer a",
            translateY: ["50%", "0"],
            easing: "easeOutExpo",
            opacity: ["0", "1"]
        });
    },
    offset: "100%"
});
