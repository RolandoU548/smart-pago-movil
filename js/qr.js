const banks = [
  "BBVA Provincial",
  "Bancamiga",
  "Bancaribe",
  "Banco de Venezuela",
  "Banesco",
  "Banco Caroní",
  "Banco del Tesoro",
  "Banco Exterior",
  "Banco Mercantil",
  "Banplus",
  "Banco Bicentenario del Pueblo",
  "Banco Fondo Común",
  "100%Banco",
  "Banco Activo",
  "Banco Agrícola de Venezuela",
  "Banco Nacional de Crédito",
  "Banco Plaza",
  "Banco Sofitasa",
  "Banco Venezolano de Crédito",
  "Bancrecer",
  "BANFANB",
  "Bangente",
  "Del Sur",
  "Mi Banco",
];
const numbers = ["0412", "0424", "0426", "0414", "0416"];

const bank = banks[Math.floor(Math.random() * banks.length)];
const cedula = Math.floor(Math.random() * 31999999) + 1;
const phone =
  numbers[Math.floor(Math.random() * numbers.length)] +
  "-" +
  (Math.floor(Math.random() * 9000000) + 1000000);
const today = new Date(Date.now());
const date = `${today.getDate()}/${
  today.getMonth() + 1
}/${today.getFullYear()}`;
let hours = today.getHours();
const ampm = hours >= 12 ? "PM" : "AM";
hours = hours > 12 ? hours - 12 : hours;
hours = hours == 0 ? 12 : hours;
const hour = `${hours}:${String(today.getMinutes()).padStart(2, "0")}${ampm}`;
let code = "0";
for (let i = 1; i < 12; i++) {
  code += String(Math.floor(Math.random() * 8) + 1);
}

const payment = {
  bank,
  cedula,
  phone,
  hour,
  code,
  date,
};

localStorage.setItem("payment", JSON.stringify(payment));

setTimeout(() => {
  window.location.href = "./comprobante.html";
}, 4000);
