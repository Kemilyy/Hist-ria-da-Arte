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


function validarLogin() {
    // Verifique se os campos de email e senha estão preenchidos.
    const email = document.getElementById("email").value;
    const senha = document.getElementById("email").value;
  
    if (email === "" || senha === "") {
      alert("Preencha todos os campos.");
      return false;
    }
  
    // Verifique se o email é válido.
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regexEmail.test(email)) {
      alert("O email é inválido.");
      return false;
    }
  
    // Verifique se a senha é válida.
    const regexSenha = /^(*[0-9])$/;
    if (!regexSenha.test(senha)) {
      alert("A senha deve ter pelo menos 8 caracteres, incluindo números, letras maiúsculas e minúsculas.");
      return false;
    }
  
    window.location.href = "./index.html"
    return true;
  }
  