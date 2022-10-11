$(document).ready(function(){
   $('.navbar > button').on('click', function(){
      $('body').toggleClass('color-changed');
   });
});

$('.navbar-collapse a').click(function() {
  $(".navbar-collapse").collapse('hide');
});

// Typewriter.js
// https://github.com/ronv/Typewriter.js

$.fn.typewriter = function() {
  this.each(function() {
    var c = $(this),
      b = c.html(),
      a = 0,
      d = 0;
    c.html("");
    var e = function() {
      if ("<" == b.substring(a, a + 1)) {
        var f = new RegExp(/<span class="instant"/),
          g = new RegExp(/<span class="clear"/);
        if (b.substring(a, b.length).match(f)) a += b.substring(a, b.length).indexOf("</span>") + 7;
        else if (b.substring(a, b.length).match(g)) d = a, a += b.substring(a, b.length).indexOf("</span>") + 7;
        else
          for (;
            ">" != b.substring(a, a + 1);) a++
      }
      c.html(b.substring(d, a++) + (a & 1 ? "_" : ""));
      a >= b.length || setTimeout(e, 70 + 100 *
        Math.random())
    };
    e()
  });
  return this
};
$(".terminal").typewriter();


$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});


var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   var navpos = $('#header-nav').offset();
   if (st < lastScrollTop && $(window).scrollTop() > navpos.top ){
       $('#hid-header-nav').removeClass('hidden');
       $('#hid-header-nav').addClass('navbar-fixed-top');
      
   } else {
      // downscroll code
      $('#hid-header-nav').addClass('hidden');
      $('#hid-header-nav').removeClass('navbar-fixed-top');
   }
   lastScrollTop = st;
});

var encEmail = "dHJvZHJpZ3VlemhAYWx1bW5pLnVuYXYuZXM=";
const form = document.getElementById("email");
form.setAttribute("href", "mailto:".concat(atob(encEmail)));
