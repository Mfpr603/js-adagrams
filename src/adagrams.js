import { parseSync } from "@babel/core";

const LETTER_POOL = {
  'A': 9,
  'B': 2,
  'C': 2,
  'D': 4,
  'E': 12,
  'F': 2,
  'G': 3,
  'H': 2,
  'I': 9,
  'J': 1,
  'K': 1,
  'L': 4,
  'M': 2,
  'N': 6,
  'O': 8,
  'P': 2,
  'Q': 1,
  'R': 6,
  'S': 4,
  'T': 6,
  'U': 4,
  'V': 2,
  'W': 2,
  'X': 1,
  'Y': 2,
  'Z': 1
};


////////// wave 1 //////////
export const drawLetters = () => {

  // make weighted list of letters
  let letters = Object.keys(LETTER_POOL);

  let weightedLetters = []
  letters.forEach((letter) => {
    for (let i = 0; i < LETTER_POOL[letter]; i++) {
      weightedLetters.push(letter);
    }
  });

  // select 10 letters (and remove from pool)
  let drawnLetters = []
  while (drawnLetters.length < 10) {
    // find one random letter from weighted list
    let randomLetter = weightedLetters[Math.floor(Math.random()*weightedLetters.length)];
    // add that letter to our hand
    drawnLetters.push(randomLetter);
    // remove that letter from pool
    for (let i = 0; i < weightedLetters.length; i++) {
      if (weightedLetters[i] === randomLetter) {
        weightedLetters.splice(i, 1);
        break;
      };
    };
  }

  // reset pool
  drawnLetters.forEach((letter) => {
    weightedLetters.push(letter)
  })

  
  return drawnLetters
};

///////// wave 2 //////////
export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

////////// wave 3 //////////
export const scoreWord = (word) => {
  // Implement this method for wave 3
};

////////// wave 4 //////////
export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
