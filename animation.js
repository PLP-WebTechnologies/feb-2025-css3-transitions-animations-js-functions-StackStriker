// Animate button on click
const animateBtn = document.getElementById("animate-btn");
animateBtn.addEventListener("click", () => {
  animateBtn.classList.add("animate-pop");
  // Remove class after animation ends so it can replay on next click
  setTimeout(() => {
    animateBtn.classList.remove("animate-pop");
  }, 500);
});

// Save user color preference to localStorage
const colorPicker = document.getElementById("color-picker");
const saveColorBtn = document.getElementById("save-color-btn");
const feedback = document.getElementById("color-feedback");

saveColorBtn.addEventListener("click", () => {
  const selectedColor = colorPicker.value;
  localStorage.setItem("favColor", selectedColor);
  feedback.textContent = `Saved color: ${selectedColor}`;
  document.body.style.backgroundColor = selectedColor;
});

// Load saved color on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedColor = localStorage.getItem("favColor");
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
    feedback.textContent = `Loaded your saved color: ${savedColor}`;
  }
});
