/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

{/*
Create a new instance of the Game class and add event listeners for the start button and onscreen keyboard buttons:
*/}

const game = new Game();

document.querySelector("#btn__reset").addEventListener("click", () => {
    game.startGame()
})

//const phrase = new Phrase("I LOVE CHOCOLATE");



// console.log(phrase.phrase)

// game.phrases.forEach((phrase, index) => {
//     console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// })

// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: ${phrase.phrase}`)
// }



// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());

//step 6
// game.getRandomPhrase().addPhraseToDisplay();
// const randomPhrase = game.getRandomPhrase();
// console.log(randomPhrase.phrase)
// const phrase = new Phrase(randomPhrase.phrase);
// phrase.addPhraseToDisplay();

//step 7
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);