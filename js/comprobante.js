const payment = JSON.parse(localStorage.getItem("payment"));
const { bank, cedula, phone, hour, code, date } = payment;

const dateValue = document.querySelector("#date");
dateValue.innerHTML = date;

const hourValue = document.querySelector("#hour");
hourValue.innerHTML = hour;

const codeValue = document.querySelector("#operation-code");
codeValue.innerHTML = code;
