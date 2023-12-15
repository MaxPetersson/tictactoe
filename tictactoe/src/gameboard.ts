let nrOfSquares: number = 9;
let gameSquares: Array<HTMLDivElement> = new Array(nrOfSquares);
let gameBoard: HTMLDivElement;
let drawX: boolean = true;

const mouseOverEventListener: EventListener = (event: Event) => { highlight(event) };
const mouseLeaveEventListener: EventListener = (event: Event) => { unhighlight(event) };
const clickEventListener: EventListener = (event: Event) => { playTurn(event) };

function changeElementsBackgroundColor(element: HTMLDivElement, color: string): void {
    element.style.backgroundColor = color;
}

function changeGameSquareBackgroundColor(gameSquare: HTMLDivElement, color: string): void {
    changeElementsBackgroundColor(gameSquare, color);
    changeElementsBackgroundColor(gameSquare.getElementsByClassName('innerCircle')[0] as HTMLDivElement, color);
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
        gameSquare.appendChild(createX());
    }
    else {
        gameSquare.appendChild(createO());
    }

    drawX = !drawX;

    unhighlight(event)
    gameSquare.removeEventListener("mouseover", mouseOverEventListener);
    gameSquare.removeEventListener("mouseleave", mouseLeaveEventListener);
    gameSquare.removeEventListener("click", clickEventListener);

}

function createX(): HTMLDivElement {
    var elem = document.createElement("img");
    elem.setAttribute("src", "../images/x.jpg");
    elem.setAttribute("height", "200");
    elem.setAttribute("width", "200");
    let x = document.createElement('div') as HTMLDivElement
    x.appendChild(elem);
    x.classList.add('x');
    return x;
}

function createO(): HTMLDivElement {
    var elem = document.createElement("img");
    elem.setAttribute("src", "../images/o.jpg");
    elem.setAttribute("height", "200");
    elem.setAttribute("width", "200");
    let o = document.createElement('div') as HTMLDivElement
    o.appendChild(elem);
    o.classList.add('o');
    return o;
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