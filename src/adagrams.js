const LETTER_POOL = {
  A: 9,
  B: 2,
  C: 2,
  D: 4,
  E: 12,
  F: 2,
  G: 3,
  H: 2,
  I: 9,
  J: 1,
  K: 1,
  L: 4,
  M: 2,
  N: 6,
  O: 8,
  P: 2,
  Q: 1,
  R: 6,
  S: 4,
  T: 6,
  U: 4,
  V: 2,
  W: 2,
  X: 1,
  Y: 2,
  Z: 1,
};

const LETTER_SCORES = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10,
};

const weightedPool = [];
let i = 0;
for (i in LETTER_POOL) {
  const letterFreq = LETTER_POOL[i];
  // console.log(i)
  weightedPool.push(...i.repeat(letterFreq));

  // console.log(weightedPool)
}
export const drawLetters = () => {
  // used a set because it does not allow duplicate indices
  const numberIndex = new Set();

  while (numberIndex.size !== 10) {
    // adds random number from zero to 98
    numberIndex.add(Math.floor(Math.random() * weightedPool.length));
    // console.log(numberIndex)
  }
  const hand = [];
  // takes the numbers of the numberIndex list and uses them
  for (const num of numberIndex) {
    // console.log(weightedPool[num])
    hand.push(weightedPool[num]);
    // return hand;
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2

  // change input from string to array
  const inputArray = input.split("");

  // make a copy of our hand
  const lettersInHandCopy = [...lettersInHand];

  // set a variable to hold true or false
  let usesAvailableLetters = true;

  // if letter is in our hand, remove it. if it isn't, return false
  inputArray.forEach((letter) => {
    if (lettersInHandCopy.includes(letter)) {
      // remove the letter from our pool
      for (let i = 0; i < lettersInHandCopy.length; i++) {
        if (lettersInHandCopy[i] === letter) {
          lettersInHandCopy.splice(i, 1);
          break;
        }
      }
    } else {
      usesAvailableLetters = false;
    }
  });

  return usesAvailableLetters;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3

  // change input from string to array
  const word_array = word.split("");

  // loop through each letter, add its score
  let score = 0;
  word_array.forEach((letter) => {
    let letter_score = LETTER_SCORES[letter.toUpperCase()];
    score = score + letter_score;
  });

  // add length bonus
  if (word.length >= 7) {
    score = score + 8;
  }

  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
