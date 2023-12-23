let nrsInRow: number = 3;
let numberOfSquares: number = nrsInRow * nrsInRow;
let gameBoard: GameBoard;

class GamePiece {
    pieceDiv: HTMLDivElement;

    constructor() {
        this.pieceDiv = document.createElement('div') as HTMLDivElement;
    }

    fetchImage(imageName: string): HTMLImageElement {
        let imgElement = document.createElement("img");
        imgElement.setAttribute("src", "../images/" + imageName);
        imgElement.setAttribute("height", "200");
        imgElement.setAttribute("width", "200");

        return imgElement;
    }

    setGamePiece(piece: string): void {
        if (piece == 'x') {
            this.pieceDiv.appendChild(this.fetchImage("x.jpg"));
        }
        else {
            this.pieceDiv.appendChild(this.fetchImage("o.jpg"));
        }
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
            gameBoard.playTurn(this);
        };

        this.addEventListeners();
    }

    highlight(): void {
        changeElementsBackgroundColor(this.gameSquare, 'lightSalmon');
    }

    highlightRainbow(): void {

        const colorCode: number = Math.floor(Math.random() * (8));
        let color: string;
        switch(colorCode) {
            case 1: {
                color = 'red';
                break;
            }
            case 2: {
                color = 'orange';
                break;
            }
            case 3: {
                color = 'yellow';
                break;
            }
            case 4: {
                color = 'lime';
                break;
            }
            case 5: {
                color = 'blue';
                break;
            }
            case 6: {
                color = 'purple';
                break;
            }
            case 7: {
                color = 'magenta';
                break;
            }
            default: {
                color = 'pink';
                break;
            }
        }
        changeElementsBackgroundColor(this.gameSquare, color);
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

    setGamePiece(gamePiece_: GamePiece): void {
        this.gamePiece = gamePiece_;
    }

    renderGamePiece(): void {
        if (this.gamePiece){
            this.gameSquare.appendChild(this.gamePiece.pieceDiv);
        }
    }

    gameSquare: HTMLDivElement;
    gamePiece!: GamePiece;
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

    playTurn(gameSquare: GameSquare) {
        let gamePiece: GamePiece = new GamePiece();
        if (this.drawX) {
            gamePiece.setGamePiece('x')
        }
        else {
            gamePiece.setGamePiece('o')
        }

        gameSquare.setGamePiece(gamePiece);
        gameSquare.renderGamePiece();
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

function init() {
    gameBoard = new GameBoard(document.getElementsByClassName('gameBoardContainer')[0] as HTMLDivElement, numberOfSquares);

    gameBoard.init();
}

window.onload = init;