document.addEventListener("DOMContentLoaded", function(event) {
  
  var waitingAnimations = document.querySelectorAll(".video-text span");

  for (var i = 0; i < waitingAnimations.length; i++) {
    (function(index) {
      
      setTimeout(function() {
        waitingAnimations[index].style.animationPlayState = "running";
      }, (index+1) * 600);
    })(i);
  }
});
