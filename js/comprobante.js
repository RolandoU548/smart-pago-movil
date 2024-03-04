import { getHeaderData, showNewAmount } from "./utils.js";

getHeaderData();
const back__button = document.querySelector(".back__button");
back__button.addEventListener("click", () => {
  window.location.href = "./app.html";
});

const payment = JSON.parse(localStorage.getItem("payment"));
const { code, date, hour, cedula, bank, phone, amount, paymentReason } =
  payment;

const codeValue = document.querySelector("#operation-code");
codeValue.innerHTML = code;

const copyButton = document.createElement("button");
copyButton.innerHTML = "<i class='fa-regular fa-clipboard'></i>";
copyButton.style.background = "transparent";
copyButton.style.border = "none";
copyButton.style.color = "white";
copyButton.style.cursor = "pointer";
copyButton.addEventListener("click", () => {
  navigator.clipboard.writeText(code);
  copyButton.innerHTML = "<i class='fa-solid fa-check'></i>";
});
codeValue.appendChild(copyButton);

const dateValue = document.querySelector("#date");
dateValue.innerHTML = date;

const hourValue = document.querySelector("#hour");
hourValue.innerHTML = hour;

const cedulaValue = document.querySelector("#cedula");
cedulaValue.innerHTML = cedula;

const bankValue = document.querySelector("#bank");
bankValue.innerHTML = bank;

const phoneValue = document.querySelector("#phone");
phoneValue.innerHTML = phone;

const amountValue = document.querySelector("#amount");
amountValue.innerHTML = amount + ",00bs";

const paymentReasonValue = document.querySelector("#paymentReason");
paymentReasonValue.innerHTML = paymentReason;

showNewAmount();
