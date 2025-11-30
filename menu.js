let menu = document.querySelector(".side-menu");
let menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
    if (menu.style.left === "0px") {
        menu.style.left = "-260px";
    } else {
        menu.style.left = "0px";
    }
});

document.addEventListener("click", (event) => {
    let menuArea = document.querySelector(".side-menu");

    if (!menuArea.contains(event.target) && !menuBtn.contains(event.target)) {
        menu.style.left = "-260px";
    }
});


let sizeStars = document.querySelectorAll(".size-star");

sizeStars.forEach(star => {
    star.addEventListener("click", () => {

        sizeStars.forEach(s => s.classList.remove("selected"));
        star.classList.add("selected");

    });
});