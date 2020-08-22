$(document).ready(function () {
  // colap menu mobile
  $("#colap_trigger_1").click(() => {
    const item = $("#colap_1");
    if (item.hasClass("hidden")) {
      item.removeClass("hidden");
    } else {
      item.addClass("hidden");
    }
  });

  $("#colap_trigger_2").click(() => {
    const item = $("#colap_2");
    if (item.hasClass("hidden")) {
      item.removeClass("hidden");
    } else {
      item.addClass("hidden");
    }
  });
  $("#colap_trigger_3").click(() => {
    const item = $("#colap_3");
    if (item.hasClass("hidden")) {
      item.removeClass("hidden");
    } else {
      item.addClass("hidden");
    }
  });

  // showmenu

  const burger = $("#burger");
  burger.click(function () {
    showMenu();
  });

  function showMenu() {
    const menu = $("#menu");
    // menu.slideToggle("fast");
    if (menu.hasClass("hidden")) {
      $("#menu").stop(true, false).removeClass("hidden", 1000);
    } else {
      $("#menu").stop(true, false).addClass("hidden", 1000);
    }
  }

  $(document).on("click", function (event) {
    var trigger = $("#burger");
    var menu = $("#menu");
    if ($("#menu").css("display") == "block") {
      if (
        trigger !== event.target &&
        !trigger.has(event.target).length &&
        menu !== event.target &&
        !menu.has(event.target).length
      ) {
        showMenu();
      }
    }
  });

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
    $("#dropdown_1").slideToggle("fast");
    $("#dropdown_2").slideUp();
    $("#dropdown_3").slideUp();
  });

  $("#dropdown_container_2").click(function () {
    $("#dropdown_2").slideToggle("fast");
    $("#dropdown_1").slideUp();
    $("#dropdown_3").slideUp();
  });

  $("#dropdown_container_3").click(function () {
    $("#dropdown_3").slideToggle("fast");
    $("#dropdown_2").slideUp();
    $("#dropdown_1").slideUp();
  });
});
