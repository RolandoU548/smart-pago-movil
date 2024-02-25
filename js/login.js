import { encontrarUsuario, iniciarSesion, mostrarToast } from "./utils.js";

let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");
let form = document.querySelector(".login__form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = inputEmail.value;
  let password = inputPassword.value;
  //faltan validaciones
  let usuario = encontrarUsuario(email);
  if (usuario) {
    if (password.length >= 6) {
      if (usuario.password == password) {
        form.reset();
        iniciarSesion();
      } else {
        mostrarToast("Contraseña Incorrecta", "error");
      }
    }
  } else {
    mostrarToast("Usuario No Existe", "error");
  }
  if (password.length < 6) {
    alert("La contraseña debe tener por lo menos 6 dígitos");
  }
});
