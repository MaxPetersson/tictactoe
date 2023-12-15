let nrsInRow: number = 3;
let nrOfSquares: number = nrsInRow * nrsInRow;
let gameSquares: Array<HTMLDivElement> = new Array(nrOfSquares);
let gameBoard: HTMLDivElement;
let drawX: boolean = true;

class GamePiece{
    pieceDiv: HTMLDivElement;

    constructor(_pieceDiv: HTMLDivElement){
        this.pieceDiv = _pieceDiv;
    }
}

const mouseOverEventListener: EventListener = (event: Event) => { highlight(event) };
const mouseLeaveEventListener: EventListener = (event: Event) => { unhighlight(event) };
const clickEventListener: EventListener = (event: Event) => { playTurn(event) };

function changeElementsBackgroundColor(element: HTMLDivElement, color: string): void {
    element.style.backgroundColor = color;
}

function changeGameSquareBackgroundColor(gameSquare: HTMLDivElement, color: string): void {
    changeElementsBackgroundColor(gameSquare, color);
}

function highlight(event: Event) {
    const gameSquare = event.currentTarget as HTMLDivElement;
    changeGameSquareBackgroundColor(gameSquare, 'lightSalmon');
}

function unhighlight(event: Event) {
    const gameSquare = event.currentTarget as HTMLDivElement;
    changeGameSquareBackgroundColor(gameSquare, 'white');
}

function playTurn(event: Event) {
    const gameSquare = event.currentTarget as HTMLDivElement;

    if (drawX) {
        gameSquare.appendChild(createGamePiece('x').pieceDiv);
    }
    else {
        gameSquare.appendChild(createGamePiece('o').pieceDiv);
    }

    drawX = !drawX;

    unhighlight(event)
    gameSquare.removeEventListener("mouseover", mouseOverEventListener);
    gameSquare.removeEventListener("mouseleave", mouseLeaveEventListener);
    gameSquare.removeEventListener("click", clickEventListener);

}

function createGamePiece(piece: string): GamePiece {
    let elem = document.createElement("img");
    if (piece == 'x') {
        elem.setAttribute("src", "../images/x.jpg");
    }
    else {
        elem.setAttribute("src", "../images/o.jpg");
    }
    elem.setAttribute("height", "200");
    elem.setAttribute("width", "200");

    let pieceDiv = document.createElement('div') as HTMLDivElement
    pieceDiv.appendChild(elem);
    const pD = new GamePiece(pieceDiv);
    return pD;
}

function createGameSquare(): HTMLDivElement {
    let gameSquare = document.createElement('div') as HTMLDivElement
    gameSquare.classList.add('gameSquare');

    // Mouseover
    gameSquare.addEventListener("mouseover", mouseOverEventListener);
    gameSquare.addEventListener("mouseleave", mouseLeaveEventListener);

    // Click
    gameSquare.addEventListener("click", clickEventListener);

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