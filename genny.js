/* hard code some words in an array */

const fakeDB = [
  'Dwemer',
  'Dunmer',
  'Nord',
  'Altmer',
  'Aragorn',
  'Frodo',
  'Finrod',
  'Galadriel',
  'Alatariel',
  'Felagund'
]
const characters = ['!', '@', '#', '$', '%', '^', '&']

// randomizer function takes a range and returns a digit in that range.
export const randomizer = function(rangeStart, rangeEnd) {
  return Math.round(Math.random() * (rangeEnd - rangeStart) + rangeStart)
}

/* create function to choose two random words, in random order, adding 1-5 random digits and 1 random special character */

export default genPass = function() {
  // how many digits?
  const digitAmount = randomizer(1, 4)
  const badArray = []
  for (let i = 0; i < digitAmount; i++) {
    let curDigit = randomizer(0, 9)
    badArray.push(curDigit)
  }
  // badArray = [1, 5, 2, 8]

  // special character
  const specChar = characters[randomizer(0, characters.length - 1)]
  badArray.push(specChar)
  // badArray = [1, 2, 3, %]
  const wordArr = fakeDB.slice()
  const spliceOutIdxOne = randomizer(0, wordArr.length - 1)
  const firstWord = wordArr.splice(spliceOutIdxOne, 1)[0]
  const spliceOutIdxTwo = randomizer(0, wordArr.length - 1)
  const secondWord = wordArr.splice(spliceOutIdxTwo, 1)[0]
  badArray.push(firstWord, secondWord)
  // badArray = [1, 2, 4, ^, Elf, Edain];
  const pwArray = []
  while (badArray.length > 0) {
    // get random index number and splice out that word
    let spliceOutIdx = randomizer(0, badArray.length - 1)
    let newEl = badArray.splice(spliceOutIdx, 1)[0]
    // push the word into pwArray
    pwArray.push(newEl)
  }
  // [1, elf, ^, 3, dwemer]
  return pwArray.join('')
}
