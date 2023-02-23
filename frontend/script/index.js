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


/*you should write (type="module") in script in index.html page*/
/*^^^^^^^^^ copy the above code for navbar ^^^^^^^^^^*/
/*^^^^^^^^^ copy the above code for navbar ^^^^^^^^^^*/
/*^^^^^^^^^ copy the above code for navbar ^^^^^^^^^^*/


/*text changing*/

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["developer", "game developer", "mobile developer", "system admin", "data scientist"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});