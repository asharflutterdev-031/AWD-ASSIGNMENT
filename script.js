const modeToggle = document.getElementById("mode-toggle");
const body = document.body;
modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
if (body.classList.contains("dark")) {
  modeToggle.textContent = "Light Mode";
} else {
  modeToggle.textContent = "Dark Mode";
}
});
const form = document.querySelector(".contact-form");
form.addEventListener("submit", (e) => {e.preventDefault();
  alert("Thank you for reaching out!  I’ll get back to you soon.");
  form.reset();
});
