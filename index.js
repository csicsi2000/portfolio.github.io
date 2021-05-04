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

$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});