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

    //checks to see if the letter selected by the player matches a letter in the phrase
    checkLetter(letter) {
        return this.phrase.includes(letter)
    }

    //reveals the letter(s) on the board that matches the player's selection
    showMatchedLetter(letter) {
        // console.log("show if true:", letter)
        const matchedLetters = document.getElementsByClassName(letter);
        for (const letter of matchedLetters) {
            // console.log("letter:", letter)
            letter.classList.remove('hide');
            letter.classList.add('show');
        }

    }
}