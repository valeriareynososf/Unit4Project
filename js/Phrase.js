/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    };

    //methods

    // this adds letter placeholders to the display when the game starts
    addPhraseToDisplay() {
        const div = document.querySelector("div #phrase ul")
        console.log("inside", this.phrase)
        
        for(const char of this.phrase) {
        const li = document.createElement("li");
        if (char !== " ") {
            li.innerHTML= `<li class="hide letter ${char}">${char}</li>`;
        } else {
            li.innerHTML= `<li class="space"> </li>`;
        }
        
        div.appendChild(li);
        }

    }   

    //checks to see if the letter selected by the player matches a letter in the phrase
    checkLetter() {

    }

    //reveals the letter(s) on the board that matches the player's selection
    showMatchedLetter() {

    }
}