const playButton: any = document.getElementById('playButton');
const numeroEstratto: any = document.getElementById('numeroEstratto');
const result: any = document.getElementById('result');

function lotto(player1: number, player2: number) {
    let randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
    numeroEstratto.innerHTML ='Numero Estratto: ' + randomNumber;

    if (randomNumber === player1) {      
        return result.innerHTML = 'Il giocatore 1 ha vinto il lotto!';
    } else if (randomNumber === player2) {
        return result.innerHTML = 'Il giocatore 2 ha vinto il lotto!';
    } else if (Math.abs(randomNumber - player1) < Math.abs(randomNumber - player2)) {
        return result.innerHTML = 'Nessuno dei due giocatori ha vinto il lotto, ma il giocatore 1 si è avvicinato di più';
    } else if (Math.abs(randomNumber - player1) > Math.abs(randomNumber - player2)) {
        return result.innerHTML = 'Nessuno dei due giocatori ha vinto il lotto, ma il giocatore 2 si è avvicinato di più';
    }
}

playButton.onclick = function () {
    const player1 = (document.getElementById('player1') as HTMLInputElement).value;
    const player2 = (document.getElementById('player2') as HTMLInputElement).value;   
    lotto(Number(player1), Number(player2));
}


