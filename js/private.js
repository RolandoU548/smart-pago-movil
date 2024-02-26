import { logOut, showToast, checkLogIn } from "./utils.js";
checkLogIn();
if (localStorage.getItem("loggedFirstTime") == "true") {
  showToast("Sesión Iniciada", "check");
  localStorage.setItem("loggedFirstTime", "false");
}
let logout__button = document.querySelector(".logout__button");
logout__button.addEventListener("click", logOut);
