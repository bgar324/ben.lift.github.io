var typed = new Typed(".auto-type", {
  strings: ["Computer Science Student","Bodybuilder","Videogamer"],
  //speed for typing
  typeSpeed: 75,
  //speed for backspacing
  backSpeed: 60,
  loop: true
})

document.addEventListener("DOMContentLoaded", function () {
  var img = new Image();
  img.src = 'images/IMG_1586.png';
  
  img.onload = function () {
    document.getElementById('loading-screen').style.display = 'none';
    loadingScreen.style.opacity = 0;
  };
  setTimeout(function() {
    loadingScreen.style.display = 'none'
  },1000)
});
