// Example order button animation
document.querySelectorAll(".order-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Thank you for your order! 🍨");
    });
});

// POPUP ELEMENTS
const userIcon = document.getElementById("user-icon");
const userPopup = document.getElementById("userPopup");

const cartIcon = document.getElementById("cart-icon");
const cartPopup = document.getElementById("cartPopup");

const loginPopup = document.getElementById("loginPopup");

const closeBtns = document.querySelectorAll(".closeBtn");

// LOGIN LOGIC
document.getElementById("submitLogin").addEventListener("click", () => {
  const user = document.getElementById("loginUser").value;
  const pass = document.getElementById("loginPass").value;

  if (user === "" || pass === "") {
    alert("Fill all fields!");
    return;
  }

  localStorage.setItem("loggedUser", user);
  document.getElementById("user-text").textContent = "Hi " + user + "!";
  loginPopup.style.display = "none";
  alert("Login Successful!");
});

// USER CLICK
userIcon.addEventListener("click", () => {
  const logged = localStorage.getItem("loggedUser");
  if (logged) {
    userPopup.style.display = "flex";
  } else {
    loginPopup.style.display = "flex";
  }
});

// LOGOUT
document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("loggedUser");
  document.getElementById("user-text").textContent = "Hi User!";
  userPopup.style.display = "none";
  alert("Logged out!");
});

// CLOSE POPUPS
closeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    userPopup.style.display = "none";
    cartPopup.style.display = "none";
    loginPopup.style.display = "none";
  });
});

// OUTSIDE CLICK
window.addEventListener("click", (e) => {
  if (e.target === userPopup) userPopup.style.display = "none";
  if (e.target === cartPopup) cartPopup.style.display = "none";
  if (e.target === loginPopup) loginPopup.style.display = "none";
});

// CART BUTTON
cartIcon.addEventListener("click", () => {
  cartPopup.style.display = "flex";
});

// QUANTITY BUTTONS
const plusBtns = document.querySelectorAll(".plus");
const minusBtns = document.querySelectorAll(".minus");

plusBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    let numberSpan = btn.parentElement.querySelector(".qty-number");
    numberSpan.textContent = parseInt(numberSpan.textContent) + 1;
  });
});

minusBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    let numberSpan = btn.parentElement.querySelector(".qty-number");
    let n = parseInt(numberSpan.textContent);
    if (n > 1) numberSpan.textContent = n - 1;
  });
});
