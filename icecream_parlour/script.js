// Example button click animation
document.querySelectorAll(".order-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Thank you for your order! 🍨");
    });
});
// ===========================
// POPUP ELEMENTS
// ===========================

// USER POPUP
const userIcon = document.getElementById("user-icon");
const userPopup = document.getElementById("userPopup");

// CART POPUP
const cartIcon = document.getElementById("cart-icon");
const cartPopup = document.getElementById("cartPopup");

// Close buttons
const closeBtns = document.querySelectorAll(".closeBtn");


// ===========================
// USER POPUP EVENTS
// ===========================

userIcon.addEventListener("click", () => {
  userPopup.style.display = "flex";
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  alert("You have been signed out!");
  userPopup.style.display = "none";
});


// ===========================
// CLOSE ANY POPUP
// ===========================

closeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    userPopup.style.display = "none";
    cartPopup.style.display = "none";
  });
});

window.addEventListener("click", (e) => {
  if (e.target === userPopup) userPopup.style.display = "none";
  if (e.target === cartPopup) cartPopup.style.display = "none";
});


// ===========================
// CART POPUP EVENTS
// ===========================

cartIcon.addEventListener("click", () => {
  cartPopup.style.display = "flex";
});


// ===========================
// QUANTITY BUTTON LOGIC (+ / -)
// ===========================

// All plus & minus buttons
const plusBtns = document.querySelectorAll(".plus");
const minusBtns = document.querySelectorAll(".minus");

// Increase quantity
plusBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    let numberSpan = btn.parentElement.querySelector(".qty-number");
    let number = parseInt(numberSpan.textContent);
    number++;
    numberSpan.textContent = number;
  });
});

// Decrease quantity
minusBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    let numberSpan = btn.parentElement.querySelector(".qty-number");
    let number = parseInt(numberSpan.textContent);
    if (number > 1) number--; // prevent 0
    numberSpan.textContent = number;
  });
});

