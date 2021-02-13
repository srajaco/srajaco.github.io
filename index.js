new WOW().init();
$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
    $('.carousel').carousel();
    $('.tooltipped').tooltip();
    $('.scrollspy').scrollSpy();
    $('.datepicker').datepicker({
        disableWeekends: true
    });
});
// Materialize Modal
$(document).ready(function(){
  $('.modal').modal();
});
// Back to top button
var mybutton = document.getElementById("backToTop");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    mybutton.style.transition = "1s";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Disclaimer
// // For Disabling the scroll
window.addEventListener("scroll", noScroll);
function noScroll(){
  window.scrollTo(0,0);
}

const disclaimerContainer = document.querySelector(".disclaimer");
const disclaimerBtn = document.querySelector(".dis-btn");

disclaimerBtn.addEventListener("click", () => {
  disclaimerContainer.classList.remove("active");
  window.removeEventListener("scroll",noScroll);
});
setTimeout(() => {
  disclaimerContainer.classList.add("active");
}, 500);