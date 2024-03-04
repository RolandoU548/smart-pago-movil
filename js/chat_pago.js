const usuario = { nombre: "juan", apellido: "beli" };
usuario.nombre;

const keyboardForm = document.querySelector(".keyboard__form");
const keyboard = document.querySelector(".keyboard");
const chat = document.querySelector("chat");

const handleSubmit = (e) => {
  e.preventDefault();
};

keyboardForm.addEventListener("submit", handleSubmit);
