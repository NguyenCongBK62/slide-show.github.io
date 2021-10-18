var slideIndex = 1;

const plusSlides = (n) => {
  showSlides((slideIndex += n));
}

const currentSlide = (n) => {
  showSlides((slideIndex = n));
}

const showSlides = (n) => {
  var i;
  var slides = document.getElementsByClassName("slide-item");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

showSlides(slideIndex);

(function autoSlideShow() {
  setInterval(() => {
    showSlides(slideIndex);
    slideIndex += 1;
  }, 4000);
})();
