$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
  	navigation:true,
   	loop:true, 
   	margin:5,
   	center:true,
  	autoplay:true,
  	autoplaySpeed:2000,
	autoplayTimeout: 2000,
    autoplayHoverPause:true,
  	nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  });
  var owl = $(".owl-carousel");
    // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
});

// for making nav bar in mobile auto hide after clicking somewhere else
$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsibleNavbar").collapse('hide');
    }
  });

  // In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
  // Refer to issue #28 in the repo.
  // Solution: force focus on the element that the click event fired on
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
    console.log("done;")
  });
});


// for loading home-main-content.html, my-footer.html, and my-owlcarousel.html to index.html
(function (global) {

var dc = {};

var homeHtml = "snippets/home-main-content.html";
var footer = "snippets/my-footer.html";
var my_owlcarousel = "snippets/my-owlcarousel.html";

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
  homeHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);

$ajaxUtils.sendGetRequest(
  footer,
  function (responseText) {
    document.querySelector("#myfooter")
      .innerHTML = responseText;
  },
  false);

$ajaxUtils.sendGetRequest(
  my_owlcarousel,
  function (responseText) {
    document.querySelector("#myowlcarousel")
      .innerHTML = responseText;
  },
  false);
});
global.$dc = dc;
})(window);
