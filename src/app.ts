let message: string = 'TypeScript: GoodBye, World!';
// create a new heading 1 element
let heading = document.createElement('h1');
heading.textContent = message;
// add the heading the document
document.body.appendChild(heading);

function generateRandomNumber(): string {
    return "4";
};

function rollDie(dieParagraphId: string): void {
        let dingdong = document.getElementById(dieParagraphId);
        if(dingdong)
        {
            dingdong.textContent = generateRandomNumber();
        }
};