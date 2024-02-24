let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");
let form = document.querySelector(".signup__form");

const crearUsuario = (email, password) => {
  let usuario = {
    id: localStorage.length + 1,
    email: email,
    password: password,
  };
  localStorage.setItem(
    "usuario" + (localStorage.length + 1),
    JSON.stringify(usuario)
  );
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = inputEmail.value;
  let password = inputPassword.value;
  //faltan validaciones
  let emailRegex =
    /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,4}$/;
  crearUsuario(email, password);
  form.reset();
});
