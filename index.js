var options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 0.05
}
var count = 0;
const callback = (entries, observer) => {
    entries.forEach((entry) => {
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
  setTimeout(() => {
  document.getElementById("navbar").style.top = "-60px";
} , 1000)
});

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();