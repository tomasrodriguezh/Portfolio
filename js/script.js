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


(function (global) {

var trh = {};

var aboutMeHtml = "snippets/about-me.html";
var experienceEducationHtml = "snippets/experience-education.html";
var portfolioHtml = "snippets/portfolio.html";
var contactHtml = "snippets/contact.html";

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {

// On first load, show home view
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  aboutMeHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
});


global.$trh = trh;

})(window);

$(document).ready(function(){
  $('#about-me').click(function(){
    $("#main-content").load("snippets/about-me.html")
  })
})

$(document).ready(function(){
  $('#experience-education').click(function(){
    $("#main-content").load("snippets/experience-education.html")
  })
})

$(document).ready(function(){
  $('#portfolio').click(function(){
    $("#main-content").load("snippets/portfolio.html")
  })
})

$(document).ready(function(){
  $('#contact').click(function(){
    $("#main-content").load("snippets/contact.html")
  })
})