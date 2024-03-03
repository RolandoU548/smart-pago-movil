import {
  checkLogIn,
  generateOperationCode,
  getActualDate,
  getActualHour,
  generateRandomBank,
  generateRandomCedula,
  generateRandomNumber,
  makePayment,
} from "./utils.js";

checkLogIn();

const bank = generateRandomBank();
const cedula = generateRandomCedula();
const phone = generateRandomNumber();
const date = getActualDate();
const hour = getActualHour();
const code = generateOperationCode();

const qrForm = document.querySelector(".qr__form");
const inputs = qrForm.querySelectorAll("input");

qrForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const amount = inputs[0].value;
  const paymentReason = inputs[1].value;
  const payment = {
    code,
    date,
    hour,
    cedula,
    bank,
    phone,
    amount,
    paymentReason,
  };
  makePayment(payment);
});
