document.addEventListener("DOMContentLoaded", e => {
  let el = document.querySelector("nav ul li:last-of-type");
  let em = document.querySelector("header h1");
  let er = document.querySelector("nav ul li:first-of-type");

  var element = document.querySelector("header h1");
  var element_2 = document.querySelector("header nav");

  function funky() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  };

  function shownav() {
    element.classList.add("hide");
    element_2.classList.add("show");
  };

  function showh1() {
    element.classList.remove("hide");
    element_2.classList.remove("show");
  }

  el.addEventListener("click", () => {
    funky();
  });
  em.addEventListener("click", () => {
    shownav();
  });
  er.addEventListener("click", () => {
    showh1();
  });
});