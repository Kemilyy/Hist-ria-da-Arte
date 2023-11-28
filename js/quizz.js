function submitAnswer() {
  // Obter a resposta selecionada
  var answer = document.querySelector("input[name='question1']:checked").value;

  // Verificar a resposta
  if (answer === "b") {
    // Resposta correta
    document.querySelector(".answer").innerHTML = "Resposta correta!";
  } else {
    // Resposta incorreta
    document.querySelector(".answer").innerHTML = "Resposta incorreta. A resposta correta é obras de arte figurativas.";
  }
}

document.querySelector(".answer button").addEventListener("click", submitAnswer);

// Adicionar um evento de clique ao botão de avançar
document.querySelector(".answer .next").addEventListener("click", function() {
  // Atualizar a questão atual
  var currentQuestion = document.querySelector(".question");
  currentQuestion.style.display = "none";

  // Ativar a próxima questão
  var nextQuestion = currentQuestion.nextElementSibling;
  nextQuestion.style.display = "block";
});

var timer = 60;

function startTimer() {
  // Iniciar o temporizador
  var interval = setInterval(function() {
    // Decrementar o tempo restante
    timer--;

    // Atualizar o tempo restante na tela
    document.querySelector(".timer").innerHTML = timer;

    // Se o tempo acabar, encerrar o quizz
    if (timer <= 0) {
      clearInterval(interval);
      submitAnswer();
    }
  }, 1000);
}

// Adicionar um evento de clique ao botão de enviar
document.querySelector(".answer button").addEventListener("click", submitAnswer);

// Iniciar o temporizador quando a página carregar
window.onload = startTimer;
