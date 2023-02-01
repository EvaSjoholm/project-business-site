// Selecting an HTML element
const elementToToggle = document.querySelector(".question-hidden");
// A function that adds and remove the class "active" 
const toggleHTMLElementClass = () => {
  elementToToggle.classList.toggle("active");
};
// Adding the toggle function to our selected element, so everytime it's clicked the class will be toggled
elementToToggle.onclick = toggleHTMLElementClass;

