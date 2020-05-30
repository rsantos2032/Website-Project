// Put your js code here
window.onscroll = function()
{scrollFunction()};

var nav_bar = document.getElementById("nav_bar");
var sticky = nav_bar.offsetTop;

var carousel_loc = document.getElementById("carousel");
var carousel_trigger = carousel_loc.offsetTop;

var ff_loc = document.getElementById("FF");
var ff_trigger = ff_loc.offsetTop + ff_loc.offsetHeight;

var sticker_loc = document.getElementById("modal");
var sticker_trigger = sticker_loc.offsetTop + sticker_loc.offsetHeight;

var video_loc = document.getElementById("video");
var video_trigger = video_loc.offsetTop + video_loc.offsetHeight;

function scrollFunction() {
  if (window.pageYOffset >= carousel_trigger && window.pageYOffset < ff_trigger) {
    document.getElementById("carousel_href").style.background = "#ddd";
  } else {
    document.getElementById("carousel_href").style.background = "#333";
  }

  if (window.pageYOffset >= ff_trigger && window.pageYOffset < sticker_trigger) {
    document.getElementById("ff_href").style.background = "#ddd";
  } else {
    document.getElementById("ff_href").style.background = "#333";
  }

  if (window.pageYOffset >= sticker_trigger && window.pageYOffset < video_trigger) {
    document.getElementById("stickers_href").style.background = "#ddd";
  } else {
    document.getElementById("stickers_href").style.background = "#333";
  }

  if (window.pageYOffset >= video_trigger) {
    document.getElementById("video_href").style.background = "#ddd";
  } else {
    document.getElementById("video_href").style.background = "#333";
  }


  if (window.pageYOffset >= sticky) {
    nav_bar.classList.add("sticky")
    nav_bar.style.padding = "0px 0px"
  } else {
    nav_bar.classList.remove("sticky");
    nav_bar.style.padding = "20px 20px"
  }
}


// Code for slideshow was modified from https://www.w3schools.com/howto/howto_js_slideshow.asp
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length-1}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  console.log(slideIndex);
  slides[slideIndex-1].style.display = "block";
}

document.getElementById("prev").addEventListener("click", function(){
  plusSlides(-1);
});
document.getElementById("next").addEventListener("click", function(){
  plusSlides(1);
});

var modal = document.getElementById("modal_popup");
var img = document.getElementsByClassName("modal-image");
console.log(img.src);

var modal_image = document.getElementById("mod-img");


img[0].addEventListener("click", function() {
  modal.style.display = "block";
  modal_image.src = this.src;
});
img[1].addEventListener("click", function() {
  modal.style.display = "block";
  modal_image.src = this.src;
});
img[2].addEventListener("click", function() {
  modal.style.display = "block";
  modal_image.src = this.src;
});
img[3].addEventListener("click", function() {
  modal.style.display = "block";
  modal_image.src = this.src;
});
img[4].addEventListener("click", function() {
  modal.style.display = "block";
  modal_image.src = this.src;
});

var span = document.getElementsByClassName("close")[0];

span.addEventListener("click", function() {
  modal.style.display = "none";
});
