// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

document.getElementById("mobilemenu").addEventListener("click", function () {
    let element = document.querySelector("#wrapper nav");
    element.classList.toggle("active");
    //Change aria-expended if false to true
    if (this.getAttribute("aria-expanded") == "false") {
        this.setAttribute("aria-expanded", "true");
    }
    else {
        this.setAttribute("aria-expanded", "false");
    }
});