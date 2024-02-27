import { findUser, createUser, logIn, showToast } from "./utils.js";

let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");
let form = document.querySelector(".signup__form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = inputEmail.value;
  let password = inputPassword.value;
  let emailRegex =
    /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,4}$/;
  if (!emailRegex.test(email)) {
    showToast("Email Inválido", "error");
  }
  if (findUser(email)) {
    showToast("Usuario Ya Existe", "error");
  }
  if (password.length < 6) {
    showToast("La contraseña debe tener al menos 6 dígitos", "error");
  }
  if (emailRegex.test(email) && !findUser(email) && password.length >= 6) {
    form.reset();
    createUser(email, password);
    logIn(email);
  }
});
