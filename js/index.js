let landing_page_header = document.querySelector(".landing_page_header");
let toggle_button_navbar = document.querySelector(".toggle_button_navbar");
let toggle_button = document.querySelector(".toggle_button");
let toggle_layer = document.querySelector(".toggle_layer");

const toggleNavbar = () => {
  landing_page_header.classList.toggle("landing_page_header-show");
  toggle_layer.classList.toggle("toggle_layer-show");
  console.log("fino");
};
toggle_button_navbar.addEventListener("click", toggleNavbar);
toggle_button.addEventListener("click", toggleNavbar);
toggle_layer.addEventListener("click", toggleNavbar);
