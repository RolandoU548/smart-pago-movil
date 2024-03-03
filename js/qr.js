import { checkLogIn } from "./utils.js";
checkLogIn();

setTimeout(() => {
  window.location.href = "./qr_form.html";
}, 4000);
