let notification = document.getElementById("notification");
let sec1 = document.getElementById("sec1");
let sec2 = document.getElementById("sec2");
let sec3 = document.getElementById("sec3");
let back = document.getElementById("back");
let back3 = document.getElementById("back-sec3");
let skills = document.getElementById("skills");
let audio = new Audio("/sounds/click.wav");
let audio2 = new Audio("/sounds/Message.mp3");
let root = document.getElementById("root");
let footer = document.getElementById("footer");
let modeBtn = document.getElementById("mode");
let cancel = document.getElementById("cancel");

cancel.addEventListener("click", () => {
  notification.className = "animate__animated animate__fadeOutRight";

  setTimeout(() => {
    notification.style.display = "none";
  }, 2800);
});

notification.addEventListener("click", () => {

if (cancel.click == true) {
  event.preventDefault();

}

else{
  window.open("https://github.com/Baraasher");

}


});

modeBtn.onchange = (e) => {
  if (modeBtn.checked === true) {
    audio.play();

    document.querySelector("body").classList.toggle("lightmode");
  } else {
    audio.play();

    document.querySelector("body").className = "dark";
  }
};

const mode = window.localStorage.getItem("mode");
if (mode == "dark") {
  modeBtn.checked = true;
  document.querySelector("body").classList.toggle("lightmode");
}

if (mode == "light") {
  modeBtn.checked = false;
  document.querySelector("body").className = "dark";
}

skills.addEventListener("click", function () {
  sec1.style.display = "none";
  sec2.style.display = "none";
  sec3.style.display = "flex";

  audio.play();
});
setTimeout(() => {
  document.getElementById("onstartlogo").classList.toggle("zoominlogo");
  root.style.display = "none";
  footer.style.display = "none";

  document.getElementById("switch").style.display = "none";
  notification.style.display = "none";
}, 1800);

setTimeout(() => {
  document.getElementById("onstart").style.display = "none";
  root.style.display = "flex";
  footer.style.display = "flex";
  document.getElementById("switch").style.display = "inline-block";
}, 4800);

setTimeout(() => {
  notification.style.display = "flex";
  audio2.play();
}, 10800);

back.addEventListener("click", function () {
  sec1.style.display = "flex";
  sec2.style.display = "none";
  sec3.style.display = "none";
  footer.style.display = "flex";

  audio.play();
});

back3.addEventListener("click", function () {
  sec1.style.display = "flex";
  sec2.style.display = "none";
  sec3.style.display = "none";
  footer.style.display = "flex";

  audio.play();
});
