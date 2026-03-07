const signInBtn = document.getElementById("signIn"); // The top button
const registerBtn = document.getElementById("register"); // The top button
const signInForm = document.getElementById("signInForm");
const registerForm = document.getElementById("reginsterForm");

signInForm.style.display = "none";

registerBtn.addEventListener("click", () => {
  signInForm.style.display = "none";
  signInBtn.style.background = "none";
  registerBtn.style.background = "#ff0000";
  registerForm.style.display = "block";
});

signInBtn.addEventListener("click", () => {
  registerForm.style.display = "none";
  registerBtn.style.background = "none";
  signInBtn.style.background = "red";
  signInForm.style.display = "block";
});

registerForm.querySelector("form").addEventListener("submit", (e) => {
const form = e.target;
  let name = form.querySelector("#name").value;
  let password = document.getElementById("password").value;
  let confirmPass = document.getElementById("checkPassword").value;

  if (name === "" || password === "" || confirmPass === "") {
    alert("Please fillout the required filed");
    e.preventDefault();
    return;
  }

  if (password !== confirmPass) {
    alert("Password do not match!");
    e.preventDefault();
    return;
  }

  alert("form is submitted succesfully!");
});

signInForm.querySelector("form").addEventListener("submit", (e) => {
  let name = document.getElementById("userName").value;
  let password = document.getElementById("userPassword").value;

  if (name === "" || password === "") {
    alert("Please fillout the required filed");
    e.preventDefault();
    return;
  }

  alert("Sign In succesfully!");
});
