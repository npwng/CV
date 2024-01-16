$(document).ready(function () {
    var lastScrollTop = 0;

    $(window).scroll(function () {
      var scrollTop = $(this).scrollTop();

      if (scrollTop > lastScrollTop) {
        // Scrolling down, hide the navbar
        $("#navi").addClass("hidden");
      } else {
        // Scrolling up, show the navbar
        $("#navi").removeClass("hidden");
      }

      lastScrollTop = scrollTop;
    });
  });