window.addEventListener('scroll', function () {
  const scrollY = window.scrollY;
  const animationOffset = document.querySelector(".work-3").offsetTop;
  const animationPath = document.querySelector(".work-3__path");
  const animationCircle = document.querySelector(".work-3__circle");

  if (scrollY >= animationOffset - 700) {
    animationPath.classList.add("path-animation");
    animationCircle.classList.add("circle-animation");
  }
});
