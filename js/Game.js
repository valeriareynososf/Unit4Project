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
            new Phrase(  "Life is short, yet sweet." )
        ];
        this.activePhrase = null;
    };
    //methods

//     /*
//     * Selects random phrase from phrases property
//     * @return {Object} Phrase object chosen to be used
//     */

    getRandomPhrase() {
        const index = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[index]
    }

//     /*
//     * Begins game by selecting a random phrase and displaying it to user
//     */
    startGame() {
        document.querySelector("#overlay").style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        // console.log(this.activePhrase.phrase)
        // const phrase1 = new Phrase(this.activePhrase.phrase)
        // phrase1.addPhraseToDisplay() 
        console.log("this.activePhrase", this.activePhrase)
        this.handleInteraction() 
    }


    handleInteraction( key ) {
        console.log("clicked letter:", key);
        const letter = key?.textContent; //Fix KEY!
        const isCorrect =  this.activePhrase.checkLetter(letter);
        console.log("Correct?",isCorrect)
        if (isCorrect) {
            this.activePhrase.showMatchedLetter(letter)
            if (this.checkForWin()) this.gameOver("win")
        } else {
            this.removeLife()
        }
    }

    checkForWin() {
        const hidden = document.querySelectorAll("li.hide");
        return hidden.length === 0;
    }

    removeLife() {
        if (this.missed === 5) {
            this.gameOver("lose")
        } else {
            const hearts = document.querySelectorAll(".tries img");
            hearts[this.missed].src = 'images/lostHeart.png'
            this.missed++
        }
        
        
        console.log(this.missed)
    }
// // `gameOver()`: This method displays the original start screen overlay, and
// // depending on the outcome of the game, updates the overlay `h1` element with
// // a friendly win or loss message, and replaces the overlay’s `start` CSS class with
// // either the `win` or `lose` CSS class.

    gameOver(result) {
        console.log("GAME OVER!", result)
        document.querySelector("#overlay").style.display = "block";
        document.querySelector("#overlay").classList.add(result)
        const message = result === "win" ? "Congrats! You've Won!" : "Try Again! You've Lost!"
        console.log("message!", message)
        document.querySelector("#game-over-message").textContent = message;
        //const hearts = document.querySelectorAll(".tries img");
        //game-over-message
        
    }

}