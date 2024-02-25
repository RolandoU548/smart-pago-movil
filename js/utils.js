export const showToast = (texto, iconP = "") => {
  let body = document.getElementsByTagName("body")[0];
  let toastBox = document.createElement("div");
  toastBox.id = "toastBox";
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
  toastBox.appendChild(toast);
  body.appendChild(toastBox);
  toast.setAttribute("data-content", "10s");
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

export const logIn = () => {
  localStorage.setItem("logged", "true");
  window.location.href = "./private.html";
};

export const logOut = () => {
  localStorage.setItem("logged", "false");
  window.location.href = "../index.html";
};
