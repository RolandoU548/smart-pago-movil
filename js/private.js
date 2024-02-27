import { logOut, showToast, checkLogIn, getActualUser } from "./utils.js";
checkLogIn();
if (localStorage.getItem("loggedFirstTime") == "true") {
  showToast("Sesión Iniciada", "check");
  localStorage.setItem("loggedFirstTime", "false");
}
let logout__button = document.querySelector(".logout__button");
logout__button.addEventListener("click", logOut);

const user = getActualUser();
console.log(user.amount);

const divEmail = document.querySelector(".div__email");
const divAmount = document.querySelector(".div__amount");

divEmail.innerHTML = "USUARIO: " + user.email;
divAmount.innerHTML = "SALDO: " + user.amount;
