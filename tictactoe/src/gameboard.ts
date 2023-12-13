function setupGameSquare(gameSquare: HTMLElement) {
    gameSquare.addEventListener("mouseover", () => { gameSquare.style.backgroundColor = 'lightsalmon' });
    gameSquare.addEventListener("mouseleave", () => { gameSquare.style.backgroundColor = 'white' });
}

function setupGameSquares() {
    const gameSquares = document.getElementsByClassName("gameSquare");
    const gameSquareArray = Array.from(gameSquares);

    gameSquareArray.forEach(gameSquare => { setupGameSquare(gameSquare as HTMLElement); });
}