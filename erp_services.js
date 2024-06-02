var animateHTML = function() {
    var elems;
    var windowHeight;

    // Function to initialize the animation
    function init() {
      elems = document.querySelectorAll('.animated');
      windowHeight = window.innerHeight;
      addEventHandlers();
      checkPosition();
    };
  
    // Function to add event listeners
    function addEventHandlers() {
      window.addEventListener('scroll', checkPosition);
      window.addEventListener('resize', init);
    };
  
    // Function to check the position of each line
    function checkPosition() {
      for (var i = 0; i < elems.length; i++) {
        var positionFromTop = elems[i].getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= 0) {
          // Add animation class if element is in view
          elems[i].classList.add('fadeInLeftBig');
        } else {
          // Remove animation class if element is out of view
          elems[i].classList.remove('fadeInLeftBig');
        }
      }
    }

    // return to the original form
    return {
      init: init
    };
  };        
  animateHTML().init();