$(document).ready(function () {
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
  // dropdown menu

  $("#dropdown_container_1").click(function () {
    if ($("#dropdown_1").hasClass("hidden")) {
      $("#dropdown_1").removeClass("hidden");
    } else {
      $("#dropdown_1").addClass("hidden");
    }
  });
  $("#dropdown_container_2").click(function () {
    if ($("#dropdown_2").hasClass("hidden")) {
      $("#dropdown_2").removeClass("hidden");
    } else {
      $("#dropdown_2").addClass("hidden");
    }
  });
  $("#dropdown_container_3").click(function () {
    if ($("#dropdown_3").hasClass("hidden")) {
      $("#dropdown_3").removeClass("hidden");
    } else {
      $("#dropdown_3").addClass("hidden");
    }
  });
});
