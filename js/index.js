if (localStorage.getItem("loggedOut") == "true") {
  showToast("Sesión Cerrada", "check");
  localStorage.removeItem("loggedOut");
}

const landing_page_header = document.querySelector(".landing_page_header");
const toggle_button_navbar = document.querySelector(".toggle_button_navbar");
const toggle_button = document.querySelector(".toggle_button");
const toggle_layer = document.querySelector(".toggle_layer");

const toggleNavbar = () => {
  landing_page_header.classList.toggle("landing_page_header-show");
  toggle_layer.classList.toggle("toggle_layer-show");
};
toggle_button_navbar.addEventListener("click", toggleNavbar);
toggle_button.addEventListener("click", toggleNavbar);
toggle_layer.addEventListener("click", toggleNavbar);
