document.addEventListener("DOMContentLoaded", e => {
  let el = document.querySelector("nav ul li:last-of-type");
  let em = document.querySelector("header h1");
  let er = document.querySelector("nav ul li:first-of-type");
  let element = document.querySelector("header h1");
  console.log(element);
  let element_2 = document.querySelector("header nav");

  const funky = () => {
    const element_3 = document.body;
    element_3.classList.toggle("dark-mode");
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
    el.classList.toggle("anim-in");
    funky();
  });
  em.addEventListener("click", () => {
    shownav();
  });
  er.addEventListener("click", () => {
    showh1();
  });
});