// #Detail
//
// Countdown is a British game show with number and word puzzles.
// The letters round consists of the contestant picking 9 shuffled letters - either picking from the vowel pile or the consonant pile.
// The contestants are given 30 seconds to try to come up with the longest English word they can think of with the available letters - letters can not be used more than once unless there is another of the same character.
//
//     #Task
//
// Given an uppercase 9 letter string, letters, find the longest word that can be made with some or all of the letters.
// The preloaded array words (or $words in Ruby) contains a bunch of uppercase words that you will have to loop through.
// Only return the longest word; if there is more than one, return the words of the same lengths in alphabetical order.
// If there are no words that can be made from the letters given, return None/nil/null.
//
// ##Examples
//
// letters = "ZZZZZZZZZ"
// longest word = None
//
// letters = "POVMERKIA",
//     longest word = ["VAMPIRE"]
//
// letters = "DVAVPALEM"
// longest word = ["VAMPED", "VALVED", "PALMED"]

const words = ['TODAY', 'TOWER', 'TRADE', 'WATER', 'DAY']

function longestWord(letters) {
    let container = []
    for (let i = 0; i < words.length; i++) {
        let copyLetters = letters.split('')
        let storageWord = words[i].split('')

        for (let j = 0; j < letters.length; j++) {
            let inS = storageWord.findIndex(el => el === letters[j])
            inS !== -1
                ? storageWord.splice(inS, 1) && copyLetters.splice(j, 1)
                : undefined
            if (storageWord.length === 0) {
                container.push(words[i])
            }

        }
    }
    if (container.length === 0) return null
    container = Array.from(new Set(container))
    let maxValue = Math.max(...container.map(el => el.length))
    return container.filter(el => el.length === maxValue)
}


console.log(longestWord('TDWAYZROE'))
