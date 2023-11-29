if (localStorage.getItem('logou') !== 1) {
    location.href = "./html/login.html";
}

const iconMenuEl = document.querySelector('.icon-menu');
const menuEl = document.querySelector('.menu');

iconMenuEl.addEventListener('click', () => {
    menuEl.classList.toggle('ativo');
});
