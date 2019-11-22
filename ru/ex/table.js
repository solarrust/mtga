let clicker = document.querySelector('[data-width]');
let wrapper = document.querySelector('.wrapper');
let smallClass = '_small';

clicker.onclick = () => {
 wrapper.classList.toggle(smallClass);
};