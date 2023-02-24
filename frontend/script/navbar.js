/*NavBar import*/
import { navbar, footer } from "../components/nav.js";

let navbarContainer = document.getElementById("NAVBAR");
navbarContainer.innerHTML = navbar();

let footercontainer = document.getElementById("FOOTER");
footercontainer.innerHTML = footer();

/*Hamburger Menu */
var hamburger_menu = document.querySelector(".hamburger");
var button = hamburger_menu.querySelector(".hamburger-menu");
button.addEventListener("click", (event) => {
  hamburger_menu.classList.toggle("open");
});

/* Nav Search Hints */
var nav_search = document.querySelector(".navbar-search");
var search = nav_search.querySelector(".searchbox");
var search_hint = nav_search.querySelector(".searchbox-hints");
var search_btn = document.querySelector(".search-btn");
var search_input = search.querySelector("input");

search.addEventListener("click", () => {
  search_hint.classList.add("open");
});

window.addEventListener("click", function (e) {
  if (!(nav_search.contains(e.target) || search_btn.contains(e.target))) {
    search_hint.classList.remove("open");
  }
});

search_btn.addEventListener("click", () => {
  if (!nav_search.classList.contains("open")) {
    search_hint.classList.remove("open");
  }
  nav_search.classList.toggle("open");
  search_input.focus();
  setTimeout(() => {
    search_hint.classList.toggle("open");
  }, 50);
});