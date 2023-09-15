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

    // //checks to see if the letter selected by the player matches a letter in the phrase
    // checkLetter() {

    // }

    // //reveals the letter(s) on the board that matches the player's selection
    // showMatchedLetter() {

    // }
}