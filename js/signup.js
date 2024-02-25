import { findUser, logIn, showToast } from "./utils.js";

let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");
let form = document.querySelector(".signup__form");

const createUser = (email, password) => {
  let user = {
    email: email,
    password: password,
  };
  localStorage.setItem(email, JSON.stringify(user));
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = inputEmail.value;
  let password = inputPassword.value;
  //faltan validaciones
  let emailRegex =
    /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,4}$/;
  if (!emailRegex.test(email)) {
    alert("Email Inválido");
  }
  if (findUser(email)) {
    showToast("Usuario Ya Existe", "error");
  }
  if (password.length < 6) {
    alert("La contraseña debe tener por lo menos 6 dígitos");
  }
  if (emailRegex.test(email) && !findUser(email) && password.length >= 6) {
    form.reset();
    createUser(email, password);
    logIn();
  }
});
