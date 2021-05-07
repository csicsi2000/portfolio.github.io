window.addEventListener("load", showPage);

function showPage() {
  document.body.classList.remove('js-loading');
}

const body = document.body;
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-60px";
      $('.navbar-collapse').collapse('hide');
    }
  prevScrollpos = currentScrollPos;
}

$( document ).ready(function () {
  let viewheight = $(window).height();
  let viewwidth = $(window).width();
  let viewport = document.querySelector("meta[name=viewport]");
  viewport.setAttribute("content", "height=" + viewheight + "px, width=" + viewwidth + "px, initial-scale=1.0");
});