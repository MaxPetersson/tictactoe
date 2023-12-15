let nrsInRow: number = 3;
let numberOfSquares: number = nrsInRow * nrsInRow;
let gameBoard: GameBoard;

class GamePiece {
    pieceDiv: HTMLDivElement;

    constructor(_pieceDiv: HTMLDivElement) {
        this.pieceDiv = _pieceDiv;
    }
}

class GameSquare {
    constructor() {
        this.gameSquare = document.createElement('div') as HTMLDivElement
        this.gameSquare.classList.add('gameSquare');

        this.mouseOver = () => { this.highlight() };

        this.mouseLeave = () => { this.unhighlight() };

        this.click = () => {
            this.removeEventListeners();
            this.unhighlight();
            gameBoard.playTurn(this.gameSquare);
        };

        this.addEventListeners();
    }

    highlight(): void {
        changeElementsBackgroundColor(this.gameSquare, 'lightSalmon');
    }

    unhighlight(): void {
        changeElementsBackgroundColor(this.gameSquare, 'white');
    }

    removeEventListeners(): void {
        this.gameSquare.removeEventListener("mouseover", this.mouseOver);
        this.gameSquare.removeEventListener("mouseleave", this.mouseLeave);
        this.gameSquare.removeEventListener("click", this.click);
    }

    addEventListeners(): void {
        this.gameSquare.addEventListener("mouseover", this.mouseOver);
        this.gameSquare.addEventListener("mouseleave", this.mouseLeave);
        this.gameSquare.addEventListener("click", this.click);
    }

    resetGameSquare(): void {
        let gamePiece = this.gameSquare.firstChild;
        if (gamePiece) {
            this.gameSquare.removeChild(gamePiece);
            this.addEventListeners();
        }
    }

    gameSquare: HTMLDivElement;
    mouseOver: EventListener;
    mouseLeave: EventListener;
    click: EventListener;
}

class GameBoard {
    constructor(gameBoard_: HTMLDivElement, boardSize_: number) {
        this.gameBoard = gameBoard_;
        this.boardSize = boardSize_;
        this.gameSquares = new Array(boardSize_)
        this.drawX = true;
    }

    init() {
        for (let i = 0; i < this.boardSize; i++) {
            this.gameSquares[i] = new GameSquare;
            this.gameBoard.appendChild(this.gameSquares[i].gameSquare);
        }

    }

    reset() {
        this.gameSquares.forEach((gameSquare: GameSquare) => gameSquare.resetGameSquare());
        this.drawX = true;
    }

    playTurn(gameSquare: HTMLDivElement) {
        if (this.drawX) {
            gameSquare.appendChild(createGamePiece('x').pieceDiv);
        }
        else {
            gameSquare.appendChild(createGamePiece('o').pieceDiv);
        }

        this.drawX = !this.drawX;
    }

    gameBoard: HTMLDivElement;
    boardSize: number;
    gameSquares: Array<GameSquare>;
    drawX: boolean;
}

function changeElementsBackgroundColor(element: HTMLDivElement, color: string): void {
    element.style.backgroundColor = color;
}

function fetchImg(src: string): HTMLImageElement {
    let imgElement = document.createElement("img");
    imgElement.setAttribute("src", "../images/" + src);
    imgElement.setAttribute("height", "200");
    imgElement.setAttribute("width", "200");

    return imgElement;
}

function createGamePiece(piece: string): GamePiece {
    let pieceDiv = document.createElement('div') as HTMLDivElement

    if (piece == 'x') {
        pieceDiv.appendChild(fetchImg("x.jpg"));
    }
    else {
        pieceDiv.appendChild(fetchImg("o.jpg"));
    }

    return new GamePiece(pieceDiv);
}

function init() {
    gameBoard = new GameBoard(document.getElementsByClassName('gameBoardContainer')[0] as HTMLDivElement, numberOfSquares);

    gameBoard.init();
}

window.onload = init;