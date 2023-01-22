
let sec1 = document.getElementById ('sec1');
let sec2 = document.getElementById ('sec2');
let sec3 = document.getElementById ('sec3');
let back = document.getElementById ('back');
let back3 = document.getElementById ('back-sec3');
let skills = document.getElementById ('skills');
let audio = new Audio ('/sounds/click.wav');
let root = document.getElementById('root');
let footer = document.getElementById('footer');
let modeBtn = document.getElementById('mode');




modeBtn.onchange = (e) => {
  if (modeBtn.checked === true) {
    audio.play ();
 
document.querySelector('body').classList.toggle("lightmode");

  } else {
  audio.play ();

    document.querySelector('body').className="dark";


  }
}

const mode = window.localStorage.getItem('mode');
if (mode == 'dark') {
  modeBtn.checked = true;
  document.querySelector('body').classList.toggle("lightmode");


}

if (mode == 'light') {
  modeBtn.checked = false;
  document.querySelector('body').className="dark";



}




skills.addEventListener ('click', function () {
  sec1.style.display = 'none';
  sec2.style.display = 'none';
  sec3.style.display = 'flex';

  audio.play ();
});
setTimeout (() => {
  document.getElementById ('onstartlogo').classList.toggle ('zoominlogo');
  root.style.display = 'none';
  footer.style.display = 'none';


}, 1800);

setTimeout (() => {
  document.getElementById ('onstart').style.display = 'none';
  root.style.display = 'flex';
  footer.style.display = 'flex';

}, 4800);





back.addEventListener ('click', function () {
  sec1.style.display = 'flex';
  sec2.style.display = 'none';
  sec3.style.display = 'none';
  footer.style.display = 'flex';

  audio.play ();
});

back3.addEventListener ('click', function () {
  sec1.style.display = 'flex';
  sec2.style.display = 'none';
  sec3.style.display = 'none';
  footer.style.display = 'flex';

  audio.play ();
});
