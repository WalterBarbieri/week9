"use strict";
const playButton = document.getElementById('playButton');
const numeroEstratto = document.getElementById('numeroEstratto');
const result = document.getElementById('result');
function lotto(player1, player2) {
    let randomNumber = Math.floor(Math.random() * (10 - 1) + 1);
    numeroEstratto.innerHTML = 'Numero Estratto: ' + randomNumber;
    if (player1 === player2 && player1 === randomNumber) {
        return result.innerHTML = 'Complimenti! Entrambi i giocatori hanno vinto!';
    }
    else if (randomNumber === player2) {
        return result.innerHTML = 'Il giocatore 2 ha vinto il lotto!';
    }
    else if (randomNumber === player1) {
        return result.innerHTML = 'Il giocatore 1 ha vinto il lotto!';
    }
    else if (player1 === player2 && player1 != randomNumber) {
        return result.innerHTML = 'Nessuno dei due giocatori ha vinto il lotto, entrambi i giocatori hanno puntato sullo stesso numero';
    }
    else if (Math.abs(randomNumber - player1) < Math.abs(randomNumber - player2)) {
        return result.innerHTML = 'Nessuno dei due giocatori ha vinto il lotto, ma il giocatore 1 si è avvicinato di più';
    }
    else if (Math.abs(randomNumber - player1) > Math.abs(randomNumber - player2)) {
        return result.innerHTML = 'Nessuno dei due giocatori ha vinto il lotto, ma il giocatore 2 si è avvicinato di più';
    }
}
playButton.onclick = function () {
    const player1 = document.getElementById('player1').value;
    const player2 = document.getElementById('player2').value;
    lotto(Number(player1), Number(player2));
};
