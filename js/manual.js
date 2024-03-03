import {
  checkLogIn,
  showToast,
  generateOperationCode,
  getActualDate,
  getActualHour,
  makePayment,
  getHeaderData,
} from "./utils.js";
checkLogIn();
getHeaderData();

const back__button = document.querySelector(".back__button");
back__button.addEventListener("click", () => {
  window.location.href = "./app.html";
});

const manualForm = document.querySelector(".manual__form");
const inputBank = document.querySelector("#bank");
const inputs = manualForm.querySelectorAll("input");

const phoneRegex = /^04(12|14|16|24|26)\d{7}$/;
const cedulaRegex = /^\d+$/;
const amountRegex = /^\d+$/;
const paymentReasonRegex = /^[A-Za-z]/;

manualForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputBank.value == "Seleccione una opción") {
    showToast("Seleccione Banco", "error");
    return false;
  }
  if (!phoneRegex.test(inputs[0].value)) {
    showToast("Teléfono Inválido", "error");
    return false;
  }
  if (
    !cedulaRegex.test(inputs[1].value) ||
    inputs[1].value < 1 ||
    inputs[1].value > 32000000
  ) {
    showToast("Cédula Inválida", "error");
    return false;
  }
  if (!amountRegex.test(inputs[2].value) || inputs[2].value < 1) {
    showToast("Monto Inválido", "error");
    return false;
  }
  if (inputs[2].value > 1000000) {
    showToast("El monto máximo es de un millón", "error");
    return false;
  }
  if (!paymentReasonRegex.test(inputs[3].value)) {
    showToast("Motivo Inválido", "error");
    return false;
  }
  const payment = {
    code: generateOperationCode(),
    date: getActualDate(),
    hour: getActualHour(),
    bank: inputBank.value,
    phone: inputs[0].value,
    cedula: inputs[1].value,
    amount: inputs[2].value,
    paymentReason: inputs[3].value,
  };
  makePayment(payment);
});
