export const showToast = (texto) => {
  let toastBox = document.querySelector("#toastBox");
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = texto;
  toastBox.appendChild(toast);
};
