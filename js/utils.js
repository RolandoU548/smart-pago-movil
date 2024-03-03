export const showToast = (texto, iconP = "") => {
  let toast = document.createElement("div");
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
    let body = document.getElementsByTagName("body")[0];
    toastBox = document.createElement("div");
    toastBox.id = "toastBox";
    body.appendChild(toastBox);
  }
  toastBox.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 4000);
};

export const findUser = (email) => {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key == email) return JSON.parse(localStorage.getItem(key));
  }
  return false;
};

export const checkLogIn = () => {
  if (!(localStorage.getItem("logged") == "true")) {
    window.location.href = "../index.html";
  }
};

export const createUser = (email, password) => {
  let user = {
    email,
    password,
    amount: 500,
  };
  localStorage.setItem(email, JSON.stringify(user));
};

export const logIn = (email) => {
  localStorage.setItem("logged", "true");
  localStorage.setItem("loggedFirstTime", "true");
  localStorage.setItem("actualUser", email);
  window.location.href = "./private.html";
};

export const getActualUser = () => {
  return findUser(localStorage.getItem("actualUser"));
};

export const logOut = () => {
  localStorage.removeItem("logged");
  localStorage.removeItem("loggedFirstTime");
  localStorage.setItem("loggedOut", "true");
  localStorage.removeItem("actualUser");
  localStorage.removeItem("payment");
  window.location.href = "../index.html";
};

export const getActualDate = () => {
  const today = new Date(Date.now());
  return `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
};

export const getActualHour = () => {
  const today = new Date(Date.now());
  let hours = today.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours > 12 ? hours - 12 : hours;
  hours = hours == 0 ? 12 : hours;
  return `${hours}:${String(today.getMinutes()).padStart(2, "0")}${ampm}`;
};

export const generateOperationCode = () => {
  let code = "0";
  for (let i = 1; i < 12; i++) {
    code += String(Math.floor(Math.random() * 8) + 1);
  }
  return code;
};
