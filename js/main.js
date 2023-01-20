// let projectsBtn = document.getElementById ('projects');
let sec1 = document.getElementById ('sec1');
let sec2 = document.getElementById ('sec2');
let sec3 = document.getElementById ('sec3');
let back = document.getElementById ('back');
let back3 = document.getElementById ('back-sec3');
let skills = document.getElementById ('skills');
let audio = new Audio ('/sounds/click.wav');
let root = document.getElementById('root');
let footer = document.getElementById('footer');

// projectsBtn.addEventListener ('click', function () {
//   sec1.style.display = 'none';
//   sec2.style.display = 'flex';
//   sec3.style.display = 'none';
//   audio.play ();
//   footer.style.display="none";

// });

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
