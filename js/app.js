/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

{/*
Create a new instance of the Game class and add event listeners for the start button and onscreen keyboard buttons:
*/}
let keyButtons = document.querySelector("#qwerty").querySelectorAll(".key");
let game;
// const game = new Game();

document.querySelector("#btn__reset").addEventListener("click", () => {
    game = new Game();
    game.startGame()
})

keyButtons.forEach( key => {
    key.addEventListener("click", (e) => {
        console.log("event listener goinig off")
        game.handleInteraction(e.target)
    })
})

