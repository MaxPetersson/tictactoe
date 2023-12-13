let nrOfSquares: number = 9;
let gameSquares: Array<HTMLDivElement> = new Array(nrOfSquares);
let gameBoard: HTMLDivElement;

function createGameSquare(): HTMLDivElement {
    let gameSquare = document.createElement('div') as HTMLDivElement
    gameSquare.classList.add('gameSquare');

    // Mouseover
    gameSquare.addEventListener("mouseover", () => { gameSquare.style.backgroundColor = 'lightsalmon' });
    gameSquare.addEventListener("mouseleave", () => { gameSquare.style.backgroundColor = 'white' });

    // Click
    gameSquare.addEventListener("click", () => { squareX.style.visibility = 'visible'; });

    // X's and O's
    let squareO = document.createElement('div') as HTMLDivElement
    squareO.classList.add('outerCircle');
    squareO.style.visibility = 'hidden';
    gameSquare.appendChild(squareO);

    let squareX = document.createElement('div') as HTMLDivElement
    squareX.classList.add('crossRight');
    squareX.style.visibility = 'hidden';
    gameSquare.appendChild(squareX);

    return gameSquare;
}

function renderGameBoard() {
    gameBoard = document.getElementsByClassName('gameBoardContainer')[0] as HTMLDivElement;

    for (let i = 0; i < nrOfSquares; i++) {
        gameSquares[i] = createGameSquare();
        gameBoard.appendChild(gameSquares[i]);
    }

}

window.onload = renderGameBoard;