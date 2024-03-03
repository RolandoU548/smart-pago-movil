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

manualForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputBank.value == "Seleccione una opción") {
    showToast("Seleccione Banco", "error");
    return false;
  }
  if (inputs[0].value) {
    console.log("hola");
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
