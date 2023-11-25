(() => {
    const formEl = document.querySelector("form");
    const inputEmailEl = document.querySelector("#input-email");
    const inputSenhaEl = document.querySelector("#input-senha");
    const msgErroEl = document.querySelector("#msg-erro");

    formEl.addEventListener("submit", (e) => {
        e.preventDefault();

        let email = inputEmailEl.value;
        let senha = inputSenhaEl.value;

        let testeEmail = email === localStorage.getItem("email");
        let testeSenha = senha === localStorage.getItem("senha");
        let teste = testeEmail && testeSenha;

        if (teste) {
            window.location.href = "../index.html";
        } else {
            msgErroEl.style.display = "block";
        }
    });
})();
