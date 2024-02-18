document.addEventListener("DOMContentLoaded", function(event) {
 
  var waitingAnimations = document.querySelectorAll(".video-text span");

  for (var i = 0; i < waitingAnimations.length; i++) {
    if (i ==0) {
      (function(index) {
      
        setTimeout(function() {
          waitingAnimations[index].style.animationPlayState = "running";
        }, (index+1) * 1); /*3800*/
      })(i);
    } else {
    (function(index) {
      
      setTimeout(function() {
        waitingAnimations[index].style.animationPlayState = "running";
      }, (index+1) * 600);
    })(i);
  }}
});

/*document.addEventListener('DOMContentLoaded', function() {
  var firstButton = document.querySelector('.btn-1');

  // 当fadein动画结束后添加类
  firstButton.addEventListener('animationend', function() {
    this.classList.add('visible');
  });
  firstButton.addEventListener('mouseenter', function() {
    this.classList.add('visible');
  });
  
});


.firstButton {
  letter-spacing: 0px;
  opacity: 0;
  visibility: hidden;
  text-decoration: none;
  display:inline-block;
  border: 2px solid #fff;
  padding: 14px 35px;
  border-radius:50px;
  margin-top:20px; 
  font-size:20px;
  color:#fff;
  font-weight: 600;
  animation: fadein 6s 1s ease forwards;   
  animation-fill-mode: forwards ;
  
}
.firstButton.visible {
  opacity: 1;
  visibility: visible;
  animation: none;
  
}


.firstButton:hover {
  -webkit-text-stroke:2px #fff;
  color: transparent;
  
  animation: snake 2s forwards;
  opacity: 1;
  visibility: visible;
  animation-fill-mode: forwards; 
} */

document.addEventListener('DOMContentLoaded', function() {
  var firstButton = document.querySelector('.btn-1');
  var rects = document.querySelectorAll('.btn-1 rect');
  var fireworks = document.querySelector('.fireworkDiv');
  // 当fadein动画结束后添加类
  firstButton.addEventListener('mouseleave', function() {
    
    rects[0].setAttribute('rx', '15');
      rects[0].setAttribute('ry', '15');
      rects[1].setAttribute('rx', '15');
      rects[1].setAttribute('ry', '15');

      var firework = document.querySelector('.firework');
      if (firework) {
        firework.remove();
      }
      
  });
  firstButton.addEventListener('mouseenter', function() {
    
    rects[0].setAttribute('rx', '0');
      rects[0].setAttribute('ry', '0');
      rects[1].setAttribute('rx', '0');
      rects[1].setAttribute('ry', '0');

      var firework = document.createElement('div');
      firework.classList.add('firework');
      fireworks.appendChild(firework);
      
      
  });
  
});

