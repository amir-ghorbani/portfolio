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

