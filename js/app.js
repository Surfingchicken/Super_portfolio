document.addEventListener("DOMContentLoaded", e => {
    let el = document.querySelector("nav ul li:last-of-type");
    function funky() {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }
    el.addEventListener("click", () => {
        funky();
    });
});