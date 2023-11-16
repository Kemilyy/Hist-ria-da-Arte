const btn = document.querySelector('.modalbtn');
const modal = document.querySelector('.modal');

const switchModal = () => {
    const modal = document.querySelector('.modal');
    const actualStyle = modal.style.display;

    if (actualStyle == 'block') {
        modal.style.display = 'none';
    }
    else {
        modal.style.display = 'block';
    }
}

btn.addEventListener('click', switchModal);

window.onclick = function (event) {
    if (event.target == modal) {
        switchModal();
    }
}