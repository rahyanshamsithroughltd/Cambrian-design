
$(function() {
    var navbar = $('.navbar');
    $(window).scroll(function() {
      if($(window).scrollTop() <= 400) {
        navbar.removeClass('scrolled');
      } else {
        navbar.addClass('scrolled');
      }
    });
  });

//   $(document).ready(function() {
//     $('.navbar-toggler').click(function() {
//         $('.navbar-collapse').toggleClass('show');
//     });
// });