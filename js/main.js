/* SWIPER */

const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

/* ANIMATION */
AOS.init();

/* ACCORDION */

$(document).ready(function () {
  $(".accordion .accordion-title").click(function () {
    $(this)
      .next(".accordion-content")
      .slideToggle("slow")
      .siblings(".accordion-content:visible")
      .slideUp("slow");
    $(this).toggleClass("active");
    $(this).siblings(".accordion-title").removeClass("active");
  });
});

/**
 * BURGER MENU
 */

/* SCROLL */

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  var menu = $('.burger-menu');
 // змінити на необхідну висоту прокрутки, при якій значок має з'явитися
  if (scroll > 75) {
    menu.show();
  } else {
    menu.hide();
  }
});

/* OPEN-CLOSED */

$("#burger-menu-btn").click(function () {
  $(".burger-menu-links").toggleClass("show");
  $("#burger-menu-btn").toggleClass("active");
});

$(".burger-menu-link").click(function () {
  $(".burger-menu-links").toggleClass("show");
  $("#burger-menu-btn").toggleClass("active");
});
