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
    var loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.opacity = 0; // Trigger fade-out
    
    // Wait for the fade-out transition to complete before removing the element
    setTimeout(function () {
      loadingScreen.style.display = 'none'; // Hide the loading screen
    }, 1000); // Matches the transition duration
  };
});
