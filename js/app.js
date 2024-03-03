import { logOut, showToast, checkLogIn, getHeaderData } from "./utils.js";
checkLogIn();

if (localStorage.getItem("loggedFirstTime") == "true") {
  showToast("Sesión Iniciada", "check");
  localStorage.setItem("loggedFirstTime", "false");
}

const logout__button = document.querySelector(".logout__button");
logout__button.addEventListener("click", logOut);
getHeaderData();

const options = document.querySelectorAll(".option");
options[0].addEventListener("click", () => {
  window.location.href = "./manual.html";
});
options[1].addEventListener("click", () => {
  window.location.href = "./qr.html";
});
