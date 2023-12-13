let nrOfSquares = 9;

function createGameSquare(): HTMLDivElement {
    let gameSquare = document.createElement('div') as HTMLDivElement
    gameSquare.classList.add('gameSquare');
    gameSquare.addEventListener("mouseover", () => { gameSquare.style.backgroundColor = 'lightsalmon' });
    gameSquare.addEventListener("mouseleave", () => { gameSquare.style.backgroundColor = 'white' });

    return gameSquare;
}

function renderGameBoard() {
    let gameBoard = document.getElementsByClassName('gameBoardContainer')[0];

    for (let i = 0; i < nrOfSquares; i++) {
        let gameSquare = createGameSquare();
        gameBoard.appendChild(gameSquare);
    }
}

window.onload = renderGameBoard;