let signupButton = document.getElementById("signup");
let loginButton = document.getElementById("login");
let signupForm = document.getElementById("signup-form");
let loginForm = document.getElementById("login-form");


//yea it's pretty redundant
signupButton.addEventListener("click", function() {
  signupButton.className += " active";
  loginButton.className -= " active";
  signupForm.style.display = "block";
  loginForm.style.display = "none";
});

loginButton.addEventListener("click", function() {
  loginButton.className += " active";
  signupButton.className -= " active";
  loginForm.style.display = "block";
  signupForm.style.display = "none";
});