/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [ 
            { phrase: "Chocolate is delicious" }, 
            { phrase: "Coding is fun" }, 
            { phrase: "You are amazing"},
            { phrase: "Good company and summer nights"},
            { phrase:  "Life is short, yet sweet."}
        ];
        this.activePhrase = null;
    };
    //methods

    /*
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */

    getRandomPhrase() {
        const num = Math.floor(Math.random() * 4);
        return this.phrases[num]
    }

    /*
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        const div = document.querySelector("#overlay").style.display = "none"
        const phrase = this.getRandomPhrase();
        this.activePhrase = phrase
        console.log(this.activePhrase.phrase)
        const phrase1 = new Phrase(this.activePhrase.phrase)
        phrase1.addPhraseToDisplay() 
    }

    // //reveals the letter(s) on the board that matches the player's selection
    // showMatchedLetter() {

    // }
}