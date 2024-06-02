// Selecting Input Elements
const inputs = document.querySelectorAll(".input");

// function for focus
function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

// function for blur
function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

// Adding Event Listeners
inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});