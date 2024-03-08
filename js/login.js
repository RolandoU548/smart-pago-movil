const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const form = document.querySelector(".login__form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = inputEmail.value;
  const password = inputPassword.value;
  const user = findUser(email);
  if (!user) {
    showToast("Usuario No Existe", "error");
    return false;
  }
  if (password.length < 6) {
    showToast("La contraseña debe tener al menos 6 dígitos", "error");
    return false;
  }
  if (!(user.password == password)) {
    showToast("Contraseña Incorrecta", "error");
    return false;
  }
  form.reset();
  logIn(email);
});
