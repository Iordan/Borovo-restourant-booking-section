// DAILY MENU
const dailyMenus = {
  0: ["Roast Pork", "Cream Soup", "Village Salad"],          // Sunday
  1: ["Grilled Chicken", "Tomato Soup", "Fresh Salad"],      // Monday
  2: ["Pasta Carbonara", "Mushroom Soup", "Greek Salad"],    // Tuesday
  3: ["Beef Steak", "Pumpkin Soup", "Caesar Salad"],         // Wednesday
  4: ["Fish Fillet", "Chicken Soup", "Italian Salad"],       // Thursday
  5: ["Pizza", "Broccoli Soup", "Mediterranean Salad"],      // Friday
  6: ["BBQ Ribs", "Vegetable Soup", "Chef's Special"],       // Saturday
};

const todayIndex = new Date().getDay(); // 0-6
const todayMenu = dailyMenus[todayIndex];

const menuList = document.getElementById("menuList");

todayMenu.forEach((item) => {
  const div = document.createElement("div");
  div.className = "menu-item";
  div.innerHTML = `<h3>${item}</h3>`;
  menuList.appendChild(div);
});

// BOOKING MODAL
const bookBtn = document.getElementById("bookBtn");
const bookingModal = document.getElementById("bookingModal");
const closeModal = document.getElementById("closeModal");
const bookingForm = document.getElementById("bookingForm");

bookBtn.addEventListener("click", () => {
  bookingModal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  bookingModal.classList.add("hidden");
});

// затваряне при клик извън прозореца
bookingModal.addEventListener("click", (e) => {
  if (e.target === bookingModal) {
    bookingModal.classList.add("hidden");
  }
});

// проста fake обработка на формата
bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Your table has been reserved!");
  bookingModal.classList.add("hidden");
  bookingForm.reset();
});
