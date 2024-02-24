if (!(localStorage.getItem("logged") == "true")) {
  window.location.href = "../index.html";
}

const cerrarSesion = () => {
  localStorage.setItem("logged", "false");
  console.log("sesion cerrada");
  window.location.href = "../index.html";
};

logout__button = document.querySelector(".logout__button");
logout__button.addEventListener("click", cerrarSesion);
