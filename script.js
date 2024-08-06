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
  
  var loadingBar = document.getElementById('loading-bar').querySelector('::after');
  var progress = 0;

  var interval = setInterval(function() {
    progress += 10;
    loadingBar.style.width = progress + '%';

    if (progress >= 100) {
      clearInterval(interval);
    }
  }, 300);

  img.onload = function () {
    clearInterval(interval);
    document.body.style.backgroundImage = "url('images/IMG_1586.png')";
    document.getElementById('loading-screen').style.display = 'none';
  };
});
