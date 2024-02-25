import { findUser, logIn, showToast } from "./utils.js";

let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");
let form = document.querySelector(".login__form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = inputEmail.value;
  let password = inputPassword.value;
  //faltan validaciones
  let user = findUser(email);
  if (user) {
    if (password.length >= 6) {
      if (user.password == password) {
        form.reset();
        logIn();
      } else {
        showToast("Contraseña Incorrecta", "error");
      }
    }
  } else {
    showToast("Usuario No Existe", "error");
  }
  if (password.length < 6) {
    showToast("La contraseña debe tener al menos 6 dígitos", "error");
  }
});
