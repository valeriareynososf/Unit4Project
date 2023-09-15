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
let keyButtons = document.querySelectorAll("button.key");

keyButtons.forEach( key => {
    key.addEventListener("click", (e) => {
        game.handleInteraction(e.target)
    })
})

