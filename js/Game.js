/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [ 
            new Phrase( "Chocolate is delicious" ), 
            new Phrase( "Coding is fun" ), 
            new Phrase( "You are amazing" ),
            new Phrase( "Good company and summer nights" ),
            new Phrase(  "Life is short yet sweet" )
        ];
        this.activePhrase = null;
    };


    /*
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */

    getRandomPhrase() {
        const index = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[index]
    }

     /*
     * Begins game by selecting a random phrase and displaying it to user
    */

    startGame() {
        document.querySelector("#overlay").style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }


    handleInteraction( key ) {
        key.disabled = true;
        const letter = key.textContent; 
        const isCorrect =  this.activePhrase.checkLetter(letter);

        if (isCorrect) {
            this.activePhrase.showMatchedLetter(letter);
            key.classList.add("chosen");
            if (this.checkForWin()) this.gameOver("win");

        } else {

            key.classList.add("wrong")
            this.removeLife()
        }
    }

    /*
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
    */

    checkForWin() {
        const hidden = document.querySelectorAll("li.hide");
        return hidden.length === 0;
    }

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */

    removeLife() {
        const hearts = document.querySelectorAll(".tries img");
        hearts[this.missed].src = 'images/lostHeart.png'
        this.missed++

        if (this.missed === 5) this.gameOver("lose");
    }

    /*
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */

    gameOver(result) {
        document.querySelector("#overlay").style.display = "block";
        document.querySelector("#overlay").classList.add(result)

        const message = result === "win" ? "Congrats! You've Won!" : "Try Again! You've Lost!"

        document.querySelector("#game-over-message").textContent = message;
        
    }

}