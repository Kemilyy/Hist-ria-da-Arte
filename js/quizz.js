function submitAnswer() {
  // Obter a resposta selecionada
  var answer = document.querySelector("input[name='question1']:checked").value;

  // Verificar a resposta
  if (answer === "b") {
    document.querySelector(".answer").innerHTML = "Resposta correta!";
  } else {
    document.querySelector(".answer").innerHTML =
      "Resposta incorreta. A resposta correta é obras de arte figurativas. As obras de arte pré-históricas, como as pinturas de Lascaux, retratavam principalmente a vida cotidiana e a relação do homem com a natureza.";
  }
}

document
  .querySelector(".answer button")
  .addEventListener("click", submitAnswer);

document.querySelector(".answer .next").addEventListener("click", function () {
  // Atualizar a questão atual
  var currentQuestion = document.querySelector(".question");
  currentQuestion.style.display = "none";

  var nextQuestion = currentQuestion.nextElementSibling;
  nextQuestion.style.display = "block";
});

// Adicionar um evento de clique ao botão de enviar
document
  .querySelector(".answer button")
  .addEventListener("click", submitAnswer);
