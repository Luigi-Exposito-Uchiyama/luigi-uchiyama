/* Ano */
const d = new Date();
const year = d.getFullYear();
document.getElementById('ano').textContent = year;

/* botao mobile */
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Menu Aberto');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Menu Fechado');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

/* Digitação */
const titulo = document.getElementById('typing-effect');
const textoArray = titulo.textContent.split('');
titulo.textContent = '';
let index = 0;

function addLetter() {
  if (index < textoArray.length) {
    titulo.textContent += textoArray[index];
    index++;
    setTimeout(addLetter, 75);
  } else {
    setTimeout(() => {
      titulo.textContent = '';
      index = 0;
      addLetter();
    }, 5000);
  }
}
addLetter();
