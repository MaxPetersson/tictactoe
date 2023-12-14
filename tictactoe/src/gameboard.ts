let nrOfSquares: number = 9;
let gameSquares: Array<HTMLDivElement> = new Array(nrOfSquares);
let gameBoard: HTMLDivElement;

function changeElementsBackgroundColor(element: HTMLDivElement, color: string): void {
    element.style.backgroundColor = color;
}

function highlight(elementToHighlight: HTMLDivElement): void {
    changeElementsBackgroundColor(elementToHighlight, 'lightSalmon');
}

function unhighlight(elementToHighlight: HTMLDivElement): void {
    changeElementsBackgroundColor(elementToHighlight, 'white');
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
    gameSquare.addEventListener("mouseover", () => {
        highlight(gameSquare);
        highlight(o.getElementsByClassName('innerCircle')[0] as HTMLDivElement);
    });
    gameSquare.addEventListener("mouseleave", () => {
        unhighlight(gameSquare);
        unhighlight(o.getElementsByClassName('innerCircle')[0] as HTMLDivElement);
    });

    // Click
    gameSquare.addEventListener("click", () => {
        o.style.visibility = 'visible';
        x.style.visibility = 'visible';
    });

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