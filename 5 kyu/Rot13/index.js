function rot13(message) {
    const alphabet = [...'abcdefghijklmnopqrstuvwxyz']
    const counterIndexAlphabet = findedIndex => findedIndex < 13 ? 13 + findedIndex : findedIndex - 13
    const isUpperCase = letter => alphabet.some(l => l.toUpperCase() === letter)
    return [...message].map((el) => {
        let findedEl = alphabet.findIndex((f) => el.toLowerCase() === f)
        if (findedEl === -1) return el
        else return isUpperCase(el) ? alphabet[counterIndexAlphabet(findedEl)].toUpperCase() : alphabet[counterIndexAlphabet(findedEl)]
    }).join('')
}


console.log(rot13('WAst')) //"grfg"

// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
//
//     Create a function that takes a string and returns the string ciphered with Rot13.
//     If there are numbers or special characters included in the string, they should be returned as they are.
//     Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
