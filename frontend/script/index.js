window.onload = ()=>{
  document.getElementById("in_nav_icon").href = "./index.html"
  document.getElementById("in_logo").src = "./favicon/DevQuery.logo.png"
  document.getElementById("in_mini_logo").src = "./favicon/mini.logo.png"
  document.getElementById("in_quetions").href = "./html/home.html"
  document.getElementById("in_ask").href = "./html/ask.html"
  document.getElementById("id_askbtn").href = "./html/ask.html"
  document.getElementById("in_login").href = "./html/login.html"
  document.getElementById("in_signup").href = "./html/register.html"
}

/*text changing*/

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
  "developer",
  "game developer",
  "mobile developer",
  "system admin",
  "data scientist",
];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

/*Questions Section */

let questions_img = [
  "https://cdn.sstatic.net/Img/home/illo-feats-ask.svg?v=b6cd07f0765a",
  "https://cdn.sstatic.net/Img/home/illo-feats-vote.svg?v=9d2eb0efdc17",
  "https://cdn.sstatic.net/Img/home/illo-feats-answer.svg?v=b637b99bc32a",
  "https://cdn.sstatic.net/Img/home/illo-feats-tags.svg?v=0655cbe6bffa",
  "https://cdn.sstatic.net/Img/home/illo-feats-accept.svg?v=f2be4b8dfdac",
  "https://cdn.sstatic.net/Img/home/illo-feats-recognize.svg?v=4f011d7173e8",
];

var questionsBody = document.querySelector(".questions-body");
var question_items = questionsBody.querySelectorAll(".questions-body-item");
var question_content_img = questionsBody.querySelector(
  ".question-item-content-img"
);
var question_item_isSelected = false;

function resetActive() {
  question_items.forEach((item) => {
    item.classList.remove("active");
  });
}
function getDataId(item) {
  return item.getAttribute("data-id");
}
function changeImage(id) {
  question_content_img.src = questions_img[id];
}

question_items.forEach((item) => {
  item.addEventListener("click", function (event) {
    question_item_isSelected = true;
    resetActive();
    this.classList.add("active");
    changeImage(getDataId(item));
  });
});

/*Questions Animation*/
var index = 0;
firstSlider();
durationSlider();

function firstSlider() {
  changeImage(index);
  question_items[index].classList.add("active");
  index++;
}

function durationSlider() {
  setInterval(() => {
    if (!question_item_isSelected) {
      changeImage(index);
      resetActive();
      question_items[index].classList.add("active");
      index < questions_img.length - 1 ? index++ : (index = 0);
    }
  }, 3000);
}
