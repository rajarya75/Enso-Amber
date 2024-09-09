$(document).ready(function () {
  $(".btn-back").click(function () {
    $(".banner").toggleClass("full-banner");
  });

  $(".humbergure").click(function () {
    $(".banner").toggleClass("full-banner");
  });
});

// Sticky header
window.addEventListener("scroll", function () {
  var header = document.querySelector(".desktop-header");
  var scrollPosition = window.scrollY || window.pageYOffset;

  // Check if the user has scrolled 100vh or more
  if (scrollPosition > window.innerHeight) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
