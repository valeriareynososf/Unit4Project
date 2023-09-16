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

    /*
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */

    checkLetter(letter) {
        return this.phrase.includes(letter)
    }

    /*
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */

    showMatchedLetter(letter) {
        const matchedLetters = document.getElementsByClassName(letter);
        for (const letter of matchedLetters) {
            letter.classList.remove('hide');
            letter.classList.add('show');
        }

    }
}