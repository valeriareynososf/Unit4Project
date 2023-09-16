/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

{/*
Create a new instance of the Game class and add event listeners for the start button and onscreen keyboard buttons:
*/}
const keys = document.querySelectorAll(".key");

let game;

const resetGame = () => {
    const hearts = document.querySelectorAll(".tries img");
    hearts.forEach(img => img.src = 'images/liveHeart.png');

    document.querySelector("div #phrase ul").innerHTML = '';

    keys.forEach(key => {
        key.disabled = false;
        key.classList.remove("wrong");
        key.classList.remove("chosen");
    })
}

document.querySelector("#btn__reset").addEventListener("click", () => {
    resetGame()
    game = new Game();
    game.startGame()
})

keys.forEach( key => {
    key.addEventListener("click", (e) => {
        game.handleInteraction(e.target)
    })
})

