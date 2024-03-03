import {
  checkLogIn,
  showToast,
  generateOperationCode,
  getActualDate,
  getActualHour,
  makePayment,
} from "./utils.js";
checkLogIn();

const manualForm = document.querySelector(".manual__form");
const inputBank = document.querySelector("#bank");
const inputs = manualForm.querySelectorAll("input");

manualForm.addEventListener("submit", (e) => {
  console.log(inputBank.value);
  e.preventDefault();
  if (inputBank.value == "Seleccione una opción") {
    showToast("Seleccione Banco", "error");
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
