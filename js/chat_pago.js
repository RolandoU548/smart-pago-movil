const usuario = { nombre: "juan", apellido: "beli" };
usuario.nombre;

const keyboardForm = document.querySelector(".keyboard__form");
const keyboard = document.querySelector(".keyboard");
const messageContainer = document.querySelector(".message__container");
const chat = document.querySelector(".chat");

const sendMessage = (message) => {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message");
  messageDiv.classList.add("outcoming");
  messageDiv.innerHTML = message;
  messageContainer.appendChild(messageDiv);
  chat.scrollTop = chat.scrollHeight;
};

const receiveMessage = (message) => {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message");
  messageDiv.classList.add("incoming");
  messageDiv.innerHTML = message;
  messageContainer.appendChild(messageDiv);
  chat.scrollTop = chat.scrollHeight;
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (keyboard.value == "") {
    return false;
  }
  sendMessage(keyboard.value);
  receiveMessage("OK");
  keyboard.value = "";
};

keyboardForm.addEventListener("submit", handleSubmit);
