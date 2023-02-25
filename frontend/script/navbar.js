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




const searching = document.querySelector('#searching');

searching.addEventListener('click', async function (event) {

  let ques = document.getElementById("ques").value
  console.log(ques)
  document.getElementById("ques").value = ""

  let data = await fetch(`http://localhost:8000/questions/search/${ques}`);
  let res = await data.json();
  console.log(res)

  Maindiv.innerHTML = ""
  renderData(res);

});




function ifUser() {
  let parentName = document.getElementById("user-info")
  let name = document.getElementById("user-name");
  let userName = localStorage.getItem("username");
  let loginbtn = document.getElementById("in_login");
  let signupbtn = document.getElementById("in_signup");
  if(userName){
    name.innerText = userName.split(" ").slice(0, 1);
    loginbtn.innerText = "Log out"
    signupbtn.style.display = "none"
    if(loginbtn.innerText== "Log out"){
      loginbtn.addEventListener("click",()=>{
        localStorage.clear("username")        
      })
    }
  }else{
    parentName.innerHTML=""
  }
}
ifUser()

