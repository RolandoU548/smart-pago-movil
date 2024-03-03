import {
  checkLogIn,
  generateOperationCode,
  getActualDate,
  getActualHour,
  generateRandomBank,
  generateRandomCedula,
  generateRandomNumber,
  makePayment,
  getHeaderData,
  showToast,
} from "./utils.js";

checkLogIn();
getHeaderData();
const back__button = document.querySelector(".back__button");
back__button.addEventListener("click", () => {
  window.location.href = "./app.html";
});

const amountRegex = /^\d+$/;
const paymentReasonRegex = /^[A-Za-z]/;

const qrForm = document.querySelector(".qr__form");
const inputs = qrForm.querySelectorAll("input");

qrForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!amountRegex.test(inputs[0].value) || inputs[0].value < 1) {
    showToast("Monto Inválido", "error");
    return false;
  }
  if (inputs[0].value > 1000000) {
    showToast("El monto máximo es de un millón", "error");
    return false;
  }
  if (!paymentReasonRegex.test(inputs[1].value)) {
    showToast("Motivo Inválido", "error");
    return false;
  }
  const payment = {
    code: generateOperationCode(),
    date: getActualDate(),
    hour: getActualHour(),
    cedula: generateRandomCedula(),
    bank: generateRandomBank(),
    phone: generateRandomNumber(),
    amount: inputs[0].value,
    paymentReason: inputs[1].value,
  };
  makePayment(payment);
});
