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
    changeGameSquareBackgroundColor(gameSquare, 'white');ßß
}

function playTurn(event: Event) {
    const gameSquare = event.currentTarget as HTMLDivElement;
    const symbolContainers = gameSquare.getElementsByClassName('symbolContainer');
    if (drawX) {
        (symbolContainers[1] as HTMLDivElement).style.visibility = 'visible';
    }
    else {
        (symbolContainers[0] as HTMLDivElement).style.visibility = 'visible';
    }

    drawX = !drawX;

    unhighlight(event)
    gameSquare.removeEventListener("mouseover", mouseOverEventListener);
    gameSquare.removeEventListener("mouseleave", mouseLeaveEventListener);
    gameSquare.removeEventListener("click", clickEventListener);

}
function createX(): HTMLDivElement {
    let xRight = document.createElement('div') as HTMLDivElement
    xRight.classList.add('crossRight');

    let xLeft = document.createElement('div') as HTMLDivElement
    xLeft.classList.add('crossLeft');

    let x = document.createElement('div') as HTMLDivElement
    x.classList.add('symbolContainer');
    x.appendChild(xRight);
    x.appendChild(xLeft);
    x.style.visibility = 'hidden';

    return x;
}

function createO(): HTMLDivElement {
    let innerO = document.createElement('div') as HTMLDivElement
    innerO.classList.add('innerCircle');

    let outerO = document.createElement('div') as HTMLDivElement
    outerO.classList.add('outerCircle');
    outerO.appendChild(innerO);

    let o = document.createElement('div') as HTMLDivElement
    o.classList.add('symbolContainer');
    o.appendChild(outerO);
    o.style.visibility = 'hidden';

    return o;
}

function createGameSquare(): HTMLDivElement {
    let gameSquare = document.createElement('div') as HTMLDivElement
    gameSquare.classList.add('gameSquare');

    // X's and O's
    let o = createO();
    gameSquare.appendChild(o);

    let x = createX()
    gameSquare.appendChild(x);

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