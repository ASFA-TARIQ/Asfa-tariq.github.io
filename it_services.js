// function to check visiblity
function checkForVisibility() {
    var headers = document.querySelectorAll(".header");
    headers.forEach(function(header) {
      if (isElementInViewport(header)) {
        header.classList.add("headerVisible");
      } else {
        header.classList.remove("headerVisible");
      }
    });
  }

  // function to check if element is inside viewpoint
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // check for availability of event listener
  if (window.addEventListener) {
    addEventListener("DOMContentLoaded", checkForVisibility, false);
    addEventListener("load", checkForVisibility, false);
    addEventListener("scroll", checkForVisibility, false);
  }
  
  