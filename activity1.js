var pontos = 0

function pontuacao() {
    pontos = pontos + 1;
    document.getElementById("click").innerHTML = pontos;
}

function salvar() {
    localStorage.setItem("ponto", pontos);
}

function novaTela() {
    window.location("Atividade-2.html");
}