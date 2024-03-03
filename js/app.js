import {
  checkLogIn,
  showToast,
  generateOperationCode,
  getActualDate,
  getActualHour,
} from "./utils.js";
checkLogIn();

const appForm = document.querySelector(".app__form");
const inputBank = document.querySelector("#bank");
const inputs = appForm.querySelectorAll("input");

appForm.addEventListener("submit", (e) => {
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
  localStorage.setItem("payment", JSON.stringify(payment));
  window.location.href = "./comprobante.html";
});
