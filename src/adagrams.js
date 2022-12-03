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
// const letters = ['A','B','C','D','E','F','G','H',
// 'I','J','K','L','M','N','O','P','Q','R','S',
// 'T','U','V','W','X','Y','Z'];

// const weights = [9,2,2,4,12,2,3,2,9,1,1,4,2,6,8,2,1,6,4,6,4,2,2,1,2,1];
// console.log(weights.sum)

// const randomLetter = function (){
//   // finds total weight
//   let totalWeight = weights.reduce((a, b) => a + b, 0);

//   // pick random number between 0 and total weight - 1
//   let randomNumber = Math.floor(Math.random() * totalWeight);

//   // based off randomNumber pick a letter
//   for (let i = 0; i < letters.length; i++){
//     // subtract 9 then 2 etc. to find letter
//     random -= weights[i];
//     // return correct letter
//     if (random < 0) {
//       return letters[i];
//     }
//   }
// };
const weightedPool = [];
let i = 0;
for (i in LETTER_POOL) {
  const letterFreq = LETTER_POOL[i];
  // console.log(i)
  weightedPool.push(...i.repeat(letterFreq));

  // console.log(weightedPool)
}
export const drawLetters = () => {
  const numberIndex = new Set();

  while (numberIndex.size !== 10) {
    // adds random number from zero to 98 maybe we have to add + 1 to include 98
    numberIndex.add(Math.floor(Math.random() * weightedPool.length));
    // console.log(numberIndex)
  }
  let hand = [];
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
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
