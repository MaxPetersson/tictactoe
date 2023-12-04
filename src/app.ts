let message: string = 'TypeScript: GoodBye, World!';
// create a new heading 1 element
let heading = document.createElement('h1');
heading.textContent = message;
// add the heading the document
document.body.appendChild(heading);

function generateRandomNumber(maximumDieRoll: number): string {
    const minimumDieRoll = 1;
    const dieResult = Math.floor(Math.random() * (maximumDieRoll - minimumDieRoll + 1)) + minimumDieRoll;
    return dieResult as unknown as string;
};

function delay(milliseconds: number){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
};

async function rollDie(dieParagraphId: string, maximumDieRoll: number): Promise<void> {
        let dieParagraph = document.getElementById(dieParagraphId);
        if(dieParagraph)
        {
            for(let i = 0; i < 15; i++)
            {
                await delay(100);
                dieParagraph.innerHTML = generateRandomNumber(maximumDieRoll);
            }
        }
};