function colap(id) {
  const item = document.getElementById(`colap_${id}`);
  if (item.classList.contains("hidden")) {
    item.classList.remove("hidden");
    item.classList.add("block");
  } else {
    item.classList.remove("block");
    item.classList.add("hidden");
  }
}
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
burger.addEventListener("click", ShowMenu);

function ShowMenu() {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    menu.classList.add("flex");
  } else {
    menu.classList.remove("flex");
    menu.classList.add("hidden");
  }
}
let slideIndex = null;

showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("flex");
    slides[i].classList.add("hidden");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].classList.remove("hidden");
  slides[slideIndex - 1].classList.add("flex");
  setTimeout(showSlides, 10000);
}
