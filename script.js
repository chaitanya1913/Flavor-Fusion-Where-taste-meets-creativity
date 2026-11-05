const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Menu category filters
document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const category = button.dataset.filter;
    document.querySelectorAll(".dish-card").forEach(card => {
      card.hidden = category !== "all" && card.dataset.category !== category;
    });
  });
});

// Demo booking form: shows a confirmation in the browser (no server connection).
const bookingForm = document.getElementById("bookingForm");
bookingForm.addEventListener("submit", event => {
  event.preventDefault();
  const name = bookingForm.elements.name.value.trim();
  document.getElementById("formMessage").textContent =
    `Thank you, ${name}! Your booking request is ready. This demo does not send it to the restaurant.`;
  bookingForm.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();
const dateInput = bookingForm.elements.date;
dateInput.min = new Date().toISOString().split("T")[0];
