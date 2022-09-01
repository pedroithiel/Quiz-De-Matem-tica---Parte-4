var player1Name = localStorage.getItem("jogador1");
var valorLocalPlayer2 = localStorage.getItem("jogador2");
var pontuacao1 = 0;
var pontuacao2 = 0;
document.getElementById("pontuacao").innerHTML = pontuacao1;
document.getElementById("pontuacao2").innerHTML = pontuacao2;

document.getElementById("player1Name").innerHTML = player1Name;
document.getElementById("player2Name").innerHTML = valorLocalPlayer2;

document.getElementById("player1Name").innerHTML = player1Name;

document.getElementById("TurnoPergunta").innerHTML = "Turno de Pergunta - " + player1Name;
document.getElementById("TurnoResposta").innerHTML = "Turno de Resposta - " + valorLocalPlayer2;

var perguntaTurn = player1Name;
var resposTurn = valorLocalPlayer2;

var palavra1;

function enviar() {

    palavra1 = document.getElementById("secreto").value;
    palavra2 = palavra1.toLowerCase();

    charInicio = palavra2.charAt(1)

    indice = Math.floor(palavra2.length / 2);
    charMeio = palavra2.charAt(indice);
    charFim = palavra2.charAt(palavra2.length - 1);
    
    // alert(charInicio);
    // alert(charMeio);
    // alert(charFim);
    
    removeCharInicio = palavra2.replace(charInicio, " _ ");
    removeCharMeio = removeCharInicio.replace(charMeio, " _ ");
    removeCharFim = removeCharMeio.replace(charFim, " _ ");
    console.log(removeCharFim);

    var palavra = "<h4 id = 'pergunta'> P. " + removeCharFim + "</h4>";
    var inputBox = "<br>Resposta : <input type = 'text' id = 'inputCheck'>";
    var button = "<br> <br> <button onclick = 'check()'> Checar </buttom>";

    var linha = palavra + inputBox + button;

    document.getElementById("output").innerHTML = linha;
    document.getElementById("secreto").value = "";
}

function check() {
    //var valorTexto = document.getElementById("inputCheck").value;
    var resposta = document.getElementById("inputCheck").value.toLowerCase();

    if (palavra1 == resposta ) {

        if(perguntaTurn == "jogador1") {
            pontuacao1++;
            document.getElementById("pontuacao").innerHTML = pontuacao1;
        } else {
            pontuacao2++;
            document.getElementById("pontuacao2").innerHTML = pontuacao2;
        }
    }

    if(perguntaTurn == "jogador1"){

        perguntaTurn = "jogador2";
        document.getElementById("TurnoPergunta").innerHTML = "Turno de Pergunta - " + valorLocalPlayer2;
        document.getElementById("TurnoResposta").innerHTML = "Turno de Resposta - " + player1Name;
    } else {

        perguntaTurn = "jogador1";
        document.getElementById("TurnoPergunta").innerHTML = "Turno de Pergunta - " + player1Name;
        document.getElementById("TurnoResposta").innerHTML = "Turno de Resposta - " + valorLocalPlayer2;
    }

    if(resposTurn == "jogador1") {

        resposTurn = "jogador2";
        document.getElementById("TurnoResposta").innerHTML = "Turno de Resposta - " + valorLocalPlayer2;
        document.getElementById("TurnoPergunta").innerHTML = "Turno de Pergunta - " + player1Name;
    } else {

        resposTurn = "jogador1";
        document.getElementById("TurnoResposta").innerHTML = "Turno de Resposta - " + player1Name;
        document.getElementById("TurnoPergunta").innerHTML = "Turno de Pergunta - " + valorLocalPlayer2;
    }
    document.getElementById("inputCheck").value = "";
}