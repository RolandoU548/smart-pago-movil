import { logOut, showToast } from "./utils.js";

if (!(localStorage.getItem("logged") == "true")) {
  window.location.href = "../index.html";
}

let logout__button = document.querySelector(".logout__button");
logout__button.addEventListener("click", logOut);

showToast("Sesión Iniciada", "check");
