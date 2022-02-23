const toggleButton = document.getElementsByClassName("toggle-buttonMain")[0]
const navbarLinks = document.getElementsByClassName("navbar-mobileMain")[0]

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active")
})


const nav = document.querySelector(".navbar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        nav.classList.add("navbar--hidden");
    } else {
        nav.classList.remove("navbar--hidden");
    }
    lastScrollY = window.scrollY;
});

// const toggleButton = document.getElementsByClassName("toggle-button")[0]
// const navbarLinks = document.getElementsByClassName("navbar-mobile")[0]
// const toggleButtonCross = document.getElementsByClassName("toggle-button-cross")[0]

// toggleButton.addEventListener("click", () => {
//     navbarLinks.classList.toggle("active")
// })

// toggleButton.addEventListener("click", () => {
//     toggleButton.classList.toggle("active")
// })

// toggleButton.addEventListener("click", () => {
//     toggleButtonCross.classList.toggle("active")
// })

// toggleButtonCross.addEventListener("click", () => {
//     toggleButton.classList.toggle("active")
// })

