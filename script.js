const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("navbar-mobile")[0]

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active")
})



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

const nav = document.querySelector(".navbar-ppd");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        nav.classList.add("navbar-ppd--hidden");
    } else {
        nav.classList.remove("navbar-ppd--hidden");
    }
    lastScrollY = window.scrollY;
});

