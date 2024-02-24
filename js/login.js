const encontrarUsuario = (email) => {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = JSON.parse(localStorage.getItem(key));
    if (value.email == email) return value;
  }
  return false;
};

console.log(encontrarUsuario("rolandou548@gmail.com"));

let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");
let form = document.querySelector(".login__form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = inputEmail.value;
  let password = inputPassword.value;
  //faltan validaciones
  encontrarUsuario(email, password);
  localStorage.setItem("logged", "true");
  window.location.href = "./private.html";
  form.reset();
});
