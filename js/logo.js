// Get popup and buttons
const contactButton = document.getElementById("contactButton");
const contactPopup = document.getElementById("contactPopup");
const closePopup = document.getElementById("closePopup");

// Show popup on button click
contactButton.addEventListener("click", () => {
  contactPopup.classList.add("show");
});

// Close popup on close button click
closePopup.addEventListener("click", () => {
  contactPopup.classList.remove("show");
});

// Close popup when clicking outside the popup content
contactPopup.addEventListener("click", (e) => {
  if (e.target === contactPopup) {
    contactPopup.classList.remove("show");
  }
});
