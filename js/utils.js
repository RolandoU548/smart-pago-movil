const showToast = (texto, iconP = "") => {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  let icon = "";
  if (iconP == "check") {
    icon = '<i class="fa-solid fa-circle-check"></i>';
    toast.classList.add("check");
  } else if (iconP == "error") {
    icon = '<i class="fa-solid fa-circle-xmark"></i>';
    toast.classList.add("error");
  } else if (iconP == "warn") {
    icon = '<i class="fa-solid fa-circle-exclamation"></i>';
    toast.classList.add("warn");
  }
  toast.innerHTML = icon + " " + texto;
  let toastBox = document.querySelector("#toastBox");
  if (!toastBox) {
    const body = document.getElementsByTagName("body")[0];
    toastBox = document.createElement("div");
    toastBox.id = "toastBox";
    body.appendChild(toastBox);
  }
  toastBox.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 4000);
};

const findUser = (email) => {
  let key;
  for (let i = 0; i < localStorage.length; i++) {
    key = localStorage.key(i);
    if (key == email) {
      return JSON.parse(localStorage.getItem(key));
    }
  }
  return false;
};

const checkLogIn = () => {
  if (!(localStorage.getItem("logged") == "true")) {
    window.location.href = "../index.html";
  }
};

const createUser = (email, password, amount = 500) => {
  const user = {
    email,
    password,
    amount,
  };
  localStorage.setItem(email, JSON.stringify(user));
};

const logIn = (email) => {
  localStorage.setItem("logged", "true");
  localStorage.setItem("loggedFirstTime", "true");
  localStorage.setItem("actualUser", email);
  window.location.href = "./app.html";
};

const getActualUser = () => {
  return findUser(localStorage.getItem("actualUser"));
};

const logOut = () => {
  localStorage.removeItem("logged");
  localStorage.removeItem("loggedFirstTime");
  localStorage.setItem("loggedOut", "true");
  localStorage.removeItem("actualUser");
  localStorage.removeItem("payment");
  window.location.href = "../index.html";
};

const getActualDate = () => {
  const today = new Date(Date.now());
  return `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
};

const getActualHour = () => {
  const today = new Date(Date.now());
  let hours = today.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours > 12 ? hours - 12 : hours;
  hours = hours == 0 ? 12 : hours;
  return `${hours}:${String(today.getMinutes()).padStart(2, "0")}${ampm}`;
};

const generateOperationCode = () => {
  let code = "0";
  for (let i = 1; i < 12; i++) {
    code += String(Math.floor(Math.random() * 8) + 1);
  }
  return code;
};

const generateRandomBank = () => {
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
  return banks[Math.floor(Math.random() * banks.length)];
};

const generateRandomCedula = () => {
  return Math.floor(Math.random() * 32000000) + 1;
};

const generateRandomNumber = () => {
  const numbers = ["0412", "0424", "0426", "0414", "0416"];
  return `${numbers[Math.floor(Math.random() * numbers.length)]}-${
    Math.floor(Math.random() * 9000000) + 1000000
  }`;
};

const makePayment = (payment) => {
  const user = getActualUser();
  if (payment.amount > user.amount) {
    showToast("Saldo Insuficiente", "error");
    return false;
  }
  payment.paymentReason =
    payment.paymentReason.charAt(0).toUpperCase() +
    payment.paymentReason.slice(1).toLowerCase();
  localStorage.setItem("payment", JSON.stringify(payment));
  createUser(user.email, user.password, user.amount - payment.amount);
  window.location.href = "./comprobante.html";
  return true;
};

const getHeaderData = () => {
  const user = getActualUser();
  const spanEmail = document.querySelector(".span__email");
  const spanAmount = document.querySelector(".span__amount");

  spanEmail.innerHTML = user.email;
  spanAmount.innerHTML = `${user.amount}bs`;
};

const showNewAmount = () => {
  showToast(`Saldo Restante: ${getActualUser().amount}bs`, "check");
};
