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

//this is for password validation
var email = document.getElementById("signup-email");
var emailInputField = document.getElementById("signup-email-input-field");

email.addEventListener("input", function() {

  let emailStr = email.value;
  console.log("emailStr = " + emailStr);
  let re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if(!re.test(emailStr)) {
    console.log("ReExp FAIL");
    email.focus;
    return false;
  }
  else {
    console.log("ReExp OK");
    emailInputField.className += " input-valid";
    return true;
  }
  

})



