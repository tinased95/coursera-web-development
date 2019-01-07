var api_key="496a84e3";


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
// var my_owlcarousel = "snippets/my-owlcarousel.html";

// var movie_ids_1 = ["tt3469046","tt3874544","tt2948356","tt2380307","tt3783958","tt4975722","tt2543164","tt3521164",
//     "tt3470600","tt1679335","tt4624424","tt3181400","tt3416828","tt3606752","tt2293640"];
// var urls_1=[];
// urls_1.length=movie_ids_1.length;
// var urls_1[i] = "http://www.omdbapi.com/?i=" + movie_ids_1[i] + "&apikey=" + api_key;

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

// $ajaxUtils.sendGetRequest(
//   my_owlcarousel,
//   function (responseText) {
//     document.querySelector("#myowlcarousel")
//       .innerHTML = responseText;
//   },
//   false);

});
global.$dc = dc;
})(window);

function showdetails(object){
  url = "moviedetail.html?" + object['imdbID'];
  window.open(url, '_blank');
}
function create_owl_carousel_items(){
    movie_ids = ["tt3469046","tt3874544","tt2948356","tt2380307","tt3783958","tt4975722","tt2543164","tt3521164",
    "tt3470600","tt1679335","tt4624424","tt3181400","tt3416828","tt3606752","tt2293640"];
    var urls=[];
    // urls.length=movie_ids.length;
    console.log(movie_ids.length);

    var owl_demo = document.getElementById("myowlcarousel");
    for(var i=0;i<movie_ids.length;i++){
        var movie_item = document.createElement("div");
        movie_item.className = "item";
        movie_item.id = "item" + i.toString();

        var movie_img = document.createElement("img");
        movie_img.className = "movie_img";
        movie_img.id = "movie_img"+i.toString();

        // var movie_title = document.createElement("label");
        // movie_title.className = "col-xs-12 movie_title";
        // movie_title.id = "movie_title"+i.toString();
        // movie_title.setAttribute('style','margin-top:20%');

        // var movie_year = document.createElement("label");
        // movie_year.className = "col-xs-12 movie_year";
        // movie_year.id = "movie_year"+i.toString();

        // var movie_buttons = document.createElement("div");
        // movie_buttons.className= "movie_buttons";
        // movie_buttons.id= "movie_buttons"+i.toString();

        // var download_button = document.createElement("button");
        // download_button.className="fa fa-download download_button";
        // download_button.setAttribute('style','margin-left:3px');

        // var like_button = document.createElement("button");
        // like_button.className="fa fa-heart-o like_button";
        // like_button.setAttribute('style','margin-left:3px');

        // var movie_button=document.createElement("button");
        // movie_button.className="fa fa-video-camera movie_button";
        // movie_button.setAttribute('style','margin-left:3px');

        // var movie_info = document.createElement("div");
        // movie_info.id = "movie_info"+i.toString();
        // movie_info.setAttribute('style','opacity:0');

        movie_item.appendChild(movie_img);
        owl_demo.appendChild(movie_item);
        // movie_buttons.appendChild(download_button);
        // movie_buttons.appendChild(like_button);
        // movie_buttons.appendChild(movie_button);
        // movie_info.appendChild(movie_title);
        // movie_info.appendChild(movie_year);
        // movie_info.appendChild(movie_buttons);
        // movie_item.appendChild(movie_info);


        // movie_item.onclick = ifclicked();
        // movie_item.onmouseover = ifhovered;
        // movie_item.onmouseout = ifnothovered;

        urls[i] = "http://www.omdbapi.com/?i=" + movie_ids[i] + "&apikey=" + api_key;
        url=urls[i];


        var counter=0;
        $.get(url).done(function (object){
            var img="movie_img"+counter.toString();
            // var title="movie_title"+counter.toString();
            // var myear="movie_year"+counter.toString();
            document.getElementById(img).setAttribute('src',object['Poster']);
            console.log(object['Poster']);
            document.getElementById(img).addEventListener("click", function(){showdetails(object)} );
            // document.getElementById(title).innerHTML = object['Title'];
            // document.getElementById(myear).innerHTML = object['Year'];
            // console.log("imagei ke add kardam:");
            // console.log(object['Poster']);
            counter++;
            console.log(counter);

    });

    }

}
$(document).ready(function(){
  create_owl_carousel_items();
  $('.owl-carousel').owlCarousel({
    navigation:true,
    loop: false,
    rewind: true,
    margin:5,
    // center:true,
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