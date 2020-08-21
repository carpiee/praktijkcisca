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
  const menu = $("#menu");
  burger.click(function () {
    ShowMenu();
  });

  function ShowMenu() {
    // menu.slideToggle("fast");
    if (menu.hasClass("hidden")) {
      menu.removeClass("hidden");
      menu.addClass("flex");
    } else {
      menu.removeClass("flex");
      menu.addClass("hidden");
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
    $("#dropdown_1").attr("tabIndex", -1);
    if ($("#dropdown_1").hasClass("hidden")) {
      $("#dropdown_1").removeClass("hidden");
    } else {
      $("#dropdown_1").addClass("hidden");
    }
  });
  $("#dropdown_1").focusout(function () {
    $("#dropdown_1").addClass("hidden");
  });

  $("#dropdown_container_2").click(function () {
    $("#dropdown_2").focus();
    if ($("#dropdown_2").hasClass("hidden")) {
      $("#dropdown_2").removeClass("hidden");
    } else {
      $("#dropdown_2").addClass("hidden");
    }
  });
  $("#dropdown_2").on("focusout", function (e) {
    $("#dropdown_2").addClass("hidden");
  });
  $("#dropdown_container_3").click(function () {
    if ($("#dropdown_3").hasClass("hidden")) {
      $("#dropdown_3").removeClass("hidden");
    } else {
      $("#dropdown_3").addClass("hidden");
    }
  });
  $("#dropdown_container_3").on("focusout", function (e) {
    $("#dropdown_3").addClass("hidden");
  });
});
$(document).on("click", function (event) {
  var trigger = $("#burger");
  var menu = $("#menu > *");
  if ($("#menu").hasClass("flex")) {
    if (
      trigger !== event.target &&
      !trigger.has(event.target).length &&
      menu !== event.target &&
      !menu.has(event.target).length
    ) {
      $("#menu").removeClass("flex");
      $("#menu").addClass("hidden");
    }
  }
});
