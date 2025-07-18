// DOM Elements
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const formResults = document.getElementById("form-results");
const userNameSpan = document.getElementById("user-name");
const contactForm = document.getElementById("contact-form");
const resultsContent = document.getElementById("results-content");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("name").value.trim();
  const tanggal = document.getElementById("date").value;
  const pesan = document.getElementById("message").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');

  if (!nama || !tanggal || !gender || !pesan) {
    showErrorMessage();
    return;
  }

  const waktu = new Date().toLocaleString();

  // Tampilkan hasil di form results
  resultsContent.innerHTML = `
  <p><strong>Waktu Submit:</strong> ${waktu}</p>
  <p><strong>Nama:</strong> ${nama}</p>
  <p><strong>Tanggal Lahir:</strong> ${tanggal}</p>
  <p><strong>Jenis Kelamin:</strong> ${gender.value}</p>
  <p><strong>Pesan:</strong> ${pesan}</p>
`;

  document.getElementById("form-results").classList.remove("hidden");

  showSuccessMessage();
  contactForm.reset();

  // Reset tanggal ke hari ini
  document.getElementById("date").value = new Date()
    .toISOString()
    .split("T")[0];
});

function showSuccessMessage() {
  const successMessage = document.createElement("div");
  successMessage.className =
    "fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50";
  successMessage.innerHTML = `
    <div class="flex items-center">
      <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      Message sent successfully!
    </div>`;
  document.body.appendChild(successMessage);
  setTimeout(() => successMessage.remove(), 3000);
}

function showErrorMessage() {
  const errorMessage = document.createElement("div");
  errorMessage.className =
    "fixed top-20 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50";
  errorMessage.innerHTML = `
    <div class="flex items-center">
      <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
      Semua field wajib diisi!
    </div>`;
  document.body.appendChild(errorMessage);
  setTimeout(() => errorMessage.remove(), 3000);
}

// Set default date ke hari ini saat halaman load
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("date").value = new Date()
    .toISOString()
    .split("T")[0];
});

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  // Set current date
  const dateInput = document.getElementById("date");
  const today = new Date().toISOString().split("T")[0];
  dateInput.value = today;
});
const submitButton = document.getElementById("submit-name");
const nameInput = document.getElementById("name-input");
const nameModal = document.getElementById("name-modal");

submitButton.addEventListener("click", () => {
  const userName = nameInput.value.trim();

  if (userName === "") {
    alert("Nama tidak boleh kosong.");
    return;
  }

  userNameSpan.textContent = userName;

  // Tutup modal
  nameModal.classList.add("hidden");

  // Tampilkan hasil
  formResults.classList.remove("hidden");
});

// Mobile menu toggle
mobileMenuButton.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
});

// Close mobile menu when clicking on nav links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function () {
    mobileMenu.classList.add("hidden");
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Active navigation highlighting
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-blue-600", "font-semibold");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("text-blue-600", "font-semibold");
    }
  });
});

// Add scroll effect to navbar
window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 50) {
    navbar.classList.add("shadow-lg");
  } else {
    navbar.classList.remove("shadow-lg");
  }
});

// Portfolio section (if needed in the future)
function initPortfolio() {
  // Portfolio functionality can be added here
  console.log("Portfolio section initialized");
}

// Initialize all functions
document.addEventListener("DOMContentLoaded", function () {
  initPortfolio();

  // Add loading animation
  document.body.classList.add("opacity-0");
  setTimeout(() => {
    document.body.classList.remove("opacity-0");
    document.body.classList.add("transition-opacity", "duration-500");
  }, 100);
});
