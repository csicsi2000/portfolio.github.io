var options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 0.05
}
var count = 0;
const callback = (entries, observer) => {
    entries.forEach((entry) => {
        console.log(count);
      if (entry.isIntersecting) {
        entry.target.classList.add("fadeIn")
      }
    })
  }

const observer = new IntersectionObserver(callback, options);

var target= document.querySelectorAll(".project");
for(i =0; i< target.length; i++){
    observer.observe(target[i]);
}

const mainNavigation = document.querySelector(".main-navigation");
const overlay = mainNavigation.querySelector(".overlay");
const toggler = mainNavigation.querySelector(".navbar-toggler");

const openSideNav = () => mainNavigation.classList.add("active");
const closeSideNav = () => mainNavigation.classList.remove("active");

document.addEventListener("swiped-right", openSideNav);
document.addEventListener("swiped-left", closeSideNav);
toggler.addEventListener("click", openSideNav);
overlay.addEventListener("click", closeSideNav);

