/* Mobile Navbar Toggle */
function toggleMenu() {
  const navMenu = document.getElementById("navMenu");

  if (navMenu) {
    navMenu.classList.toggle("active");
  }
}

/* Open Category Pages */
function openPage(pageName) {
  window.location.href = pageName;
}

/* Blog Category Buttons */
function openAI() {
  window.location.href = "ai.html";
}

function openBusiness() {
  window.location.href = "business.html";
}

function openSports() {
  window.location.href = "sports.html";
}

function openPolitics() {
  window.location.href = "politics-pakistan.html";
}

function openPetrol() {
  window.location.href = "petrol-prices.html";
}

function openLatestDevelopments() {
  window.location.href = "latest-developments.html";
}

function openAbout() {
  window.location.href = "about.html";
}

function openContact() {
  window.location.href = "contact.html";
}

/* Newsletter Subscribe */
function subscribeUser(event) {
  event.preventDefault();

  const emailInput = document.getElementById("email");
  const message = document.getElementById("message");

  if (!emailInput || !message) return;

  const email = emailInput.value.trim();

  if (email === "") {
    message.textContent = "Please enter your email address.";
    return;
  }

  message.textContent = "Thank you for subscribing, " + email + "!";
  emailInput.value = "";
}

/* Close mobile menu after clicking a link */
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {
  link.addEventListener("click", function() {
    const navMenu = document.getElementById("navMenu");

    if (navMenu) {
      navMenu.classList.remove("active");
    }
  });
});