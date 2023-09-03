// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
//
//     You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.
//
// Example:
//
//     ['a','b','c','d','f'] -> 'e'
//     ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)
//
// Have fun coding it and please don't forget to vote and rank this kata! :-)
//
// I have also created other katas. Take a look if you enjoyed this kata!
//

function findMissingLetter(array) {
    const lettersIsBig = array[0].toUpperCase() === array[0]
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const indexStart = alphabet.indexOf(array[0].toLowerCase())
    const indexEnd = alphabet.indexOf(array[array.length - 1].toLowerCase())
    const aplphabetOriginalPart = alphabet.slice(indexStart, indexEnd)
    let res

    for (let i = 0; aplphabetOriginalPart.length - 1; i++) {
        if (aplphabetOriginalPart[i] !== array[i].toLowerCase()) {
            res = aplphabetOriginalPart[i]
            break
        }
    }
    return lettersIsBig ? res.toUpperCase() : res;
}

