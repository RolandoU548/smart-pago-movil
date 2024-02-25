export const showToast = (texto, iconP = "") => {
  let toastBox = document.querySelector("#toastBox");
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
  toast.setAttribute("data-content", "10s");
  setTimeout(() => {
    toast.remove();
  }, 4000);
};
