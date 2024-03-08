const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const form = document.querySelector(".signup__form");

const emailRegex =
  /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,4}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = inputEmail.value;
  const password = inputPassword.value;
  if (!emailRegex.test(email)) {
    showToast("Email Inválido", "error");
    return false;
  }
  if (findUser(email)) {
    showToast("Usuario Ya Existe", "error");
    return false;
  }
  if (password.length < 6) {
    showToast("La contraseña debe tener al menos 6 dígitos", "error");
    return false;
  }
  form.reset();
  createUser(email, password);
  logIn(email);
});
