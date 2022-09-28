$(document).ready(function(){
   $('.navbar > button').on('click', function(){
      $('body').toggleClass('color-changed');
   });
});

$('.navbar-collapse a').click(function() {
  $(".navbar-collapse").collapse('hide');
});

$('.navbar-nav>li>a').on('click', function(){
   $('.navbar-collapse').collapse('hide');
});