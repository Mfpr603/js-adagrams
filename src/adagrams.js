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

  // makes a copy of the lettersInHand array 
  const lettersInHandCopy = [...lettersInHand];

  for (const letter of input) {
    if (letter in lettersInHandCopy) {
      // remove letter from our list
      
    } else {
      // if letter isn;t in our list, return false
      return false;
    }
  }

  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
